"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Fondo de "aurora" animada (shader WebGL con Three.js). Capa de fondo: se
 * estira a su contenedor (`absolute inset-0`) y no captura eventos. La máscara
 * (vía className) lo desvanece sobre la columna de texto.
 *
 * Optimizado para móvil (prioridad del proyecto):
 *  - Mismo shader en móvil que en escritorio, pero adaptado: menos
 *    iteraciones, sin sobre-muestreo (pixelRatio 1) y algo más tenue, para no
 *    castigar ni el rendimiento ni la legibilidad en pantallas pequeñas.
 *  - `import("three")` dinámico: three solo se descarga en esta ruta (no infla
 *    el resto del sitio).
 *  - Se pausa fuera de pantalla (IntersectionObserver) y respeta
 *    `prefers-reduced-motion` (fotograma estático).
 */
export function ShaderBackground({
  className,
  intensity = 1.2,
  mobileIntensity,
}: {
  className?: string;
  intensity?: number;
  /** Intensidad en móvil/tablet. Por defecto `intensity * 0.75` (más tenue). */
  mobileIntensity?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Móvil/tablet (<1024px): mismo shader, adaptado (menos pasadas y más tenue).
    const mobile = window.matchMedia("(max-width: 1023px)").matches;

    let cancelled = false;
    let cleanup = () => {};
    const ITER = mobile ? 18 : 35;

    import("three")
      .then((THREE) => {
        if (cancelled || !container) return;

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        let renderer: import("three").WebGLRenderer;
        try {
          renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        } catch {
          return; // Sin WebGL: se queda el fondo oscuro.
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1 : 1.5));

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const material = new THREE.ShaderMaterial({
          transparent: true,
          uniforms: {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(1, 1) },
            uIntensity: { value: mobile ? mobileIntensity ?? intensity * 0.75 : intensity },
          },
          vertexShader: `void main(){ gl_Position = vec4(position, 1.0); }`,
          fragmentShader: `
            uniform float iTime;
            uniform vec2 iResolution;
            uniform float uIntensity;

            #define NUM_OCTAVES 3

            float rand(vec2 n){ return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
            float noise(vec2 p){
              vec2 ip = floor(p); vec2 u = fract(p); u = u*u*(3.0-2.0*u);
              float res = mix(
                mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
                mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
              return res * res;
            }
            float fbm(vec2 x){
              float v = 0.0; float a = 0.3; vec2 shift = vec2(100);
              mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
              for (int i = 0; i < NUM_OCTAVES; ++i){ v += a * noise(x); x = rot * x * 2.0 + shift; a *= 0.4; }
              return v;
            }

            void main(){
              vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
              vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
              vec2 v; vec4 o = vec4(0.0);
              float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

              for (float i = 0.0; i < ${ITER}.0; i++){
                v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
                float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / ${ITER}.0));
                // Monocromo (blanco-frío, sin color): solo varía el brillo.
                float lum = 0.55 + 0.45 * sin(i * 0.3 + iTime * 0.5);
                vec4 auroraColors = vec4(vec3(0.92, 0.95, 1.0) * lum, 1.0);
                vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
                float thinnessFactor = smoothstep(0.0, 1.0, i / ${ITER}.0) * 0.6;
                o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
              }

              o = tanh(pow(o / 100.0, vec4(1.6)));
              gl_FragColor = o * uIntensity;
            }
          `,
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const canvas = renderer.domElement;
        canvas.style.position = "absolute";
        canvas.style.inset = "0";
        canvas.style.display = "block";
        container.appendChild(canvas);

        const resize = () => {
          const w = Math.max(1, container.clientWidth);
          const h = Math.max(1, container.clientHeight);
          renderer.setSize(w, h, true);
          const pr = renderer.getPixelRatio();
          material.uniforms.iResolution.value.set(w * pr, h * pr);
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(container);

        let raf = 0;
        let running = false;
        const animate = () => {
          material.uniforms.iTime.value += 0.016;
          renderer.render(scene, camera);
          raf = requestAnimationFrame(animate);
        };
        const start = () => {
          if (!running) {
            running = true;
            raf = requestAnimationFrame(animate);
          }
        };
        const stop = () => {
          if (running) {
            running = false;
            cancelAnimationFrame(raf);
          }
        };

        const io = new IntersectionObserver(([entry]) => {
          if (reduce) return;
          if (entry.isIntersecting) start();
          else stop();
        });
        io.observe(container);

        if (reduce) renderer.render(scene, camera); // estático

        cleanup = () => {
          stop();
          ro.disconnect();
          io.disconnect();
          if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
          geometry.dispose();
          material.dispose();
          renderer.dispose();
        };
      })
      .catch(() => {
        /* three no disponible: se queda el fondo oscuro */
      });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [intensity, mobileIntensity]);

  return (
    <div ref={containerRef} aria-hidden className={cn("pointer-events-none absolute inset-0", className)} />
  );
}

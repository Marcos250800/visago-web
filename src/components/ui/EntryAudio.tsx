"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Voz de entrada: se reproduce en el PRIMER gesto del usuario (clic/toque/tecla)
 * en cada carga de la web. Los navegadores no permiten audio con sonido sin una
 * interacción previa, así que se engancha al primer gesto. Muestra un botón para
 * silenciar mientras suena.
 */
export function EntryAudio({ src = "/audio/voz-entrada.mp3" }: { src?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let done = false;
    const events = ["pointerdown", "keydown", "touchstart"] as const;

    const cleanup = () => events.forEach((e) => window.removeEventListener(e, trigger));

    function trigger() {
      if (done) return;
      done = true;
      cleanup();
      audio!
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }

    events.forEach((e) => window.addEventListener(e, trigger, { once: true, passive: true }));
    const onEnded = () => setPlaying(false);
    audio.addEventListener("ended", onEnded);

    return () => {
      cleanup();
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const stop = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" aria-hidden />
      {playing && (
        <button
          type="button"
          onClick={stop}
          aria-label="Silenciar la voz de entrada"
          className="fixed bottom-5 right-5 z-[120] inline-flex items-center gap-2 rounded-full border border-line bg-background/70 px-4 py-2 font-mono text-[11px] uppercase tracking-kicker text-muted backdrop-blur-sm transition-colors hover:text-foreground"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M11 5 6 9H2v6h4l5 4z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
          Silenciar
        </button>
      )}
    </>
  );
}

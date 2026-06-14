/** @type {import('next').NextConfig} */

// Cabeceras de seguridad aplicadas a todas las rutas. (HSTS solo surte efecto
// bajo HTTPS, p. ej. en producción con dominio en Vercel.)
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig = {
  poweredByHeader: false, // no anunciar "X-Powered-By: Next.js"
  transpilePackages: ["react-leaflet", "@react-leaflet/core"],
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Jost, Questrial } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { EntryAudio } from "@/components/ui/EntryAudio";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});
// Wordmark "VisaGo" — geométrica monolínea, casi idéntica al logo oficial.
const questrial = Questrial({
  subsets: ["latin"],
  variable: "--font-wordmark",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "visados",
    "tramitación de visados",
    "visado de estudio",
    "visado de turismo",
    "visado de trabajo",
    "España",
    "EEUU",
    "asesoría de visados",
    "homologación de títulos",
    "VisaGo",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  // OJO: sin title/description aquí → Next los deriva del title/description de
  // cada página, para que la preview (WhatsApp, redes) muestre el texto correcto
  // de cada sección. La imagen la añade automáticamente `opengraph-image.tsx`.
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

// Evita el parpadeo de tema (FOUC): aplica el tema guardado antes de hidratar.
const themeScript = `(function(){try{var t=localStorage.getItem('visago-theme');if(t==='light'){document.documentElement.classList.add('light')}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} ${questrial.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-background text-foreground antialiased">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <ThemeProvider>
          <SmoothScroll>
            <CustomCursor />
            <EntryAudio />
            <ScrollProgress />
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

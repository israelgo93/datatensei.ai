import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://datatensei.ai"),
  title: "DataTensei AI | Software, agentes y SaaS impulsados por IA",
  description:
    "DataTensei AI construye productos de software, agentes inteligentes y SaaS verticales listos para operar en produccion.",
  openGraph: {
    title: "DataTensei AI",
    description:
      "Software con IA, de la idea a produccion: agentes, SaaS, automatizacion y plataformas cloud.",
    url: "https://datatensei.ai",
    siteName: "DataTensei AI",
    type: "website",
  },
  alternates: {
    canonical: "https://datatensei.ai",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}

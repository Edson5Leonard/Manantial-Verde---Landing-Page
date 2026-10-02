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
  metadataBase: new URL("http://localhost:3000"),
  title: "Manantial Verde",
  description: "Agua de mesa ozonizada pura, fresca y saludable. Reparto a domicilio. Realiza tu pedido directo por WhatsApp.",
  keywords: ["agua de mesa", "agua purificada", "delivery de agua", "Manantial Verde", "bidones de agua"],
  icons: {
    icon: "/logo_1.png", 
    shortcut: "/logo_1.png",
    apple: "/logo_1.png",
  },
  openGraph: {
    title: "Manantial Verde - Agua de Mesa & Delivery",
    description: "Pedir agua a domicilio nunca fue tan fácil. Compra mínima 6 bidones de 10L.",
    images: ['/logo_1.png'],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-slate-50 text-slate-800 antialiased">{children}</body>
    </html>
  );
}
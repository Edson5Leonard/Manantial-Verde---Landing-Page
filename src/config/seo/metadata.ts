import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://manantial-verde-landing-page.vercel.app/";
const shareImage = {
  url: "/logo.png",
  width: 1024,
  height: 1024,
  alt: "Manantial Verde - Agua de mesa",
};

export const seoMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Manantial Verde | Agua de Mesa y Delivery",
  description:
    "Agua de mesa ozonizada, pura, fresca y saludable. Realiza tu pedido y recibe agua a domicilio.",
  keywords: [
    "agua de mesa",
    "agua purificada",
    "delivery de agua",
    "Manantial Verde",
    "bidones de agua",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    title: "Manantial Verde | Agua de Mesa y Delivery",
    description:
      "Agua de mesa ozonizada, pura, fresca y saludable. Realiza tu pedido y recibe agua a domicilio.",
    siteName: "Manantial Verde",
    locale: "es",
    url: "/",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manantial Verde | Agua de Mesa y Delivery",
    description:
      "Agua de mesa ozonizada, pura, fresca y saludable. Realiza tu pedido y recibe agua a domicilio.",
    images: [shareImage],
  },
};

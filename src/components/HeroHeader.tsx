"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Truck } from "lucide-react";

interface Slide {
  id: number;
  bgImage: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  isWhatsAppCta?: boolean; // Define si el botón secundario abre WhatsApp
  whatsappMsg?: string;
  productImage: string;
  badgeText?: string;
}

const numeroTelefono = "51950371457";

const slides: Slide[] = [
  {
    id: 1,
    bgImage: "/fondo.jpeg",
    title: "Mereces la mejor calidad de agua",
    subtitle: "Y estamos aquí para garantizarla en cada gota.",
    ctaText: "Conócenos",
    ctaLink: "#nosotros", // Redirige a la sección Sobre Nosotros
    productImage: "/producto_1.png",
    badgeText: "100% Ozonizada",
  },
  {
    id: 2,
    bgImage: "/fondo_2.jpeg",
    title: "El agua hervida NO es la solución",
    subtitle: "Protege a tu familia con agua pura libre de metales y bacterias.",
    ctaText: "Nuestros Productos",
    ctaLink: "#productos", // Redirige a la sección Productos
    productImage: "/producto_2.png",
    badgeText: "Formato 10.5L con Asa",
  },
  {
    id: 3,
    bgImage: "/antartida.jpg",
    title: "Hidratación pura para tu hogar u oficina",
    subtitle: "Recibe tus bidones en la puerta de tu casa con delivery rápido.",
    ctaText: "Solicitar Asesoría",
    ctaLink: "#",
    isWhatsAppCta: true,
    whatsappMsg: "¡Hola! Me gustaría recibir asesoría personalizada para un pedido en mi hogar u oficina. 🏢💧",
    productImage: "/producto_3.png",
    badgeText: "Delivery Garantizado",
  },
];

export default function HeroHeader() {
  const [current, setCurrent] = useState<number>(0);

  // Mensaje para el botón de Solicitar Delivery
  const mensajeDelivery = encodeURIComponent(
    "¡Hola! Vengo desde su sitio web y me gustaría solicitar un delivery de agua. 🚛💧"
  );
  const enlaceDelivery = `https://wa.me/${numeroTelefono}?text=${mensajeDelivery}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000); // Cambiado a 8 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative w-full h-[580px] md:h-[680px] bg-slate-950 overflow-hidden font-sans">
      {slides.map((slide, index) => {
        // Generar enlace según si es WhatsApp o enlace interno
        const linkSecundario = slide.isWhatsAppCta
          ? `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(slide.whatsappMsg || "")}`
          : slide.ctaLink;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Imagen de fondo con filtro oscuro */}
            <div className="absolute inset-0">
              <Image
                src={slide.bgImage}
                alt={slide.title}
                fill
                className="object-cover object-center filter brightness-[0.40] scale-105 transition-transform duration-10000"
                priority={index === 0}
              />
            </div>

            {/* Contenido principal sobrepuesto */}
            <div className="relative max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center">
              <div className="grid md:grid-cols-12 gap-6 w-full items-center">
                
                {/* Lado Izquierdo: Textos y Botones */}
                <div className="md:col-span-6 text-white space-y-4">
                  {slide.badgeText && (
                    <span className="inline-block bg-emerald-500/80 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-1">
                      {slide.badgeText}
                    </span>
                  )}

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-slate-300 text-base sm:text-lg max-w-lg font-normal leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    {/* Botón 1: Redirige a secciones internas (#nosotros, #productos) excepto "Solicitar Asesoría" que abre WhatsApp */}
                    <a
                      href={linkSecundario}
                      target={slide.isWhatsAppCta ? "_blank" : "_self"}
                      rel={slide.isWhatsAppCta ? "noopener noreferrer" : undefined}
                      className="bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-md text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:border-white shadow-lg flex items-center gap-2"
                    >
                      {slide.ctaText}
                    </a>

                    {/* Botón 2: Solicitar Delivery siempre abre WhatsApp */}
                    <a
                      href={enlaceDelivery}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold text-sm px-7 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2.5 shadow-xl shadow-emerald-900/50 hover:scale-105"
                    >
                      <Truck size={19} className="animate-bounce" />
                      <span>Solicitar Delivery</span>
                    </a>
                  </div>
                </div>

                {/* Lado Derecho: Imagen del producto */}
                <div className="hidden md:flex md:col-span-6 justify-center items-center">
                  <div className="relative w-80 h-96 md:w-[420px] md:h-[480px] lg:w-[500px] lg:h-[540px] filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]">
                    <Image
                      src={slide.productImage}
                      alt="Producto Manantial Verde"
                      fill
                      className="object-contain scale-110 hover:scale-115 transition-transform duration-500"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Puntos de Indicación (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-emerald-400" : "w-2.5 bg-white/40"
            }`}
            aria-label={`Ir a la diapositiva ${i + 1}`}
          />
        ))}
      </div>

      {/* Ola decorativa blanca en el borde inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white z-10 clip-wave" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 80%)" }} />
    </section>
  );
}
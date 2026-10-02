"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  const WHATSAPP_NUMERO = "51950371457";

  const abrirWhatsApp = () => {
    const mensaje = `¡Hola Manantial Verde! 🌊\nMe gustaría solicitar más información sobre los envíos a mi domicilio/empresa.`;
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="relative w-full py-20 lg:py-28 overflow-hidden bg-slate-900">
      
      {/* IMAGEN DE FONDO REAL DE LA PLANTA */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contacto.png" // Tu imagen real en /public
          alt="Planta Embotelladora Manantial Verde"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* OVERLAY PROGRESIVO: VERDE A LA IZQUIERDA Y DESVANECIDO TOTAL A LA DERECHA */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/50 to-transparent" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl text-left space-y-8">
          
          {/* TÍTULO PRINCIPAL SOBRE EL FONDO VERDE DE LA IZQUIERDA */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md">
            ¿Listo para llevar el agua más pura a tu hogar u oficina?
          </h2>

          <p className="text-emerald-100 text-base sm:text-lg font-medium leading-relaxed drop-shadow-sm">
            Atendemos pedidos al por mayor y menor con entrega rápida directamente desde nuestra planta purificadora.
          </p>

          {/* BOTÓN VERDE REDONDEADO CON ICONO Y FRASE DE REFERENCIA */}
          <div>
            <button
              onClick={abrirWhatsApp}
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base sm:text-lg py-4 px-8 rounded-full shadow-xl shadow-emerald-950/50 hover:shadow-emerald-400/40 hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-3.5 group cursor-pointer"
            >
              {/* Ícono redondeado de WhatsApp */}
              <div className="p-1 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                <FaWhatsapp className="w-7 h-7 text-white" />
              </div>

              <span>Pedir mi agua por WhatsApp</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
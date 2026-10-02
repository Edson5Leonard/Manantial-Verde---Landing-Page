"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  // Número de teléfono en formato internacional (Perú: +51)
  const phoneNumber = "51962266922";
  
  // Mensaje predeterminado para solicitar información
  const message = encodeURIComponent(
    "¡Hola! Vengo de la página web de Manantial Verde y me gustaría solicitar más información sobre sus servicios y productos de agua de mesa."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-15 h-15 sm:w-18 sm:h-18 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
    >
      {/* Animación de pulso detrás del botón */}
      <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping group-hover:opacity-100" />

      {/* Icono de WhatsApp de mayor tamaño */}
      <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
    </a>
  );
}
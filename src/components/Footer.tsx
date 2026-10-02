"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MapPin, BookOpen, X, Send } from "lucide-react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 2500);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* COLUMNA 1: LOGO E IMAGEN DE LETRAS BIEN JUNTOS */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              {/* Isotipo del logo blanco */}
              <div className="relative w-16 h-16 shrink-0">
                <Image
                  src="/logo_blanco.png"
                  alt="Isotipo Manantial Verde"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Texto "MANANTIAL VERDE AGUA DE MESA" */}
              <div className="relative w-44 h-12 -ml-1">
                <Image
                  src="/letra_blanco.png"
                  alt="Manantial Verde Agua de Mesa"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Agua de mesa ozonizada pura, fresca y saludable. Llevamos vida e higiene a tu hogar.
            </p>
          </div>

          {/* COLUMNA 2: ATENCIÓN & PEDIDOS */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base">Atención & Pedidos</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>950 371 457 / 933 367 595</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Servicio de Delivery Local</span>
              </div>
            </div>
          </div>

          {/* COLUMNA 3: CATÁLOGO Y LIBRO DE RECLAMACIONES */}
          <div className="space-y-6">
            {/* Sección Catálogo */}
            <div className="space-y-3">
              <h3 className="text-white font-bold text-base">Catálogo</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Bidón de Agua Purificada 10L (S/ 4.50 c/u)</li>
                <li>• Hielo Purificado en Bolsa (Próximamente Noviembre)</li>
              </ul>
            </div>

            {/* Sección Libro de reclamaciones con formato como la imagen */}
            <div className="space-y-2">
              <h3 className="text-white font-bold text-base">Libro de reclamaciones</h3>
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-emerald-400 hover:text-emerald-300 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all hover:border-emerald-500/40"
              >
                <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hoja de reclamación virtual</span>
              </button>
            </div>
          </div>

        </div>

        {/* LÍNEA DIVISORA Y COPYRIGHT */}
        <div className="mt-10 pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
          © 2026 Manantial Verde. Todos los derechos reservados.
        </div>
      </div>

      {/* MODAL DEL LIBRO DE RECLAMACIONES */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 text-slate-100 rounded-2xl max-w-md w-full p-6 border border-slate-800 shadow-2xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-4 border-b border-slate-800 pb-3">
              <BookOpen className="w-6 h-6 text-emerald-400" />
              <div>
                <h3 className="font-bold text-base text-white">Libro de Reclamaciones</h3>
                <p className="text-xs text-slate-400">Hoja de reclamación virtual</p>
              </div>
            </div>

            {submitted ? (
              <div className="py-6 text-center text-emerald-400 font-medium text-sm">
                ✓ Reclamo registrado correctamente.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1">Nombre Completo *</label>
                  <input
                    required
                    type="text"
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-300 mb-1">DNI / CE *</label>
                    <input
                      required
                      type="text"
                      placeholder="12345678"
                      className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Teléfono *</label>
                    <input
                      required
                      type="tel"
                      placeholder="962266922"
                      className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Detalle del Reclamo *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Escribe aquí tu motivo..."
                    className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-3.5 h-3.5" /> Enviar
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
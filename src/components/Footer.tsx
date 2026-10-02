"use client";

import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* COLUMNA 1: LOGO E IMAGEN DE LETRAS BIEN JUNTOS */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              {/* Isotipo del logo blanco (Montaña + Gota) */}
              <div className="relative w-26 h-26 shrink-0">
                <Image
                  src="/logo_blanco.png"
                  alt="Isotipo Manantial Verde"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Texto "MANANTIAL VERDE AGUA DE MESA" pegado al icono */}
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

          {/* COLUMNA 3: CATÁLOGO */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base">Catálogo</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Bidón de Agua Purificada 10L (S/ 4.50 c/u)</li>
              <li>• Hielo Purificado en Bolsa (Próximamente Noviembre)</li>
            </ul>
          </div>

        </div>

        {/* LÍNEA DIVISORA Y COPYRIGHT */}
        <div className="mt-10 pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
          © 2026 Manantial Verde. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
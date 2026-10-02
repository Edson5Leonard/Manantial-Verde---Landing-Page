"use client";

import Image from "next/image";
import { Droplets, ShieldCheck, ArrowRight } from "lucide-react";

export default function GarantiaSeccion() {
  return (
    <section id="garantia" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-emerald-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Imagen del Bidón Optimizada en Tamaño */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-6">
            
            {/* Círculo De Fondo Aumentado */}
            <div className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-emerald-200/50 via-teal-100/70 to-cyan-100/60 -z-10 animate-pulse" />
            
            {/* Borde Decorativo Circular Aumentado */}
            <div className="absolute w-[390px] h-[390px] sm:w-[540px] sm:h-[540px] rounded-full border-2 border-dashed border-emerald-400/40 -z-10" />

            {/* Imagen del Bidón (Dimensiones Ampliadas: h-[480px] sm:h-[580px]) */}
            <div className="relative w-[320px] sm:w-[440px] h-[480px] sm:h-[580px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-105">
              <Image
                src="/producto_bidon.png" 
                alt="Bidón de Agua Manantial Verde"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Círculo Flotante 1: Pureza (Reubicado hacia afuera) */}
            <div className="absolute -top-2 left-0 sm:-left-2 bg-emerald-600/95 backdrop-blur-md text-white rounded-full w-28 h-28 sm:w-36 sm:h-36 p-4 flex flex-col justify-center items-center text-center shadow-xl shadow-emerald-700/25 hover:scale-110 transition-transform duration-300 z-10">
              <span className="text-2xl sm:text-3xl font-black leading-none">100%</span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-tight mt-1 leading-tight">
                Agua Purificada & Liviana
              </span>
            </div>

            {/* Círculo Flotante 2: Filtración (Reubicado hacia afuera) */}
            <div className="absolute -bottom-2 right-0 sm:-right-2 bg-teal-700/95 backdrop-blur-md text-white rounded-full w-28 h-28 sm:w-36 sm:h-36 p-4 flex flex-col justify-center items-center text-center shadow-xl shadow-teal-900/25 hover:scale-110 transition-transform duration-300 z-10">
              <span className="text-xl sm:text-2xl font-extrabold leading-none">Filtración</span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-tight mt-1 leading-tight">
                Multietapa + Ozonización
              </span>
            </div>

          </div>

          {/* COLUMNA DERECHA: Textos, Puntos Clave y Botón de Acción */}
          <div className="lg:col-span-6 space-y-6 text-slate-800">
            
            {/* Título Principal */}
            <div>
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Garantía de Calidad
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mt-3">
                El agua más pura y saludable para tu hogar u oficina
              </h2>
            </div>

            {/* Descripción Breve */}
            <p className="text-slate-600 text-base leading-relaxed">
              En <strong className="text-emerald-700">Manantial Verde</strong> nos aseguramos de que cada gota pase por rigurosos procesos de purificación. Garantizamos un agua libre de impurezas, fresca y con el nivel óptimo de minerales que tu familia necesita.
            </p>

            <div className="h-px w-full bg-slate-200/80 my-2" />

            {/* Puntos Destacados con Íconos */}
            <div className="space-y-6">
              
              {/* Punto 1 */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl shrink-0">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">
                    Sabor Natural y Minerales Balanceados
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Nuestro proceso de ozonización elimina microorganismos sin alterar las propiedades ni el sabor natural del agua.
                  </p>
                </div>
              </div>

              {/* Punto 2 */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-teal-100 text-teal-700 rounded-xl shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">
                    Higiene y Sellado de Seguridad
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Desinfección estricta e higienización automatizada de cada envase antes de ser llenado y herméticamente sellado.
                  </p>
                </div>
              </div>

            </div>

            {/* Botón Principal (CTA) */}
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span>Conoce nuestros servicios</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
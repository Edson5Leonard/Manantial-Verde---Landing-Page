"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ConocenosSeccion() {
  return (
    <section id="conocenos" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA (lg:order-1): Contenido Informativo y Lista de Puntos */}
          <div className="lg:col-span-6 space-y-6 text-slate-800 lg:order-1">
            
            {/* Encabezado */}
            <div>
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mt-3">
                Suministramos Agua de Alta Calidad y Pureza Garantizada
              </h2>
            </div>

            {/* Párrafos Descriptivos */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              En <strong className="text-emerald-700 font-semibold">Manantial Verde</strong> nos dedicamos al procesamiento, purificación y distribución de agua de mesa de la más alta calidad. Nuestro compromiso es velar por la salud y bienestar de miles de familias y empresas.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Contamos con tecnología de punta en filtración y ozonización, operada por un equipo altamente capacitado que supervisa cada etapa del proceso bajo estrictos estándares de inocuidad e higiene.
            </p>

            {/* Lista con Viñetas / Checks */}
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Procesos de purificación certificados y libres de químicos nocivos.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Higienización automatizada de botellones en cada recarga.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Atención personalizada y servicio de entrega puntual a domicilio.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Soluciones adaptadas para hogares, oficinas y eventos masivos.</span>
              </li>
            </ul>

            {/* Botón CTA (Aprende Más / Conócenos) */}
            <div className="pt-4">
              <a
                href="#servicios"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wider group"
              >
                <span>Conoce Más Servicios</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* COLUMNA DERECHA (lg:order-2): Imagen Corporativa + Insignia Superior + Barras Decorativas */}
          <div className="lg:col-span-6 relative lg:order-2">
            
            {/* Elementos Decorativos Laterales (Alineados a la derecha) */}
            <div className="absolute -right-3 top-1/3 w-2 h-16 bg-emerald-600 rounded-full z-10 hidden sm:block" />
            <div className="absolute -right-3 top-1/2 w-2 h-12 bg-teal-500 rounded-full z-10 hidden sm:block" />

            {/* Contenedor Principal de la Imagen */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <div className="relative w-full h-[400px] sm:h-[500px]">
                <Image
                  src="/bidones.png"
                  alt="Planta de Tratamiento Manantial Verde"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Insignia Superpuesta Esquina Superior Izquierda */}
              <div className="absolute top-0 left-0 bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-6 sm:p-8 rounded-br-3xl shadow-xl max-w-[180px] sm:max-w-[220px]">
                <span className="text-3xl sm:text-5xl font-black block leading-none">10+</span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider mt-2 block leading-snug">
                  Años de Experiencia
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
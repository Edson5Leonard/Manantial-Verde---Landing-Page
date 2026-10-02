"use client";

import { 
  Recycle, 
  Droplets, 
  Truck, 
  ShieldCheck, 
  MapPin, 
  HeartHandshake 
} from "lucide-react";

export default function Sustainability() {
  const pilares = [
    {
      icono: Recycle,
      titulo: "Envases Retornables",
      descripcion: "Promovemos el uso de bidones retornables de 20L para reducir drásticamente el plástico de un solo uso.",
    },
    {
      icono: Droplets,
      titulo: "Proceso Limpio y Ecofriendly",
      descripcion: "Apuramos la purificación mediante ozonización y microfiltración sin químicos tóxicos ni residuales.",
    },
    {
      icono: Truck,
      titulo: "Rutas Eficientes de Entrega",
      descripcion: "Optimizamos nuestros recorridos de repartos diarios para minimizar la huella de carbono local.",
    },
    {
      icono: ShieldCheck,
      titulo: "Garantía de Calidad 100%",
      descripcion: "Filtros de estricto control de higiene asegurando agua pura, clara y segura para toda tu familia.",
    },
    {
      icono: MapPin,
      titulo: "Atención y Cobertura Local",
      descripcion: "Servicio rápido y personalizado para los hogares y negocios de nuestra comunidad.",
    },
    {
      icono: HeartHandshake,
      titulo: "Sin Compromiso ni Contratos",
      descripcion: "Pide tus recargas según tu consumo real, con facilidades y atención inmediata por WhatsApp.",
    },
  ];

  return (
    <section id="sostenibilidad" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* TARJETA CON CORTE EN ESQUINAS (ESTILO IMAGEN ADJUNTA) */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 lg:p-16 rounded-[2.5rem] relative overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Muescas/Cortes decorativos laterales (Efecto igual a la imagen) */}
          <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-16 bg-slate-50 rounded-r-full" />
          <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-16 bg-slate-50 rounded-l-full" />

          {/* PARTE SUPERIOR / ENCABEZADO (DOS COLUMNAS) */}
          <div className="grid md:grid-cols-12 gap-6 lg:gap-12 items-end mb-10">
            <div className="md:col-span-7">
              <span className="text-emerald-400 font-extrabold text-xs uppercase tracking-widest bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
                Sostenibilidad
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 leading-tight">
                Compromiso con la Salud y el Medio Ambiente
              </h2>
            </div>
            
            <div className="md:col-span-5">
              <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
                En <strong className="text-emerald-400">Manantial Verde</strong> nos preocupamos por llevar agua pura a tu hogar reduciendo el impacto ambiental mediante envases reutilizables y procesos sostenibles.
              </p>
            </div>
          </div>

          {/* LÍNEA DIVISORA */}
          <div className="w-full h-[1px] bg-slate-800 my-8" />

          {/* GRILLA DE 6 PILARES (3 FILAS x 2 COLUMNAS) */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {pilares.map((pilar, index) => {
              const IconoComponente = pilar.icono;
              return (
                <div key={index} className="flex gap-4 sm:gap-5 items-start group">
                  {/* ÍCONO EN CONTENEDOR REDONDEADO */}
                  <div className="p-3.5 bg-slate-800/80 group-hover:bg-emerald-500/20 text-emerald-400 rounded-2xl border border-slate-700/60 group-hover:border-emerald-500/40 transition-all duration-300 shrink-0">
                    <IconoComponente className="w-6 h-6" />
                  </div>

                  {/* CONTENIDO TEXTO */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {pilar.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                      {pilar.descripcion}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
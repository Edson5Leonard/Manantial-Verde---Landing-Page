"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import {
  Plus,
  Minus,
  ShoppingBag,
  Sparkles,
  Check,
  Info,
  ChevronUp,
  ChevronDown,
  X,
  Zap,
} from "lucide-react";

interface Producto {
  id: string;
  nombre: string;
  badge: string;
  badgeStyle: string;
  descripcion: string;
  imagen: string;
  precioBase: number;
  esAgua10L?: boolean;
}

const PRODUCTOS: Producto[] = [
  {
    id: "recarga_20l",
    nombre: "Recarga 20 Litros",
    badge: "Solo Recarga",
    badgeStyle: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
    descripcion: "Para quienes ya cuentan con su envase. Agua purificada y ozonizada.",
    imagen: "/catalogo_1.png",
    precioBase: 15.00,
  },
  {
    id: "bidon_agua_20l",
    nombre: "Bidón + Agua 20L",
    badge: "Envase + Agua",
    badgeStyle: "bg-teal-500/10 text-teal-700 border-teal-200",
    descripcion: "Incluye el envase nuevo con sello de seguridad y agua purificada.",
    imagen: "/catalogo_1.png",
    precioBase: 25.00,
  },
  {
    id: "promo_pack_10l",
    nombre: "Promo 6x Agua 10L",
    badge: "Súper Promo",
    badgeStyle: "bg-amber-500/10 text-amber-700 border-amber-300",
    descripcion: "Paquete especial de 6 botellones de 10 Litros a precio mayorista (S/ 4.50 c/u).",
    imagen: "/catalogo_2.png",
    precioBase: 27.00,
  },
  {
    id: "agua_10l_unidad",
    nombre: "Agua 10L (Unidad)",
    badge: "Por Unidad",
    badgeStyle: "bg-slate-500/10 text-slate-700 border-slate-200",
    descripcion: "Compra desde 1 unidad. ¡Si pides 6 o más se aplica la tarifa promocional!",
    imagen: "/catalogo_3.png",
    precioBase: 5.50,
    esAgua10L: true,
  },
];

function obtenerPrecioAgua10L(cantidad: number): number {
  if (cantidad >= 50) return 3.50;
  if (cantidad >= 30) return 3.70;
  if (cantidad >= 15) return 4.00;
  if (cantidad >= 6) return 4.50;
  return 5.50;
}

export default function Catalog() {
  const WHATSAPP_NUMERO = "51950371457";

  const [cantidades, setCantidades] = useState<Record<string, number>>({});
  const [desplegarDetalle, setDesplegarDetalle] = useState<boolean>(false);

  const actualizarCantidad = (id: string, delta: number) => {
    setCantidades((prev) => {
      const actual = prev[id] || 0;
      const nueva = Math.max(0, actual + delta);
      return { ...prev, [id]: nueva };
    });
  };

  const getPrecioUnitario = (producto: Producto, qty: number): number => {
    if (producto.esAgua10L && qty > 0) {
      return obtenerPrecioAgua10L(qty);
    }
    return producto.precioBase;
  };

  const itemsSeleccionados = PRODUCTOS.map((p) => {
    const qty = cantidades[p.id] || 0;
    const precioUnitario = getPrecioUnitario(p, qty);
    const subtotal = qty * precioUnitario;
    return { ...p, cantidad: qty, precioUnitario, subtotal };
  }).filter((item) => item.cantidad > 0);

  const totalMonto = itemsSeleccionados.reduce((acc, item) => acc + item.subtotal, 0);
  const totalUnidades = itemsSeleccionados.reduce((acc, item) => acc + item.cantidad, 0);

  const handleEnviarWhatsApp = () => {
    if (itemsSeleccionados.length === 0) return;

    let mensaje = `¡Hola *Manantial Verde*! 🌊\n`;
    mensaje += `Quisiera realizar la cotización/pedido de los siguientes productos:\n\n`;

    itemsSeleccionados.forEach((item) => {
      mensaje += `• *${item.nombre}*\n`;
      mensaje += `  Cantidad: ${item.cantidad} u. | Precio u.: S/ ${item.precioUnitario.toFixed(2)} | Subtotal: S/ ${item.subtotal.toFixed(2)}\n`;
    });

    mensaje += `\n💰 *TOTAL A PAGAR: S/ ${totalMonto.toFixed(2)}*\n\n`;
    mensaje += `🚚 *Delivery:* Por favor coordinar la dirección de entrega. ¡Gracias!`;

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100/80 font-sans relative pb-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO PRINCIPAL */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-700 text-xs font-black uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
            <span>Cotizador Interactivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Nuestros Productos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Arma tu pedido a medida. Los descuentos por volumen se aplicarán automáticamente.
          </p>
        </div>

        {/* TARJETAS DE PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {PRODUCTOS.map((producto) => {
            const qty = cantidades[producto.id] || 0;
            const precioUnitario = getPrecioUnitario(producto, qty);
            const subtotal = qty * precioUnitario;
            const tieneSeleccion = qty > 0;

            return (
              <div
                key={producto.id}
                className={`group bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between relative shadow-sm hover:shadow-xl hover:-translate-y-1.5 ${
                  tieneSeleccion
                    ? "border-emerald-500 ring-4 ring-emerald-500/10 bg-gradient-to-b from-white to-emerald-50/20"
                    : "border-slate-200/80 hover:border-slate-300"
                }`}
              >
                {/* Badge Superior */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full border ${producto.badgeStyle}`}>
                    {producto.badge}
                  </span>
                  {tieneSeleccion && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md animate-pulse">
                      <Check className="w-3 h-3 stroke-[3]" /> Activo
                    </span>
                  )}
                </div>

                {/* Imagen del Producto */}
                <div className="relative w-full h-48 my-2 rounded-2xl bg-slate-50 flex items-center justify-center p-4 overflow-hidden group-hover:bg-slate-100/80 transition-colors">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Info Básica */}
                <div className="mt-3">
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors">
                    {producto.nombre}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {producto.descripcion}
                  </p>
                </div>

                {/* Controles de Precio y Cantidad */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-wider">
                        Precio Unitario
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-slate-900">
                          S/ {precioUnitario.toFixed(2)}
                        </span>
                        {producto.esAgua10L && qty >= 6 && (
                          <span className="text-[10px] bg-emerald-500 text-white font-extrabold px-1.5 py-0.5 rounded shadow-sm">
                            ¡Promo!
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Contadores + / - */}
                    <div className="flex items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
                      <button
                        onClick={() => actualizarCantidad(producto.id, -1)}
                        className="w-8 h-8 bg-white hover:bg-slate-200 rounded-xl text-slate-700 flex items-center justify-center transition-all font-bold shadow-sm active:scale-95"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className="w-7 text-center font-extrabold text-slate-900 text-sm">
                        {qty}
                      </span>

                      <button
                        onClick={() => actualizarCantidad(producto.id, 1)}
                        className="w-8 h-8 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl flex items-center justify-center transition-all font-bold shadow-md shadow-emerald-600/30 active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Banner promocional para Agua 10L */}
                  {producto.esAgua10L && qty < 6 && (
                    <div className="bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] p-2.5 rounded-xl flex items-center gap-2">
                      <Info className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Agrega <strong>{6 - qty} más</strong> para desbloquear S/ 4.50 c/u</span>
                    </div>
                  )}

                  {/* Subtotal */}
                  <div className={`p-3 rounded-2xl flex justify-between items-center transition-colors ${
                    tieneSeleccion ? "bg-emerald-500/10 border border-emerald-500/20" : "bg-slate-50 border border-slate-100"
                  }`}>
                    <span className="text-xs font-semibold text-slate-600">Subtotal:</span>
                    <span className={`font-black text-base ${tieneSeleccion ? "text-emerald-700" : "text-slate-900"}`}>
                      S/ {subtotal.toFixed(2)}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* BARRA / CARRITO FLOTANTE (SOLO VISIBLE CUANDO HAY ITEMS) */}
      {/* ========================================================= */}
      {totalUnidades > 0 && (
        <div className="fixed bottom-4 left-4 right-4 max-w-4xl mx-auto z-50 transition-all duration-500 animate-in slide-in-from-bottom-8">
          
          <div className="bg-slate-900/95 backdrop-blur-xl text-white rounded-3xl shadow-2xl border border-slate-700/80 overflow-hidden ring-1 ring-white/10">
            
            {/* Detalle Desplegable */}
            {desplegarDetalle && (
              <div className="p-5 border-b border-slate-800/80 max-h-64 overflow-y-auto space-y-3 bg-slate-950/60">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" /> Desglose de Cotización
                  </span>
                  <button
                    onClick={() => setDesplegarDetalle(false)}
                    className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2 text-sm">
                  {itemsSeleccionados.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-1">
                      <div>
                        <span className="font-semibold text-slate-200">{item.nombre}</span>
                        <span className="text-xs text-slate-400 block sm:inline sm:ml-2">
                          ({item.cantidad} u. × S/ {item.precioUnitario.toFixed(2)})
                        </span>
                      </div>
                      <span className="font-bold text-emerald-400">
                        S/ {item.subtotal.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Barra Principal */}
            <div className="p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative bg-emerald-500/20 p-2.5 rounded-2xl border border-emerald-500/30">
                    <ShoppingBag className="w-6 h-6 text-emerald-400" />
                    <span className="absolute -top-2 -right-2 bg-emerald-500 text-slate-950 font-black text-xs w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-slate-900">
                      {totalUnidades}
                    </span>
                  </div>

                  <div>
                    <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                      Monto Total
                    </p>
                    <p className="text-2xl font-black text-emerald-400">
                      S/ {totalMonto.toFixed(2)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setDesplegarDetalle(!desplegarDetalle)}
                  className="text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-3 py-2 rounded-xl border border-slate-700/80 flex items-center gap-1.5 transition-colors"
                >
                  <span>{desplegarDetalle ? "Ocultar" : "Ver detalle"}</span>
                  {desplegarDetalle ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Botón WhatsApp */}
              <button
                onClick={handleEnviarWhatsApp}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2.5 transition-all duration-300 uppercase tracking-wider group"
              >
                <FaWhatsapp className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Pedir por WhatsApp</span>
              </button>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
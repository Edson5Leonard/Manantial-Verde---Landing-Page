"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Plus, Minus, MessageCircle, Sparkles, Check, Info } from "lucide-react";

export default function Catalog() {
  const WHATSAPP_NUMERO = "51950371457";

  // Estado para la cantidad elegida en cada card
  const [cantRecarga, setCantRecarga] = useState<number>(1);
  const [cantBidonNuevo, setCantBidonNuevo] = useState<number>(1);
  const [cantPack10L, setCantPack10L] = useState<number>(1);
  const [cantUnidad10L, setCantUnidad10L] = useState<number>(1);

  // --- CÁLCULOS Y PRECIOS ---
  // Card 1: Recarga 20L
  const totalRecarga = cantRecarga * 15;

  // Card 2: Bidón + Agua 20L
  const totalBidonNuevo = cantBidonNuevo * 25;

  // Card 3: Pack Promo 6 unidades de 10L (S/ 27.00 el pack = S/ 4.50 c/u)
  const totalPack10L = cantPack10L * 27;

  // Card 4: Unidad de 10L (Regla de negocio inteligente)
  // Si lleva 6 o más unidades en este card, baja automáticamente a precio promo de S/ 4.50 c/u
  const precioUnidad10L = cantUnidad10L >= 6 ? 4.5 : 5.5;
  const totalUnidad10L = cantUnidad10L * precioUnidad10L;
  const esPrecioPromoAplicado = cantUnidad10L >= 6;

  // Función para abrir WhatsApp con el mensaje formateado de cada Card
  const pedirPorWhatsApp = (producto: string, cantidad: number, total: number, detalleExtra?: string) => {
    let mensaje = `¡Hola *Manantial Verde*! 🌊\n`;
    mensaje += `Quisiera hacer un pedido del siguiente producto:\n\n`;
    mensaje += `• *Producto:* ${producto}\n`;
    mensaje += `• *Cantidad:* ${cantidad} unidad(es)\n`;
    if (detalleExtra) {
      mensaje += `• *Detalle:* ${detalleExtra}\n`;
    }
    mensaje += `• *Monto Total:* S/ ${total.toFixed(2)}\n\n`;
    mensaje += `🚚 *Delivery:* A coordinar según cobertura.\n`;
    mensaje += `Quedo atento a su respuesta para confirmar la dirección. ¡Gracias!`;

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="productos" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ENCABEZADO */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-emerald-700 font-extrabold text-xs uppercase tracking-widest bg-emerald-100/80 px-4 py-1.5 rounded-full border border-emerald-200">
            Nuestras Opciones
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-3">
            Productos Disponibles
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Ajusta las cantidades de cada producto y solicita tu envío directo por WhatsApp.
          </p>
        </div>

        {/* GRID DE 4 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">

          {/* CARD 1: RECARGA DE 20L */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative w-full h-52 bg-slate-50 rounded-2xl p-4 flex items-center justify-center mb-5 overflow-hidden group-hover:bg-emerald-50/30 transition-colors">
                <Image
                  src="/catalogo_1.png" // Imagen del bidón
                  alt="Recarga de Agua 20L"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg uppercase tracking-wider">
                  Solo Recarga
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900">Recarga 20 Litros</h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Para quienes ya cuentan con su envase. Agua purificada y ozonizada[cite: 9].
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 font-medium block">Precio unitario</span>
                  <span className="text-2xl font-black text-emerald-600">S/ 15.00</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setCantRecarga(Math.max(1, cantRecarga - 1))}
                    className="p-1.5 bg-white text-slate-700 rounded-lg shadow-sm hover:bg-slate-200 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-extrabold text-slate-900 w-6 text-center text-sm">
                    {cantRecarga}
                  </span>
                  <button
                    onClick={() => setCantRecarga(cantRecarga + 1)}
                    className="p-1.5 bg-emerald-600 text-white rounded-lg shadow-sm hover:bg-emerald-700 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-600">Subtotal:</span>
                <span className="font-black text-slate-900 text-base">S/ {totalRecarga.toFixed(2)}</span>
              </div>

              <button
                onClick={() =>
                  pedirPorWhatsApp("Recarga de Agua 20 Litros", cantRecarga, totalRecarga, "Precio unitario: S/ 15.00")
                }
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-emerald-600/30 flex items-center justify-center gap-2 text-xs transition-all"
              >
                <FaWhatsapp className="w-7 h-7 text-white" />
                <span>Pedir por WhatsApp</span>
              </button>
            </div>
          </div>

          {/* CARD 2: BIDÓN + AGUA 20L */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative w-full h-52 bg-slate-50 rounded-2xl p-4 flex items-center justify-center mb-5 overflow-hidden group-hover:bg-emerald-50/30 transition-colors">
                <Image
                  src="/catalogo_1.png"
                  alt="Bidón Nuevo + Agua 20L"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-teal-600 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg uppercase tracking-wider">
                  Envase + Agua
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900">Bidón + Agua 20L</h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Incluye el envase nuevo con sello de seguridad y agua purificada[cite: 9].
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 font-medium block">Precio unitario</span>
                  <span className="text-2xl font-black text-emerald-600">S/ 25.00</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setCantBidonNuevo(Math.max(1, cantBidonNuevo - 1))}
                    className="p-1.5 bg-white text-slate-700 rounded-lg shadow-sm hover:bg-slate-200 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-extrabold text-slate-900 w-6 text-center text-sm">
                    {cantBidonNuevo}
                  </span>
                  <button
                    onClick={() => setCantBidonNuevo(cantBidonNuevo + 1)}
                    className="p-1.5 bg-emerald-600 text-white rounded-lg shadow-sm hover:bg-emerald-700 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-600">Subtotal:</span>
                <span className="font-black text-slate-900 text-base">S/ {totalBidonNuevo.toFixed(2)}</span>
              </div>

              <button
                onClick={() =>
                  pedirPorWhatsApp("Bidón Nuevo + Agua 20 Litros", cantBidonNuevo, totalBidonNuevo, "Precio unitario: S/ 25.00")
                }
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-emerald-600/30 flex items-center justify-center gap-2 text-xs transition-all"
              >
                <FaWhatsapp className="w-7 h-7 text-white" />
                <span>Pedir por WhatsApp</span>
              </button>
            </div>
          </div>

          {/* CARD 3: PROMOCIÓN PACK 6 UNIDADES DE 10L */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            {/* Badge de Promoción Especial */}
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Súper Promo</span>
            </div>

            <div>
              <div className="relative w-full h-52 bg-emerald-50/50 rounded-2xl p-4 flex items-center justify-center mb-5 overflow-hidden">
                <Image
                  src="/catalogo_2.png" // Imagen del pack de 10L
                  alt="Pack Promo 6 Botellones de 10L"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-emerald-700 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg uppercase tracking-wider">
                  Pack x6 Unid.
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900">Promo 6x Agua 10L</h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Paquete especial de 6 botellones de 10 Litros a precio mayorista (S/ 4.50 c/u)[cite: 8].
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 font-medium block">Precio por pack (6u)</span>
                  <span className="text-2xl font-black text-emerald-600">S/ 27.00</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setCantPack10L(Math.max(1, cantPack10L - 1))}
                    className="p-1.5 bg-white text-slate-700 rounded-lg shadow-sm hover:bg-slate-200 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-extrabold text-slate-900 w-6 text-center text-sm">
                    {cantPack10L}
                  </span>
                  <button
                    onClick={() => setCantPack10L(cantPack10L + 1)}
                    className="p-1.5 bg-emerald-600 text-white rounded-lg shadow-sm hover:bg-emerald-700 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-2xl flex justify-between items-center text-xs">
                <span className="font-semibold text-emerald-800">Subtotal ({cantPack10L * 6} unid.):</span>
                <span className="font-black text-emerald-700 text-base">S/ {totalPack10L.toFixed(2)}</span>
              </div>

              <button
                onClick={() =>
                  pedirPorWhatsApp(
                    "Promoción Pack 6x Agua 10 Litros",
                    cantPack10L,
                    totalPack10L,
                    `Total de botellones: ${cantPack10L * 6} unidades`
                  )
                }
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-emerald-600/30 flex items-center justify-center gap-2 text-xs transition-all"
              >
                <FaWhatsapp className="w-7 h-7 text-white" />
                <span>Pedir por WhatsApp</span>
              </button>
            </div>
          </div>

          {/* CARD 4: AGUA 10L INDIVIDUAL CON DESCUENTO AUTOMÁTICO AL LLEGAR A 6 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative w-full h-52 bg-slate-50 rounded-2xl p-4 flex items-center justify-center mb-5 overflow-hidden group-hover:bg-emerald-50/30 transition-colors">
                <Image
                  src="/catalogo_3.png"
                  alt="Agua 10L Por Unidad"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-slate-700 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg uppercase tracking-wider">
                  Por Unidad
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900">Agua 10L (Unidad)</h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Compra desde 1 unidad. ¡Si pides 6 o más se aplica la tarifa promocional!
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 font-medium block">Precio unitario</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-2xl font-black ${esPrecioPromoAplicado ? "text-emerald-600" : "text-slate-900"}`}>
                      S/ {precioUnidad10L.toFixed(2)}
                    </span>
                    {esPrecioPromoAplicado && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.5 rounded">
                        ¡Promo!
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setCantUnidad10L(Math.max(1, cantUnidad10L - 1))}
                    className="p-1.5 bg-white text-slate-700 rounded-lg shadow-sm hover:bg-slate-200 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-extrabold text-slate-900 w-6 text-center text-sm">
                    {cantUnidad10L}
                  </span>
                  <button
                    onClick={() => setCantUnidad10L(cantUnidad10L + 1)}
                    className="p-1.5 bg-emerald-600 text-white rounded-lg shadow-sm hover:bg-emerald-700 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* AVISO DE REGLA DE DESCUENTO */}
              {!esPrecioPromoAplicado ? (
                <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl flex items-center gap-2 text-amber-800 text-[11px]">
                  <Info className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>Añade <strong>{6 - cantUnidad10L} más</strong> para precio promo (S/ 4.50 c/u)[cite: 8].</span>
                </div>
              ) : (
                <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl flex items-center gap-2 text-emerald-800 text-[11px] font-semibold">
                  <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>¡Descuento por volumen activado! (S/ 4.50 c/u)[cite: 8]</span>
                </div>
              )}

              <div className="bg-slate-50 p-3 rounded-2xl flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-600">Subtotal:</span>
                <span className="font-black text-slate-900 text-base">S/ {totalUnidad10L.toFixed(2)}</span>
              </div>

              <button
                onClick={() =>
                  pedirPorWhatsApp(
                    "Agua 10 Litros (Por Unidad)",
                    cantUnidad10L,
                    totalUnidad10L,
                    `Precio unitario aplicado: S/ ${precioUnidad10L.toFixed(2)}`
                  )
                }
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-emerald-600/30 flex items-center justify-center gap-2 text-xs transition-all"
              >
                <FaWhatsapp className="w-7 h-7 text-white" />
                <span>Pedir por WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
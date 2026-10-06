"use client";

import { useState } from "react";
import { X, BookOpen, Send } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReclamacionesModal({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  // Estados del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    documento: "",
    telefono: "",
    email: "",
    tipolicitud: "reclamo",
    detalle: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const correoDestino = "fernandaidiaquez1292@gmail.com";
    const asunto = encodeURIComponent(
      `[Libro de Reclamaciones] ${formData.tipolicitud.toUpperCase()} de ${formData.nombre}`
    );

    // Formatear el contenido del correo con salto de línea (%0D%0A)
    const cuerpo = encodeURIComponent(
      `HOJA DE RECLAMACIÓN VIRTUAL - MANANTIAL VERDE\n\n` +
        `DATOS DEL RECLAMANTE:\n` +
        `- Nombre Completo: ${formData.nombre}\n` +
        `- DNI / CE: ${formData.documento}\n` +
        `- Teléfono: ${formData.telefono}\n` +
        `- Correo del Cliente: ${formData.email}\n\n` +
        `DETALLE DE LA SOLICITUD:\n` +
        `- Tipo: ${formData.tipolicitud.toUpperCase()}\n` +
        `- Detalle del Reclamo / Queja:\n${formData.detalle}\n`
    );

    // Abrir cliente de correo del usuario
    window.location.href = `mailto:${correoDestino}?subject=${asunto}&body=${cuerpo}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto font-sans">
      <div className="bg-white text-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative my-8">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Encabezado */}
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
          <BookOpen className="w-8 h-8 text-emerald-600 shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-slate-900">Libro de Reclamaciones</h2>
            <p className="text-xs text-slate-500">Hoja de Reclamación Virtual - Manantial Verde</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-lg font-bold text-slate-900">Reclamo preparado con éxito</h3>
            <p className="text-sm text-slate-600">
              Se ha abierto tu aplicación de correo para enviar la información a la administración.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nombre Completo *
              </label>
              <input
                required
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  DNI / CE *
                </label>
                <input
                  required
                  type="text"
                  name="documento"
                  value={formData.documento}
                  onChange={handleChange}
                  placeholder="12345678"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Teléfono *
                </label>
                <input
                  required
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="962266922"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Correo Electrónico *
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tipo de Solicitud *
              </label>
              <select
                name="tipolicitud"
                value={formData.tipolicitud}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                <option value="reclamo">Reclamo (Disconformidad con el producto/servicio)</option>
                <option value="queja">Queja (Disconformidad con la atención)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Detalle del Reclamo / Queja *
              </label>
              <textarea
                required
                rows={3}
                name="detalle"
                value={formData.detalle}
                onChange={handleChange}
                placeholder="Describe brevemente lo sucedido..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
            >
              <Send className="w-4 h-4" /> Enviar Reclamación
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
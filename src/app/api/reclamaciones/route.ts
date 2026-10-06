import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nombre,
      tipoDocumento,
      numeroDocumento,
      telefono,
      email,
      direccion,
      tipoReclamo, // "Reclamo" o "Queja"
      montoReclamado,
      descripcionProducto,
      detalle,
      pedido,
    } = body;

    // Estructura del correo HTML enviado a la empresa
    const htmlContent = `
      <h2>📄 Nueva Reclamación Registrada - Manantial Verde</h2>
      <p><strong>Tipo:</strong> ${tipoReclamo}</p>
      <hr />
      <h3>Datos del Consumidor:</h3>
      <ul>
        <li><strong>Nombre:</strong> ${nombre}</li>
        <li><strong>Documento:</strong> ${tipoDocumento} - ${numeroDocumento}</li>
        <li><strong>Teléfono:</strong> ${telefono}</li>
        <li><strong>Correo electrónico:</strong> ${email}</li>
        <li><strong>Dirección:</strong> ${direccion}</li>
      </ul>
      <hr />
      <h3>Detalle del Reclamo/Queja:</h3>
      <ul>
        <li><strong>Producto/Servicio:</strong> ${descripcionProducto}</li>
        <li><strong>Monto Reclamado:</strong> ${montoReclamado ? `S/ ${montoReclamado}` : "N/A"}</li>
        <li><strong>Número de Pedido/Comprobante:</strong> ${pedido || "N/A"}</li>
      </ul>
      <p><strong>Detalle de los hechos:</strong></p>
      <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #10b981;">
        ${detalle}
      </blockquote>
    `;

    // Enviar correo a la administración
    await resend.emails.send({
      from: "Libro de Reclamaciones <onboarding@resend.dev>",
      to: "fernandaidiaquez1292@gmail.com",
      subject: `[Libro de Reclamaciones] Nueva ${tipoReclamo} de ${nombre}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Reclamación enviada con éxito" });
  } catch (error) {
    console.error("Error al enviar correo de reclamación:", error);
    return NextResponse.json(
      { success: false, error: "No se pudo enviar la reclamación" },
      { status: 500 }
    );
  }
}
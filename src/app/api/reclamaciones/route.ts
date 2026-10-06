import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Simulación de recepción de reclamo
    console.log("Reclamación recibida:", body);

    return NextResponse.json({
      success: true,
      message: "Reclamación registrada correctamente",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Error al procesar la reclamación" },
      { status: 500 }
    );
  }
}
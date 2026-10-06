export function getPrecioUnitarioAgua10L(cantidad: number): number {
  if (cantidad >= 50) return 3.50;
  if (cantidad >= 30) return 3.70;
  if (cantidad >= 15) return 4.00;
  if (cantidad >= 6) return 4.50;
  return 5.50; // De 1 a 5 unidades
}
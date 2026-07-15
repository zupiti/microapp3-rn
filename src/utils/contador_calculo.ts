/**
 * Pure helpers (`utils/`) — no React.
 */
export function formatarRotuloContador(valor: number): string {
  return `Contador: ${valor}`;
}

export function calcularProximoValor(
  valorAtual: number,
  delta: number,
): number {
  return valorAtual + delta;
}

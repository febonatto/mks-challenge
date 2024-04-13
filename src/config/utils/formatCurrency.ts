export function formatCurrency(value: number): string {
  return Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    maximumFractionDigits: 0,
  }).format(value);
}

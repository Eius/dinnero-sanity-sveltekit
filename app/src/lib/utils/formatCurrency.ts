export function formatCurrency (number: number): string
{
    const formattedNumber = number.toFixed(2);
    return `${formattedNumber}€`
}
export const monthlyPayment = (p: number, n: number, i: number) => (p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1))

export const roundToCents = (dollarAmount: number) => Math.round(dollarAmount * 100) / 100

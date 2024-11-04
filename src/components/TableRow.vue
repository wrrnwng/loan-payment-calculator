<script setup lang="ts">
import type { PaymentTerm } from '../stores/paymentTable'

type Props = {
  paymentTerm: PaymentTerm;
}

defineProps<Props>()

const formatToDollars = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

const formatToYears = (term: number) => {
  const years = Math.floor(term / 12)
  const months = term % 12

  return `${years > 0 ? years + ' Year(s)' : ''} ${months > 0 ? months + ' Month(s)' : ''}`
}
</script>

<template>
  <tr>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatToYears(paymentTerm.mortgageTerm) }}</td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatToDollars(paymentTerm.monthlyPayment) }}</td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ paymentTerm.interestRate }}%</td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatToDollars(paymentTerm.totalAmount) }}</td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {{ formatToDollars(paymentTerm.totalOverLoanTerm) }}
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ formatToDollars(paymentTerm.totalInterest) }}</td>
  </tr>
</template>

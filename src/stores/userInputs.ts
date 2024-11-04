import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { monthlyPayment as getMonthlyPayment, roundToCents } from "../lib/amortization";
import { usePaymentTable } from "./paymentTable";

export const useUserInputs = defineStore('userInput', () => {
  const purchasePrice = ref<number | null>(null)
  const interestRate = ref<number | null>(null)
  const downPaymentDollar = ref<number | null>(null)
  const downPaymentPercentage = ref<number | null>(null)
  const mortgageTerm = ref<number | null>(null)

  const { paymentTerms } = usePaymentTable()

  watch(downPaymentDollar, () => {
    if (purchasePrice.value !== null && downPaymentDollar.value !== null) {
      downPaymentPercentage.value = downPaymentDollar.value / purchasePrice.value * 100
    }
  })

  watch(downPaymentPercentage, () => {
    setDownPaymentDollar()
  })

  const setDownPaymentDollar = () => {
    if (purchasePrice.value !== null) {
      if (downPaymentPercentage.value !== null) {
        downPaymentDollar.value = Math.round(purchasePrice.value * downPaymentPercentage.value) / 100
      } else {
        downPaymentDollar.value = 0
      }
    }
  }

  const generateRates = () => {
    if (downPaymentDollar.value === null) {
      setDownPaymentDollar()
    }

    if (purchasePrice.value !== null && interestRate.value !== null && mortgageTerm.value !== null && downPaymentDollar.value !== null) {
      const totalAmount = purchasePrice.value - downPaymentDollar.value
      const monthlyPayment = roundToCents(getMonthlyPayment(totalAmount, mortgageTerm.value, interestRate.value / 100 / 12))
      const totalOverLoanTerm = monthlyPayment * mortgageTerm.value
      const totalInterest = totalOverLoanTerm - totalAmount

      paymentTerms.push({
        mortgageTerm: mortgageTerm.value,
        totalAmount,
        interestRate: interestRate.value,
        totalOverLoanTerm,
        monthlyPayment,
        totalInterest,
        id: paymentTerms.length
      })
    }
  }

  return { purchasePrice, interestRate, downPaymentDollar, downPaymentPercentage, mortgageTerm, paymentTerms, generateRates }
})

import { defineStore } from "pinia";
import { ref } from "vue";

export type PaymentTerm = {
  mortgageTerm: number;
  monthlyPayment: number;
  interestRate: number;
  totalAmount: number;
  totalOverLoanTerm: number;
  totalInterest: number;
  id: number;
}

export const usePaymentTable = defineStore('paymentTable', () => {
  const paymentTerms = ref<PaymentTerm[]>([])
  const currentlyOrderedBy = ref<keyof PaymentTerm>()
  const currentOrder = ref<'asc' | 'desc'>()

  const updateOrder = (columnValue: keyof PaymentTerm) => {
    if (currentlyOrderedBy.value === columnValue) {
      currentOrder.value = currentOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      currentlyOrderedBy.value = columnValue
      currentOrder.value = 'desc'
    }
  }

  return { paymentTerms, updateOrder, currentlyOrderedBy, currentOrder }
})

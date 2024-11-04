<script setup lang="ts">
import { computed } from 'vue'
import { orderBy } from "lodash";
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'
import { usePaymentTable } from '../stores/paymentTable'

const store = usePaymentTable()

const orderedTerms = computed(() => orderBy(store.paymentTerms, store.currentlyOrderedBy, store.currentOrder))

</script>

<template>
  <div class="p-8 bg-white rounded-lg w-full">
    <table class="w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <TableHeader column-value="mortgageTerm">Mortgage Term</TableHeader>
          <TableHeader column-value="monthlyPayment">Monthly Payment</TableHeader>
          <TableHeader column-value="interestRate">Interest Rate</TableHeader>
          <TableHeader column-value="totalAmount">Total Amount</TableHeader>
          <TableHeader column-value="totalOverLoanTerm">Total over Loan Term</TableHeader>
          <TableHeader column-value="totalInterest">Total Interest Paid</TableHeader>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-300">
        <TableRow v-for="paymentTerm in orderedTerms" :payment-term="paymentTerm" :key="paymentTerm.id" />
      </tbody>
    </table>
  </div>
</template>

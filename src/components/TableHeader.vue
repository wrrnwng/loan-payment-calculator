<script setup lang="ts">
import { ChevronUpDownIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/outline"
import { usePaymentTable } from "../stores/paymentTable";
import type { PaymentTerm } from '../stores/paymentTable'

type ColumnValue = keyof PaymentTerm
type Props = {
  columnValue: ColumnValue;
}
defineProps<Props>()

const store = usePaymentTable()
</script>

<template>
  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
    <div class="flex items-center">
      <slot />
      <div @click="() => store.updateOrder(columnValue)">
        <ChevronUpIcon v-if="store.currentlyOrderedBy === columnValue && store.currentOrder === 'asc'"
          class="w-5 text-sky-700" />
        <ChevronDownIcon v-else-if="store.currentlyOrderedBy === columnValue && store.currentOrder === 'desc'"
          class="w-5 text-sky-700" />
        <ChevronUpDownIcon v-else class="w-5" />
      </div>
    </div>
  </th>
</template>

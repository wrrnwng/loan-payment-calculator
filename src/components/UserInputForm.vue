<script setup lang="ts">
import InputField from './InputField.vue'
import { useUserInputs } from '../stores/userInputs'

const store = useUserInputs()
</script>

<template>
  <form class="bg-white rounded-lg flex flex-col gap-y-10 p-8" @submit.prevent="store.generateRates">
    <InputField name="Purchase Price" required placeholder="E.g. $100,000,000" :min="0" :step="0.01"
      v-model.number="store.purchasePrice" />
    <InputField name="Interest Rate" required placeholder="E.g. 20%" :min="0" :max="100" :step="0.01"
      v-model.number="store.interestRate" />
    <InputField name="Down Payment in $" placeholder="E.g. $15,000,000" :min="0" :step="0.01"
      v-model.number="store.downPaymentDollar" />
    <InputField name="Down Payment in %" placeholder="E.g. 20%" :min="0" :max="100" step="any"
      v-model.number="store.downPaymentPercentage" />
    <InputField name="Mortgage Term" required placeholder="E.g. 90 months" :min="0" v-model.number="store.mortgageTerm" />
    <button
      class="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      type="submit">
      Generate Rates
    </button>
  </form>
</template>

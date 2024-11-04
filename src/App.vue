<script setup lang="ts">
import UserInputForm from "./components/UserInputForm.vue";
import PaymentTable from "./components/PaymentTable.vue";
</script>

<template>
  <div class="px-16 py-12">
    <h1 class="text-6xl mb-10 text-sky-700">Loan Payment Calculator</h1>
    <div class="flex flex-row gap-x-6">
      <div class="basis-1/6">
        <UserInputForm />
      </div>
      <div class="basis-5/6">
        <PaymentTable />
      </div>
    </div>
  </div>
</template>

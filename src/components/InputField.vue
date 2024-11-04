<script setup lang="ts">
type Props = {
  name: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number | 'any';
}

withDefaults(defineProps<Props>(), { required: false })

const model = defineModel()

const update = (payload: Event) => {
  if (payload?.target) {
    const target = payload.target as HTMLInputElement
    model.value = target.value
  }
}
</script>

<template>
  <div>
    <label :for="name" class="block font-medium text-sky-700">{{ name }}{{ required ? '*' : '' }}</label>
    <div class="mt-2">
      <input type="number" :id="name" :required="required" :placeholder="placeholder" :min="min" :max="max" :step="step"
        :value="model" @input="update"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm/6">
    </div>
  </div>
</template>

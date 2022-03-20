<template>
  <label
    class="pr-3 text-white"
    :for="inputId"
  >
    {{ label }}
  </label>
  <input
    :id="inputId"
    type="text"
    :value="modelValue"
    @input="onInput"
  >
</template>

<script setup lang="ts">
const props = defineProps({
  inputId: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [Number, String],
    default: '',
  },
});

const emit = defineEmits([
  'update:modelValue',
]);

function onInput(event: Event) {
  const { value } = event.target as HTMLInputElement;
  emit('update:modelValue', value);
}
</script>

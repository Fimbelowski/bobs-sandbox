<template>
  <div
    class="p-3"
  >
    <BaseTextInput
      v-model="state.comboSearch"
      input-id="combo-search"
      label="Combo Search (Card Title & Card Text)"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import BaseTextInput from './BaseTextInput.vue';

const state = reactive({
  comboSearch: '',
});
</script>

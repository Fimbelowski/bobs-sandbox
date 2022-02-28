<template>
  <div
    class="bottom-0 fixed w-full"
  >
    <button
      class="bg-neutral-700 flex hover:bg-neutral-600 justify-center p-3 text-white w-full"
      data-testid="toggle-button"
      type="button"
      @click="toggleDrawerOpen"
    >
      {{ isOpen ? 'Close' : 'Open' }}
    </button>
    <div
      class="bg-neutral-800 transition-all"
      data-testid="card-container"
      :class="isOpen ? 'h-[700px]' : 'h-0'"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

function toggleDrawerOpen() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div
    class="bottom-0 fixed w-full"
  >
    <div
      class="bg-neutral-700 cursor-pointer flex hover:bg-neutral-600 justify-center p-3 text-white"
      @click="toggleDrawerOpen"
    >
      {{ isOpen ? 'Close' : 'Open' }}
    </div>
    <div
      class="bg-neutral-800 flex flex-wrap overflow-auto"
      :class="isOpen ? 'h-[700px]' : 'h-0'"
    >
      <img
        v-for="(minion, index) in minions"
        :key="index"
        width="300"
        :src="minion"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import * as minions from '../assets/minions';

const isOpen = ref(false);

function toggleDrawerOpen() {
  isOpen.value = !isOpen.value;
}
</script>

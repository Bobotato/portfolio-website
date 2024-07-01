<script lang="ts" setup>
import { onMounted } from 'vue'
import type { WritableComputedRef } from 'vue'

import { useDark, useToggle } from '@vueuse/core'

const isDark:WritableComputedRef<boolean> = useDark()

const toggleDark = useToggle(isDark)

onMounted(() => {
  console.log(isDark.value)
  if (isDark.value === true) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})
</script>

<template>
<div class="flex flex-row gap-2">
  <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" @click="toggleDark()">
    <img id="theme-toggle-light-icon" src="/assets/BWIcons/sunIcon.svg" class="h-6 w-6" v-if="isDark"/>
    <img id="theme-toggle-light-icon" src="/assets/BWIcons/moonIcon.svg" class="h-6 w-6" v-else/>
  </button>
</div>
</template>

<style>
</style>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import WalkingAnim from '@/components/utils/WalkingAnim.vue'
import Footer from '@/components/utils/footer/Footer.vue'
</script>

<template>
  <div class="flex flex-col mx-auto items-center justify-center overflow-hidden py-10">
    <div class="flex flex-col items-center justify-center mt-10 -mb-12">
      <h1 class="text-4xl font-bold dark:text-white">Not found.</h1>
      <p class="mt-2 dark:text-white">There's nothing here but dust and footprints.</p>
    </div>
    <WalkingAnim></WalkingAnim>

    <RouterLink to="/" class="-mt-24 hover:text-green-700 dark:text-white">
      Press here to go back home.</RouterLink
    >
    <Footer></Footer>
  </div>
</template>

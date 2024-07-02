<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import WalkingAnim from '@/components/utils/WalkingAnim.vue'
import Footer from '@/components/utils/footer/Footer.vue'
</script>

<template>
  <div class="flex flex-col mx-auto items-center justify-center w-screen overflow-hidden">
    <h1 class="text-4xl dark:text-white">Not found.</h1>
    <p class="mt-2 dark:text-white">There's nothing here.</p>
    <WalkingAnim></WalkingAnim>
   
    <RouterLink to="/" class="hover:text-green-700 dark:text-white"> Press here to go back home.</RouterLink>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="flex flex-col items-center justify-center h-screen">
    <div class="shine text-green-700 font-extrabold text-9xl ">
    Work Experience
    </div>

    <nav class = "flex flex-row gap-8 text-2xl">
      <div class="text-green-700">About Me</div> | 
      <RouterLink to ="/projects" class="hover:text-green-700">Projects</RouterLink> | 
      <RouterLink to ="/work-experience" class="hover:text-green-700">Work Experience</RouterLink> | 
      <RouterLink to ="/contact" class="hover:text-green-700">Contact</RouterLink>
    </nav>
  </main>

  <footer>
    <div class="flex justify-center">
      Built in 2023 using Vue
    </div>
  </footer>
</template>

<style scoped>
.shine {
  -webkit-mask-image: linear-gradient(-75deg, rgba(255, 255, 255, 0.6) 30%, #f8f8f8 50%, rgba(255, 255, 255, 0.6) 70%);
  -webkit-mask-size: 300%;
  animation: shine-effect 3s linear infinite;
}

@keyframes shine-effect {
  from { -webkit-mask-position: 150%; }
  to { -webkit-mask-position: -50%; }
}
</style>

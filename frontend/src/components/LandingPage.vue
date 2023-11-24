<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="flex flex-col gap-8 items-center justify-center h-screen w-screen">
    <div class="full-name">
      <div class="shine px-10 text-green-700 text-center font-bold text-8xl tracking-tighter">
        Alexander
      </div>
      <div class="shine -mt-4 pb-4 text-green-700 text-center font-bold text-8xl tracking-tighter">
        Bhojwani
      </div>
    </div>

    <div class="-mt-4 text-xl text-center">A portfolio website by Alexander Bhojwani</div>

    <nav class="flex flex-row gap-8 text-xl text-center">
      <RouterLink to="/about" class="hover:text-green-700">About</RouterLink>
      |<RouterLink to="/projects" class="hover:text-green-700">Projects</RouterLink> |
      <RouterLink to="/work-experience" class="hover:text-green-700">Work Experience</RouterLink> |
      <RouterLink to="/contact" class="hover:text-green-700">Contact</RouterLink>
    </nav>
  </main>

  <footer class="flex flex-row justify-center">
    <div>Built in 2023 using Vue</div>
    <image src="../assets/VueIcon.svg" class="w-4 h-4"></image>
  </footer>
</template>

<style scoped>
.shine {
  -webkit-mask-image: linear-gradient(
    -75deg,
    rgba(255, 255, 255, 0.6) 30%,
    #f8f8f8 50%,
    rgba(255, 255, 255, 0.6) 70%
  );
  -webkit-mask-size: 300%;
  animation: shine-effect 3s linear infinite;
}

@keyframes shine-effect {
  from {
    -webkit-mask-position: 150%;
  }
  to {
    -webkit-mask-position: -50%;
  }
}
</style>

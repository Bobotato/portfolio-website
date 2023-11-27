<script setup lang="ts">
import { RouterLink } from 'vue-router'

import ContactTag from './ContactTag.vue'
</script>

<template>
  <header class="flex flex-col items-center justify-center">
    <RouterLink to="/" class="shine text-green-700 font-bold text-8xl tracking-tighter m-8"
      >Contact</RouterLink
    >

    <nav class="flex flex-row gap-8 text-xl">
      <RouterLink to="/about" class="hover:text-green-700">About</RouterLink>

      | <RouterLink to="/projects" class="hover:text-green-700">Projects</RouterLink> |
      <RouterLink to="/work-experience" class="hover:text-green-700">Experience</RouterLink> |
      <div class="text-green-700">Contact</div>
    </nav>
  </header>

  <main class="flex flex-col items-center justify-center">
    <div class="flex flex-col m-8 gap-8 items-center text-center text-xl max-w-6xl">
      <p>Feel free to give me a shout or look up any of my projects.</p>
    </div>

    <ContactTag></ContactTag>
  </main>
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

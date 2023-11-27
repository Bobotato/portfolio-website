<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex flex-col items-center justify-center">
    <RouterLink to="/" class="shine text-green-700 font-bold text-8xl tracking-tighter m-8 px-10">
      Portfolio
    </RouterLink>

    <nav class="flex flex-row gap-8 text-xl">
      <RouterLink to="/about" class="hover:text-green-700">About</RouterLink> |
      <div class="text-green-700">Projects</div>
      |
      <RouterLink to="/work-experience" class="hover:text-green-700">Experience</RouterLink> |
      <RouterLink to="/contact" class="hover:text-green-700">Contact</RouterLink>
    </nav>
  </header>

  <main class="flex flex-col items-center justify-center">
    <div class="flex flex-col m-8 gap-8 items-center text-center text-xl max-w-6xl">
      <p>These are some of the projects I did on my journey to be an SWE.</p>
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

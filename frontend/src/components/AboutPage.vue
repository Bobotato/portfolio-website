<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex flex-col items-center justify-center">
    <div class="shine text-green-700 font-extrabold text-9xl m-8">
    About Me
    </div>

    <nav class="flex flex-row gap-8 text-2xl">
      <div class="text-green-700">About Me</div> | 
      <RouterLink to ="/projects" class="hover:text-green-700">Projects</RouterLink> | 
      <RouterLink to ="/work-experience" class="hover:text-green-700">Work Experience</RouterLink> | 
      <RouterLink to ="/contact" class="hover:text-green-700">Contact</RouterLink>
    </nav>
  </header>

  <main class="flex flex-col items-center justify-center">

    <div class="flex flex-col m-8 gap-8 items-center text-center text-xl max-w-6xl">
      <p>
        My name is Alexander Bhojwani, I'm 29 this year and I'm a self-trained full stack software engineer.
      </p>
      <p>
        I graduated from Singapore Management University with a BSc of Economics (hons) and had my foray into tech maintaining wordpress websites in a law firm. I decided to transition into tech after realising I naturally gravitated towards building and maintaining tech solutions for whichever company I was employed by.
      </p>
      <p>
        With some help from friends I've successfully become a full-stack SWE.
      </p>
    </div>

    <div>
      <h1 class="font-bold text-3xl">My Stack</h1>
      <div></div>
    </div>
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

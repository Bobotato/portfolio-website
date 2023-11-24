<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="flex flex-col items-center justify-center h-screen">
    <div class="text-green-700 text-xl">
      AlexDB.me
    </div>
    <div>
      A portfolio website by Alexander Bhojwani
    </div>
    <nav>
      <RouterLink to ="/about" class="hover:text-green-700">About Me</RouterLink> | 
      <RouterLink to ="/projects" class="hover:text-green-700">Projects</RouterLink> | 
      <RouterLink to ="/work-experience" class="hover:text-green-700">Work Experience</RouterLink> | 
      <RouterLink to ="/contact" class="hover:text-green-700">Contact</RouterLink>
    </nav>
  </main>

  <footer class="flex justify-center">
    <div>
      Built in 2023 using Vue
    </div>
    <image src="../assets/logo.svg"></image>
      
  </footer>
</template>

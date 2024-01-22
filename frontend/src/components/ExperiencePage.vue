<script setup lang="ts">
import { RouterLink } from 'vue-router'

import ContactLinkList from '@/components/ContactLinkList.vue';
import ExperienceArticle from '@/components/ExperienceArticle.vue'
import ThemeToggle from '@/components/ThemeToggle.vue';

import { FOODALICIOUSCONCEPTS, SMILEPEPPER, FREELANCEWORK } from '@/utils/ExperienceData';
</script>

<template>
<main class="flex flex-col max-w-screen-2xl mx-auto items-center justify-center w-screen">
  <div id="nav-menu" class="flex flex-col items-center justify-center">
    <RouterLink
      to="/"
      id="page-name"
      class="shine text-slate-800 font-bold text-5xl tracking-tighter text-center mt-8 mb-4 p-2 lg:text-5xl lg:mt-4 lg:mb-2 dark:text-green-700"
      >Experience</RouterLink>

      <nav id="nav-menu" class="flex flex-row gap-2 text-slate-800 text-lg text-center lg:text-xl lg:gap-8 dark:text-gray-300">
      <RouterLink to="/" class="hover:text-green-700">Home</RouterLink> |
      <RouterLink to="/about" class="hover:text-green-700">About</RouterLink> |
      <RouterLink to="/projects" class="hover:text-green-700">Projects</RouterLink> |
      <div class="text-green-700 font-bold">Experience</div>
    </nav>
  </div>

  <section id="resume-link-button">
      <a target="_blank" rel="noreferrer noopener">
          <button class="bg-slate-800 dark:bg-green-900 w-60 h-12 rounded-lg mt-10 transform transition duration-200 hover:scale-110 hover:bg-slate-700 hover:dark:bg-green-800 lg:w-64 lg:h-16">
              <div class="flex flex-row items-center justify-center text-lg gap-3 -ml-2 text-white">

                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 lg:w-8 lg:h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>

                <p id="resume-link-text" class="text-xl text-white lg:text-xl">Full Resume</p>
              </div>
          </button>
      </a>
  </section>

  <section class="flex flex-col items-center justify-center">
    <div id="experience-articles" class="flex flex-col gap-8 mt-10 lg:max-w-4xl lg:gap-2 lg:mt-4">
      <ExperienceArticle :experience-details="SMILEPEPPER"></ExperienceArticle>
      <ExperienceArticle :experience-details="FOODALICIOUSCONCEPTS"></ExperienceArticle>
      <ExperienceArticle :experience-details="FREELANCEWORK"></ExperienceArticle>
    </div>
  </section>
</main>

<footer class="flex flex-col justify-center items-center mt-12 lg:mt-8 lg:p-4">

<hr id="divider-footer" class="mb-8 w-2/6 border-slate-800 dark:border-green-900 lg:mb-2" />

<div id="footer-content" class="flex flex-row gap-2 justify-center items-center">

  <span id="footer-note" class="block text-sm font-light text-center text-slate-800 dark:text-gray-300">© 2023 Alexander Bhojwani.</span>
  <span id="footer-note" class="block text-sm font-light text-center text-slate-800 dark:text-gray-300">A portfolio website made with <a href="https://vuejs.org/" class="hover:text-green-700">Vue</a>.</span>
  
<ThemeToggle></ThemeToggle>

</div>

<ContactLinkList></ContactLinkList>

</footer>
</template>

<style scoped>
.shine {
  mask-image: linear-gradient(
    -60deg,
    rgba(245, 250, 255, 1) 40%,
    rgba(231, 0, 0, 0.5) 50%,
    rgba(251, 253, 255, 1) 60%
  );
  mask-size: 300%;
  animation: shine-effect 6s linear infinite;
}

@keyframes shine-effect {
  from {
    mask-position: 200% 0%;
  }
  to {
    mask-position: -100% 0%;
  }
}
</style>
<script setup lang="ts">
import { RouterLink } from 'vue-router'

import ProjectArticlePreview from '@/components/projectsPortfolio/ProjectArticle.vue'

import { portfolioData } from '@/data/PortfolioData'
</script>

<template>
  <main
    id="projects-page"
    class="flex flex-col max-w-screen-2xl mx-auto items-center justify-center w-screen"
  >
    <div class="flex flex-col items-center justify-center">
      <RouterLink
        to="/"
        id="page-name"
        class="shine text-slate-800 font-bold text-5xl tracking-tighter text-center mt-8 mb-4 p-2 lg:text-5xl lg:mt-4 lg:mb-2 dark:text-green-700"
        >Projects</RouterLink
      >

      <nav
        id="nav-menu"
        class="flex flex-row gap-2 text-slate-800 text-lg text-center lg:text-xl lg:gap-8 dark:text-gray-300"
      >
        <RouterLink to="/" class="hover:text-green-700">Home</RouterLink> |
        <RouterLink to="/about" class="hover:text-green-700">About</RouterLink> |
        <div class="text-green-700 font-bold">Projects</div>
        |
        <RouterLink to="/work-experience" class="hover:text-green-700">Experience</RouterLink>
      </nav>
    </div>

    <section>
      <div id="portfolio-projects" class="flex flex-col gap-8 mt-10 lg:max-w-4xl lg:gap-2">
        <div v-for="item, index in portfolioData">
          <ProjectArticlePreview :key=index :portfolio-preview-details="item"></ProjectArticlePreview>
        </div>
      </div>
    </section>
  </main>

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

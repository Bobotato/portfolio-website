<script setup lang="ts">
import ProjectArticlePreview from '@/components/projects/ProjectArticle.vue'

import { portfolioData } from '@/data/PortfolioData'
</script>

<template>
  <main id="projects-page" class="max-w-screen-2xl mx-auto items-center">
    <section class="flex flex-col items-center justify-center mt-8">
      <div id="portfolio-projects" class="flex flex-col p-4 lg:p-0 lg:max-w-4xl lg:gap-6 lg:mt-4">
        <div v-for="(item, index) in portfolioData">
          <ProjectArticlePreview :key="index" :portfolio-data="item"></ProjectArticlePreview>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import ProjectArticlePreview from '@/components/projects/ProjectArticle.vue'

import { portfolioData } from '@/data/PortfolioData'
</script>

<template>
  <main id="projects-page" class="flex flex-col mx-auto items-center gap-6 px-4 lg:max-w-4xl">
    <section class="flex flex-col items-center justify-center mt-4 lg:mt-8">
      <div id="portfolio-projects" class="flex flex-col gap-6 mt-2 p-4 lg:p-0 lg:max-w-4xl lg:mt-4">
        <div v-for="(item, index) in portfolioData">
          <ProjectArticlePreview :key="index" :portfolio-data="item"></ProjectArticlePreview>
        </div>
      </div>
    </section>
  </main>
</template>

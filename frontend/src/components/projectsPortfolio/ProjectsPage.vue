<script setup lang="ts">
import ProjectArticlePreview from '@/components/projectsPortfolio/ProjectArticle.vue'

import { portfolioData } from '@/data/PortfolioData'
</script>

<template>
  <main
    id="projects-page"
    class="flex flex-col max-w-screen-2xl mx-auto items-center justify-center w-screen"
  >
    <section>
      <div id="portfolio-projects" class="flex flex-col gap-8 mt-10 lg:max-w-4xl lg:gap-2">
        <div v-for="(item, index) in portfolioData">
          <ProjectArticlePreview
            :key="index"
            :portfolio-preview-details="item"
          ></ProjectArticlePreview>
        </div>
      </div>
    </section>
  </main>
</template>

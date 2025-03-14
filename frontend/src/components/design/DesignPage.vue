<script setup lang="ts">
import ExperienceArticle from '@/components/experience/ExperienceArticle.vue'

import { experienceData } from '@/data/ExperienceData'
</script>

<template>
  <main class="flex flex-col mx-auto items-center gap-6 px-4 lg:max-w-4xl">
    <section class="flex flex-col items-center justify-center">
      <div
        id="experience-articles"
        class="flex flex-col gap-6 mt-2 p-4 lg:p-0 lg:max-w-4xl lg:mt-4"
      >
        <div v-for="(item, index) in experienceData" :key="index">
          <ExperienceArticle :experience-details="item"></ExperienceArticle>
        </div>
      </div>
    </section>
  </main>
</template>

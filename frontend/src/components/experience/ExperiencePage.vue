<script setup lang="ts">
import ExperienceArticle from '@/components/experience/ExperienceArticle.vue'

import { experienceData } from '@/data/ExperienceData'
</script>

<template>
  <main class="flex flex-col mx-auto items-center gap-6 px-4 lg:max-w-4xl">
    <section id="resume-link-button">
      <a href="assets/files/Alexander_Bhojwani_Resume.pdf" target="_blank" rel="noreferrer noopener">
        <button
          class="bg-slate-800 dark:bg-green-900 w-60 h-12 rounded-lg mt-10 hover:bg-slate-700 hover:dark:bg-green-800 lg:w-64 lg:h-16"
        >
          <div class="flex flex-row items-center justify-center text-lg gap-3 -ml-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6 lg:w-8 lg:h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>

            <p id="resume-link-text" class="text-xl text-white lg:text-xl">Full Resume</p>
          </div>
        </button>
      </a>
    </section>

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

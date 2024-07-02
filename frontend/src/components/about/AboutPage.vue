<script setup lang="ts">
import { languageItems, technologyItems, learningItems } from '@/data/ProficiencyData'
import ProficiencyItem from '@/components/about/ProficiencyItem.vue'
</script>

<template>
  <main id="about-page" class="flex flex-col items-center justify-center">
    <div id="about-content" class="flex flex-col items-center justify-center max-w-xs lg:max-w-3xl">
      <img src="/assets/pictures/ProfilePicture.jpg" class="rounded-full mt-10 mb-4 w-56 h-56" />
      <p class="text-center text-3xl font-bold dark:text-gray-300">That's me (on the right).</p>

      <div
        id="about-me"
        class="flex flex-col mt-8 gap-4 items-center text-center text-lg lg:gap-8 lg:text-base dark:text-gray-300"
      >
        <p class="text-sm font-light lg:text-lg">
          My name is Alexander Bhojwani, I'm 29 this year and I'm a full-stack software engineer.
        </p>
        <p class="text-sm font-light lg:text-lg">
          I graduated from Singapore Management University with a BSc of Economics (hons) and I am
          currently working in a startup I cofounded called
          <a href="https://www.smilepepper.com/" class="hover:text-blue-700">SmilePepper</a> as a
          junior SWE (among other roles).
        </p>
        <p class="text-sm font-light lg:text-lg">
          I also have a strong background as a creative, with many years of corporate design work
          under my sleeve.
        </p>
      </div>

      <hr id="divider-1" class="my-12 w-3/5 border-green-900 border-1" />

      <div id="proficiencies" class="flex flex-col gap-12 font-light">
        <section id="languages-frameworks" class="dark:text-gray-300">
          <h1 class="font-bold text-center text-2xl mb-5 lg:text-3xl">Languages & Frameworks</h1>

          <div
            class="flex flex-row flex-wrap place-items-center justify-center gap-x-4 gap-y-2 text-sm lg:gap-x-4 lg:text-base"
          >
            <div v-for="item in languageItems">
              <ProficiencyItem :proficency-item="item"></ProficiencyItem>
              </div>
            </div>
        </section>

        <section id="technologies" class="dark:text-gray-300">
          <h1 class="font-bold text-center text-2xl mb-5 lg:text-3xl">Technologies</h1>

          <div
            class="flex flex-row flex-wrap place-items-center justify-center gap-x-4 gap-y-2 lg:gap-x-4 lg:text-base"
          >

          <div v-for="item in technologyItems">
              <ProficiencyItem :proficency-item="item"></ProficiencyItem>
              </div>

          </div>
        </section>

        <section id="learning" class="dark:text-gray-300">
          <h1 class="font-bold text-center text-2xl mb-5 lg:text-3xl">Currently Learning</h1>

          <div
            class="flex flex-row flex-wrap place-items-center justify-center gap-x-4 gap-y-2 lg:gap-x-4 lg:text-base"
          >
          <div v-for="item in learningItems">
              <ProficiencyItem :proficency-item="item"></ProficiencyItem>
              </div>

            </div>
        </section>
      </div>
    </div>
  </main>
</template>
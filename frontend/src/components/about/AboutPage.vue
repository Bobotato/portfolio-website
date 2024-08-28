<script setup lang="ts">
import { languageItems, technologyItems, learningItems } from '@/data/ProficiencyData'
import ProficiencyItem from '@/components/about/ProficiencyItem.vue'
</script>

<template>
  <main id="about-page" class="flex flex-col items-center justify-center">
    <div id="about-content" class="flex flex-col justify-center max-w-xs lg:max-w-3xl">
      <div class="flex flex-col justify-center items-center mt-10">
        <img
          src="/assets/pictures/ProfilePicture.png"
          alt="Alexander and a tortoise"
          class="rounded-full w-56 h-56"
        />
        <p class="text-center text-2xl font-bold my-8 lg:text-3xl dark:text-gray-300">
          This is me ^.
        </p>
      </div>

      <div class="flex flex-col gap-12">
        <div
          id="about-me-section"
          class="flex flex-col justify-center mt-8 gap-4 text-lg lg:gap-8 lg:text-base dark:text-gray-300"
        >
          <h1 class="font-bold text-2xl lg:text-3xl">About Me</h1>
          <p class="text-left text-sm font-light lg:text-lg">
            I'm 29 this year and I'm a full-stack, self-taught software engineer who enjoys building
            performant and visually appealing products. <br /><br />
            I graduated from Singapore Management University with a BSc of Economics (hons) and I am
            currently working in a startup I cofounded called
            <a
              href="https://www.smilepepper.com/"
              class="hover:text-blue-700 hover:dark:text-green-500"
              >SmilePepper</a
            >
            as a junior SWE (among other roles). <br /><br />
            I also have a strong background as a creative, with many years of corporate design work
            under my sleeve.
          </p>
        </div>

        <div id="proficiencies-section" class="flex flex-col gap-12 font-light">
          <section id="languages-frameworks" class="dark:text-gray-300">
            <h1 class="font-bold text-2xl mb-5 lg:text-3xl">Languages & Frameworks</h1>

            <div
              class="flex flex-row flex-wrap place-items-center gap-x-4 gap-y-4 text-sm mt-8 lg:gap-x-4 lg:text-base lg:gap-y-2"
            >
              <div v-for="item in languageItems">
                <ProficiencyItem :proficency-item="item"></ProficiencyItem>
              </div>
            </div>
          </section>

          <section id="technologies" class="dark:text-gray-300">
            <h1 class="font-bold text-2xl mb-5 lg:text-3xl">Technologies</h1>

            <div
              class="flex flex-row flex-wrap place-items-center gap-x-4 gap-y-4 mt-8 lg:gap-x-4 lg:text-base lg:gap-y-2"
            >
              <div v-for="item in technologyItems">
                <ProficiencyItem :proficency-item="item"></ProficiencyItem>
              </div>
            </div>
          </section>

          <section id="learning" class="dark:text-gray-300" v-if="learningItems.length > 0">
            <h1 class="font-bold text-2xl mb-5 lg:text-3xl">Currently Learning</h1>

            <div
              class="flex flex-row flex-wrap place-items-center gap-x-4 gap-y-4 mt-8 lg:gap-x-4 lg:text-base lg:gap-y-2"
            >
              <div v-for="item in learningItems">
                <ProficiencyItem :proficency-item="item"></ProficiencyItem>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

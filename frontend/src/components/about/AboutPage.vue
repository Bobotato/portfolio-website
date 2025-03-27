<script setup lang="ts">
import dayjs from 'dayjs'
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

import {
  languageItems,
  technologyItems,
  learningItems,
  certificationItems
} from '@/data/ProficiencyData'
import ProficiencyItem from '@/components/about/ProficiencyItem.vue'
import CertificationItem from '@/components/about/CertificationItem.vue'
import GithubWidget from '@/components/utils/githubActivity/GithubWidget.vue'

import type { ComputedRef } from 'vue'

const age = parseInt(dayjs().format('YYYY')) - 1994

const { width } = useWindowSize()

const daysToRender: ComputedRef<number> = computed(() => (width.value < 1024 ? 150 : 365))
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
            I'm {{ age }} this year and I'm a full-stack, self-taught software engineer who enjoys
            building performant and visually appealing products. <br /><br />
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
              <div v-for="item in languageItems" :key="item.id">
                <ProficiencyItem :proficency-item="item"></ProficiencyItem>
              </div>
            </div>
          </section>

          <section id="technologies" class="dark:text-gray-300">
            <h1 class="font-bold text-2xl mb-5 lg:text-3xl">Technologies</h1>

            <div
              class="flex flex-row flex-wrap place-items-center gap-x-4 gap-y-4 mt-8 lg:gap-x-4 lg:text-base lg:gap-y-2"
            >
              <div v-for="item in technologyItems" :key="item.id">
                <ProficiencyItem :proficency-item="item"></ProficiencyItem>
              </div>
            </div>
          </section>

          <section id="learning" class="dark:text-gray-300" v-if="learningItems.length > 0">
            <h1 class="font-bold text-2xl mb-5 lg:text-3xl">Currently Learning</h1>

            <div
              class="flex flex-row flex-wrap place-items-center gap-x-4 gap-y-4 mt-8 lg:gap-x-4 lg:text-base lg:gap-y-2"
            >
              <div v-for="item in learningItems" :key="item.id">
                <ProficiencyItem :proficency-item="item"></ProficiencyItem>
              </div>
            </div>
          </section>

          <section
            id="certifications"
            class="dark:text-gray-300"
            v-if="certificationItems.length > 0"
          >
            <h1 class="font-bold text-2xl mb-5 lg:text-3xl">Certifications</h1>

            <div
              class="flex flex-row flex-wrap place-items-center gap-x-4 gap-y-4 mt-8 lg:gap-x-4 lg:text-base lg:gap-y-2"
            >
              <div v-for="item in certificationItems" :key="item.id">
                <CertificationItem :certification-item="item"></CertificationItem>
              </div>
            </div>
          </section>
        </div>

        <div
          id="github-activity-section"
          class="flex flex-col justify-center mt-8 gap-4 text-lg lg:gap-8 lg:text-base dark:text-gray-300"
        >
          <h1 class="font-bold text-2xl lg:text-3xl">Contribution Activity</h1>
          <p class="text-left text-sm font-light lg:text-lg">
            <a
              href="https://github.com/bobotato"
              class="hover:text-blue-700 hover:dark:text-green-500"
              >My Github</a
            >
            (My contributions are mostly on Bitbucket at the moment)
          </p>

          <GithubWidget :daysToRender="daysToRender" />
        </div>
      </div>
    </div>
  </main>
</template>

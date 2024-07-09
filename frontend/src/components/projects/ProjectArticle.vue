<script lang="ts" setup>
import { useDark } from '@vueuse/core'
import Accordion from '@/components/utils/Accordion.vue'

import type { WritableComputedRef } from 'vue'
import type { PortfolioItem } from '@/types/portfolioTypes'

const isDark: WritableComputedRef<boolean> = useDark()

interface Props {
  portfolioData: PortfolioItem
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="cursor-pointer flex flex-col rounded-lg border accordion-light dark:accordion-dark accordion-light-hover-blue accordion-dark-hover-green p-3 pb-8 lg:p-12 lg:pb-8"
  >
    <Accordion>
      <template #accordionHeader="{ toggle, expanded }">
        <div @click="toggle()">
          <div class="flex flex-col gap-2 items-center justify-center lg:grid lg:grid-cols-2">
            <section
              id="project-image"
              class="flex items-center object-contain justify-center max-w-sm p-4 lg:mb-12"
            >
              <img
                :src="
                  isDark && props.portfolioData.imgSrcDark
                    ? props.portfolioData.imgSrcDark
                    : props.portfolioData.imgSrc
                "
                class="max-h-36 lg:max-h-60"
                alt="project-image"
              />
            </section>

            <section id="project-description" class="flex flex-col px-4 lg:px-8">
              <div class="flex flex-col gap-4">
                <h1 id="project-title" class="text-3xl text-left font-bold lg:text-left">
                  {{ props.portfolioData.title }}
                </h1>
                <p
                  id="project-description-text"
                  class="text-sm text-left font-light lg:text-base"
                >
                  {{ props.portfolioData.desc }}
                </p>
              </div>

              <div class="stack flex flex-row gap-4 mt-6 flex-wrap">
                <div
                  v-for="stackitem in props.portfolioData.stack"
                  :key="stackitem"
                  class="bg-slate-600 dark:bg-green-700 text-white text-base py-2 px-4 rounded-lg lg:text-base"
                >
                  {{ stackitem }}
                </div>
              </div>

              <button
                class="bg-slate-800 dark:bg-green-900 w-48 h-12 rounded-lg mt-10 hover:bg-slate-700 hover:dark:bg-green-800 lg:w-40 lg:h-12"
              >
                <a :href="props.portfolioData.github" target="_blank" rel="noreferrer noopener">
                  <div
                    class="flex flex-row items-center justify-center text-white text-lg gap-3 -ml-2"
                  >
                    <img
                      class="h-6 invert"
                      src="/assets/BWIcons/GithubIcon.svg"
                      alt="github-link"
                    />
                    <p class="text-white text-base lg:text-base">Github</p>
                  </div>
                </a>
              </button>
            </section>

            <div
              v-if="props.portfolioData.features"
              class="transition-transform duration-300 flex w-5 h-5 mt-4 mb-2"
              :class="{ 'rotate-180': expanded }"
            >
              <img src="/assets/fullColourIcons/ArrowDownIcon.svg" alt="toggle" />
            </div>
          </div>
        </div>
      </template>

      <template #accordionContent>
        <div
          v-if="props.portfolioData.features"
          class="stack flex flex-col gap-6 mt-6 flex-wrap px-4 lg:px-8 lg:mb-4"
        >
          <ul
            v-for="(feature, index) in props.portfolioData.features"
            :key="index"
            class="text-sm text-left font-light lg:text-base"
          >
            <li class="font-light">{{ feature }}</li>
          </ul>
        </div>
      </template>
    </Accordion>
  </div>
</template>

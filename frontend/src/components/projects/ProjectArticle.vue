<script lang="ts" setup>
import { useDark } from '@vueuse/core'
import Accordion from '@/components/utils/Accordion.vue'

import type { WritableComputedRef } from 'vue'
import type { PortfolioPreview } from '@/types/portfolioTypes'

const isDark: WritableComputedRef<boolean> = useDark()

interface Props {
  portfolioData: PortfolioPreview
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="flex flex-col rounded-lg border accordion-light dark:accordion-dark accordion-light-hover-blue accordion-dark-hover-green p-3 lg:px-12 lg:pt-12 lg:pb-6"
  >
    <Accordion>
      <template #accordionHeader="{ toggle, expanded }">
        <div @click="toggle()">
          <div class="flex flex-col gap-2 items-center justify-center lg:grid lg:grid-cols-2">
            <section id="project-logo" class="flex items-center justify-center">
              <img
                :src="props.portfolioData.previewImgURI"
                v-if="!isDark"
                class="max-h-36 max-w-xs lg:max-h-60"
              />
              <img
                :src="props.portfolioData.previewImgURIDark"
                v-else
                class="max-h-36 max-w-xs lg:max-h-60"
              />
            </section>

            <section id="project-description" class="flex flex-col px-8">
              <div class="flex flex-col gap-4">
                <h1 id="project-title" class="text-4xl text-center font-bold lg:text-left">
                  {{ props.portfolioData.title }}
                </h1>
                <p id="project-description-text" class="text-lg text-left font-light lg:text-base">
                  {{ props.portfolioData.desc }}
                </p>
              </div>

              <div class="stack flex flex-row gap-4 mt-6 flex-wrap">
                <div
                  v-for="stackitem in props.portfolioData.stack"
                  :key="stackitem"
                  class="bg-slate-600 dark:bg-green-700 text-white text-lg py-2 px-4 rounded-lg lg:text-base"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="h-8 w-8"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>

                    <p class="text-white lg:text-base">Github</p>
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
          class="stack flex flex-col gap-6 mt-6 flex-wrap px-8 lg:mb-4"
        >
          <ul
            v-for="(feature, index) in props.portfolioData.features"
            :key="index"
            class="text-md text-left font-light lg:text-base"
          >
            <li class="font-light">{{ feature }}</li>
          </ul>
        </div>
      </template>
    </Accordion>
  </div>
</template>
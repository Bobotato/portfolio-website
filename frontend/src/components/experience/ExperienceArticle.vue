<script setup lang="ts">
import { useDark } from '@vueuse/core'
import Accordion from '@/components/utils/Accordion.vue'
import ImageGalleria from '@/components/utils/ImageGalleria.vue'

import type { WritableComputedRef } from 'vue'
import type { ExperienceItem } from '@/types/experienceTypes'

const isDark: WritableComputedRef<boolean> = useDark()

interface Props {
  experienceDetails: ExperienceItem
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="cursor-pointer flex flex-col rounded-lg border accordion-light dark:accordion-dark accordion-light-hover-blue accordion-dark-hover-green p-3 pb-8 lg:p-12 lg:pb-8"
  >
    <Accordion>
      <template #accordionHeader="{ toggle, expanded }">
        <div @click="toggle()" class="flex flex-col gap-10">
          <div
            class="exp-header flex flex-col gap-8 lg:gap-2 items-center justify-center lg:flex-row"
          >
            <section
              class="company-image flex items-center justify-center mt-8 lg:mt-0 lg:w-1/3 lg:mb-12"
            >
              <img
                :src="
                  isDark && props.experienceDetails.imgSrcDark
                    ? props.experienceDetails.imgSrcDark
                    : props.experienceDetails.imgSrc
                "
                class="object-contain h-48"
                :alt="props.experienceDetails.alt"
              />
            </section>

            <section class="exp-header-text flex flex-col px-4 lg:w-2/3 lg:px-8">
              <div class="flex flex-col gap-4">
                <h1 id="experience-title" class="text-3xl text-left font-bold">
                  {{ props.experienceDetails.title }}
                </h1>
                <h1
                  id="experience-position"
                  v-if="props.experienceDetails.position"
                  class="text-xl text-left font-medium lg:text-base"
                >
                  {{ props.experienceDetails.position }}
                </h1>
                <h1 id="experience-duration" class="text-lg text-left font-medium lg:text-base">
                  {{ props.experienceDetails.duration }}
                </h1>
                <p id="experience-description" class="text-sm text-left font-light lg:text-base">
                  {{ props.experienceDetails.shortdesc }}
                </p>
                <a
                  v-if="props.experienceDetails.link"
                  :href="props.experienceDetails.link"
                  target="_blank"
                  ><p class="text-lg font-medium lg:text-base hover:text-green-600">
                    Visit {{ props.experienceDetails.title }} >
                  </p></a
                >
              </div>
            </section>
          </div>

          <div
            v-if="props.experienceDetails.jobList && !expanded"
            class="transition-transform duration-300 flex items-center justify-center h-5"
            :class="{ 'rotate-180': expanded }"
          >
            <img src="/assets/fullColourIcons/ArrowDownIcon.svg" alt="toggle" />
          </div>
        </div>
      </template>

      <template #accordionContent="{ toggle, expanded }">
        <section
          class="exp-content flex flex-col mt-6 gap-6 px-4"
          v-if="props.experienceDetails.jobList"
        >
          <div class="flex flex-col">
            <div>What I did:</div>
            <div class="stack flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-6 flex-wrap lg:mb-4">
              <ul
                v-for="job in props.experienceDetails.jobList"
                :key="job"
                class="text-sm text-left font-light lg:text-base"
              >
                <li class="font-light">{{ job }}</li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col" v-if="props.experienceDetails.galleria">
            <div>Quick Preview:</div>
            <div class="flex items-start justify-center mt-6">
              <ImageGalleria :images="props.experienceDetails.galleria"></ImageGalleria>
            </div>
          </div>
        </section>

        <div
          v-if="props.experienceDetails.jobList"
          class="transition-transform duration-300 flex flex-col items-center justify-center h-5 mt-10 gap-2"
          @click="toggle"
        >
          
          <img
            src="/assets/fullColourIcons/ArrowDownIcon.svg"
            :class="{ 'rotate-180': expanded }"
            alt="toggle"
          />
        </div>
      </template>
    </Accordion>
  </div>
</template>

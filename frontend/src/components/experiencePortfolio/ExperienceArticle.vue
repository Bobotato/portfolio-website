<script setup lang="ts">
import { useDark } from '@vueuse/core'
import Accordion from '@/components/utils/Accordion.vue'

import type { WritableComputedRef } from 'vue'
import type { ExperiencePreview } from '@/types/experienceTypes'

const isDark: WritableComputedRef<boolean> = useDark()

interface Props {
  experienceDetails: ExperiencePreview
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="flex flex-col rounded-lg border accordion-light dark:accordion-dark accordion-light-hover-blue accordion-dark-hover-green p-3 lg:p-12"
  >
    <Accordion>
      <template #accordionHeader="{ toggle, expanded }">
        <div @click="toggle()">
          <div class="flex flex-col gap-2 items-center justify-center lg:grid lg:grid-cols-2">
            <section id="company-image" class="flex items-center justify-center mb-12">
              <img
                :src="props.experienceDetails.previewImgURI"
                v-if="!isDark"
                class="max-h-36 max-w-xs lg:max-h-60"
              />
              <img
                :src="props.experienceDetails.previewImgURIDark"
                v-else
                class="max-h-36 max-w-xs lg:max-h-60"
              />
            </section>

            <section class="flex flex-col px-8">
              <div class="flex flex-col gap-4">
                <h1 id="experience-title" class="text-4xl text-left font-bold">
                  {{ props.experienceDetails.title }}
                </h1>
                <h1
                  id="experience-position"
                  v-if="props.experienceDetails.position"
                  class="text-xl text-left font-medium lg:text-base"
                >
                  {{ props.experienceDetails.position }}
                </h1>
                <h1 id="experience-duration" class="text-xl text-left font-medium lg:text-base">
                  {{ props.experienceDetails.duration }}
                </h1>
                <p id="experience-description" class="text-lg text-left font-light lg:text-base">
                  {{ props.experienceDetails.shortdesc }}
                </p>
              </div>
            </section>

            <div
              class="transition-transform duration-300 flex items-center justify-center w-5 h-5"
              :class="{ 'rotate-180': expanded }"
            >
              <img src="assets/fullColourIcons/ArrowDownIcon.svg" alt="toggle" />
            </div>
          </div>
        </div>
      </template>

      <template #accordionContent>
        <div
          v-if="props.experienceDetails.jobList"
          class="stack flex flex-row gap-4 mt-6 flex-wrap"
        >
          <ul
            v-for="job in props.experienceDetails.jobList"
            :key="job"
            class="text-lg text-left font-light lg:text-base"
          >
            <li class="font-light">{{ job }}</li>
          </ul>
        </div>
      </template>
    </Accordion>
  </div>
</template>

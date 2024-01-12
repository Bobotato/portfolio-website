<script setup lang="ts">
import type { WritableComputedRef } from 'vue'
import { useDark } from '@vueuse/core'

import type { ExperiencePreview } from '@/utils/ExperienceData';

const isDark:WritableComputedRef<boolean> = useDark()

interface Props {
    experienceDetails: ExperiencePreview
} 

const props = defineProps<Props>()
</script>

<template>
<main class="flex flex-col rounded-lg p-3 dark:text-gray-300 hover:bg-blue-900 dark:hover:bg-green-700 hover:bg-opacity-20 dark:hover:bg-opacity-10 lg:p-12">

    <div class="flex flex-col gap-2 items-center justify-center lg:grid lg:grid-cols-2">

        <section id="company-image" class="flex items-center justify-center mb-12">
            <img :src="props.experienceDetails.previewImgURI" v-if="!isDark" class="max-h-36 max-w-xs lg:max-h-72" />
            <img :src="props.experienceDetails.previewImgURIDark" v-else class="max-h-36 max-w-xs lg:max-h-72" />
        </section>

        <section class="flex flex-col px-8">

            <div class="flex flex-col gap-4">

                <h1 id="experience-title" class="text-4xl text-left font-bold">{{ props.experienceDetails.title }}</h1>
                <h1 id="experience-position" v-if=props.experienceDetails.position class="text-xl text-left font-medium lg:text-2xl">{{ props.experienceDetails.position }}</h1>
                <h1 id="experience-duration" class="text-xl text-left font-medium lg:text-2xl">{{ props.experienceDetails.duration }}</h1>
                <p id="experience-description" class="text-lg text-left font-light lg:text-2xl">{{ props.experienceDetails.shortdesc }}</p>
                
            </div>

            <div v-if=props.experienceDetails.jobList class="stack flex flex-row gap-4 mt-6 flex-wrap">
                <div v-for="job in props.experienceDetails.jobList" :key="job" class="text-lg text-left font-light lg:text-2xl">
                    <li class="font-light">{{ job }}</li>
                </div>
            </div>
        </section>

    </div>
</main>
</template>
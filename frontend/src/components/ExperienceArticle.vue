<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

import type { ExperiencePreview } from '@/assets/text/ExperienceData';

interface Props {
    experienceDetails: ExperiencePreview
} 

const props = defineProps<Props>()

let isExpanded: Ref<boolean> = ref(false)

</script>

<template>
<main class="flex flex-col max-w-8xl rounded-lg p-3 hover:bg-green-700 hover:bg-opacity-10">
    <a :href=props.experienceDetails.link target="_blank" rel="noreferrer noopener">
        <div class="grid grid-cols-2 gap-4 items-center justify-center">

            <section class="project-image flex items-center justify-center">
                <img :src="props.experienceDetails.previewImgURI" class="aspect-auto max-h-72" />
            </section>

            <section class="project-description flex flex-col p-8">
                <div class="flex flex-col gap-4">
                    <h1 class="text-4xl text-left font-bold">{{ props.experienceDetails.title }}</h1>
                    <h1 v-if=props.experienceDetails.position class="text-3xl text-left">{{ props.experienceDetails.position }}</h1>
                    <h1 class="text-3xl text-left font-medium">{{ props.experienceDetails.duration }}</h1>
                    <p class="desc text-2xl text-left font-light">{{ props.experienceDetails.shortdesc }}</p>
                </div>

                <div v-if=props.experienceDetails.jobList class="stack flex flex-row gap-4 mt-6 flex-wrap">
                    <div v-for="job in props.experienceDetails.jobList" :key="job" class="text-2xl py-2 px-4 rounded-lg">
                        <li>{{ job }}</li>
                    </div>
                </div>
            </section>

        </div>
    </a>
</main>
</template>
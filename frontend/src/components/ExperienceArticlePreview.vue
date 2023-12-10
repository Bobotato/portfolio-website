<script setup lang="ts">
import type { ExperiencePreview } from '@/assets/text/ExperienceData';

interface Props {
    experiencePreviewDetails: ExperiencePreview
} 

const props = defineProps<Props>()

</script>

<template>
<main class="flex flex-col max-w-8xl rounded-lg p-3 hover:bg-green-700 hover:bg-opacity-10">
    <a :href=props.experiencePreviewDetails.link target="_blank" rel="noreferrer noopener">
        <div class="grid grid-cols-2 gap-4 items-center justify-center">
            <section class="project-images flex items-center justify-center">
                <img :src="props.experiencePreviewDetails.previewImgURI" class="aspect-auto max-h-72" />
            </section>

            <section class="project-description flex flex-col p-8">
                <div class="flex flex-col gap-4">
                    <h1 class="text-3xl text-left font-bold">{{ props.experiencePreviewDetails.title }}</h1>
                    <p class="desc text-2xl text-left">{{ props.experiencePreviewDetails.desc }}</p>
                </div>

            </section>
        </div>
    </a>
</main>
</template>
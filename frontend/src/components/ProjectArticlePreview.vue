<script setup lang="ts">
import type { PortfolioPreview } from '@/assets/text/PortfolioData';

interface Props {
    portfolioPreviewDetails: PortfolioPreview
} 

const props = defineProps<Props>()

</script>

<template>
<main class="flex flex-col max-w-6xl rounded-lg p-3 hover:bg-green-700 hover:bg-opacity-10">
    <a :href=props.portfolioPreviewDetails.github target="_blank" rel="noreferrer noopener">
        <div class="grid grid-cols-2 gap-4 items-center justify-center">
            <section class="project-images flex items-center justify-center">
                <img :src="props.portfolioPreviewDetails.previewImgURI" class="aspect-auto max-h-72" />
            </section>

            <section class="project-description flex flex-col p-8">
                <div class="flex flex-col gap-4">
                    <h1 class="text-4xl text-left font-bold">{{ props.portfolioPreviewDetails.title }}</h1>
                    <p class="desc text-2xl text-left font-light">{{ props.portfolioPreviewDetails.desc }}</p>
                </div>

                <div class="stack flex flex-row gap-4 mt-6 flex-wrap">
                    <div v-for="stackitem in props.portfolioPreviewDetails.stack" :key="stackitem" class="bg-green-700 text-2xl py-2 px-4 rounded-lg">
                        {{ stackitem }}
                    </div>
                </div>
            </section>
        </div>
    </a>
</main>
</template>
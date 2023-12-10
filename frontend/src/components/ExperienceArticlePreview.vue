<script setup lang="ts">
interface Props {
    title?: string
    desc?: string
    previewImgURI?: string
    techList?: Array<string>
} 

const props = defineProps<Props>()

interface ExperiencePreview {
    title: string
    desc: string
    previewImgURI: string
    stack: Array<string>
}

let example: ExperiencePreview = {
    title: "Weather Application",
    desc: "This project was built to learn about promises, APIs and fetching resources, specifically revolving around the Fetch API and async/await.",
    previewImgURI: "@/assets/BWIcon/GithubIcon.svg",
    stack: ['Tailwind', 'Vue', 'SQL']

}   

</script>

<template>
<main class="flex flex-col max-w-6xl rounded-lg p-3 hover:bg-green-700 hover:bg-opacity-10">
        <div class="grid grid-cols-2 gap-4 items-center justify-center">
            <section class="project-images">
                <img src="../assets/fullColourIcons/PythonIcon.png" class="h-48 w-48" />
            </section>

            <section class="project-description flex flex-col p-8">
                <div class="flex flex-col gap-4">
                    <h1 class="text-2xl font-bold">{{ example.title }}</h1>
                    <p class="desc text-2xl">{{ example.desc }}</p>
                </div>

                <div class="stack flex flex-row gap-4 mt-6 ">
                    <div v-for="stackitem in example.stack" :key="stackitem" class="bg-green-700 text-2xl py-2 px-4 rounded-lg">
                        {{ stackitem }}
                    </div>
                </div>
            </section>
        </div>
</main>
</template>
<script setup lang="ts">
interface Props {
    title?: string
} 

const props = defineProps<Props>()
</script>

<template>
<main class="w-96 h-48 border-2 rounded-md p-3">
    <div class="flex flex-col">
        <h1 class="text-2xl text-center">Early Web Dev</h1>

        <div></div>
    </div>
</main>
</template>
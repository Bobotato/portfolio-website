<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSeoMeta } from 'unhead'

useSeoMeta({
  title: "Alexander's Portfolio",
  description: "Alexander's portfolio website"
})
</script>

<template>
  <RouterView class="min-h-screen bg-zinc-100 dark:bg-neutral-950"></RouterView>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>

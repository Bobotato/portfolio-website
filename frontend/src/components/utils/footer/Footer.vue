<script lang="ts" setup>
import ContactLinkList from '@/components/utils/footer/ContactLinkList.vue'
import ThemeToggle from '@/components/utils/footer/ThemeToggle.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <footer class="flex flex-col justify-center items-center p-4 lg:p-4">
    <hr
      id="divider-footer"
      class="mb-4 w-4/6 border-2 border-slate-800 dark:border-green-900 lg:mb-2"
    />

    <div
      id="footer-content"
      class="flex flex-col-reverse mb-4 justify-center items-center lg:gap-2 lg:flex-row lg:mb-0"
    >
      <span
        id="footer-note"
        class="block text-sm font-light text-center text-slate-800 dark:text-gray-300"
        >© 2024 Alexander Bhojwani.</span
      >
      <span
        id="footer-note"
        class="block text-sm font-light text-center text-slate-800 dark:text-gray-300"
        >A portfolio website made with
        <a href="https://vuejs.org/" class="hover:text-green-700">Vue</a>.</span
      >

      <ThemeToggle></ThemeToggle>
    </div>

    <ContactLinkList v-if="route.path !== '/'"></ContactLinkList>
  </footer>
</template>

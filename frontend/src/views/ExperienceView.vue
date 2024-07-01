<script setup lang="ts">
import ExperiencePage from '@/components/experiencePortfolio/ExperiencePage.vue'
import NavBar from '@/components/utils/navbar/NavBar.vue'
import Footer from '@/components/utils/footer/Footer.vue'

import { NavItems } from '@/data/NavItems'
</script>

<template>
  <div class="flex flex-col mx-auto items-center justify-center w-screen">
    <NavBar :nav-items="NavItems"></NavBar>
    <ExperiencePage></ExperiencePage>
    <Footer></Footer>
  </div>
</template>

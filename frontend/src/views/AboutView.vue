<script setup lang="ts">
import AboutPage from '@/components/about/AboutPage.vue'
import Footer from '@/components/utils/footer/Footer.vue'
import NavBar from '@/components/utils/navbar/NavBar.vue'

import { NavItems } from '@/data/NavItems'
</script>

<template>
  <div class="flex flex-col mx-auto items-center justify-center w-screen">
    <NavBar :nav-items="NavItems"></NavBar>
    <AboutPage></AboutPage>
    <Footer></Footer>
  </div>
</template>

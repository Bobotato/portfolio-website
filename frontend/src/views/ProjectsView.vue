<script setup lang="ts">
import ProjectsPage from '@/components/projectsPortfolio/ProjectsPage.vue'
import Footer from '@/components/utils/footer/Footer.vue'
import NavBar from '@/components/utils/navbar/NavBar.vue'

import { NavItems } from '@/data/NavItems'
</script>

<template>
  <div class="flex flex-col mx-auto items-center justify-center w-screen">
    <NavBar :nav-items="NavItems"></NavBar>
    <ProjectsPage></ProjectsPage>
    <Footer></Footer>
  </div>
</template>

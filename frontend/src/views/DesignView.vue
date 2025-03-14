<script setup lang="ts">
import DesignPage from '@/components/design/DesignPage.vue'
import NavBar from '@/components/utils/navbar/NavBar.vue'
import NavBarMobile from '@/components/utils/navbar/NavBarMobile.vue'
import Footer from '@/components/utils/footer/Footer.vue'

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

import { NavItems } from '@/data/NavItems'

const breakpoints = useBreakpoints(breakpointsTailwind)
const lgAndLarger = breakpoints.greaterOrEqual('lg')
const lgAndSmaller = breakpoints.smallerOrEqual('lg')
</script>

<template>
  <div class="flex flex-col mx-auto items-center w-screen">
    <NavBar v-if="lgAndLarger" :nav-items="NavItems"></NavBar>
    <NavBarMobile v-if="lgAndSmaller" :nav-items="NavItems"></NavBarMobile>
    <DesignPage></DesignPage>
    <Footer class="mt-24"></Footer>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'

import type { RouteRecordName } from 'vue-router'
import type { NavItem } from '@/types/navTypes'
import { ref } from 'vue'

const props = defineProps<{
  navItems: NavItem[]
}>()

const activeTab = ref(props.navItems.find((item) => item.name === getRoute())?.label)

function getRoute(): RouteRecordName | null | undefined {
  return useRoute().name
}

function isCurrentRoute(routeName: string): boolean {
  while (routeName.charAt(0) === '/') {
    routeName = routeName.substring(1)
  }
  return getRoute() === routeName
}
</script>

<template>
  <nav
    id="nav-menu"
    class="flex flex-col mt-10 text-slate-800 text-lg text-center lg:text-xl lg:gap-2 dark:text-gray-300"
  >
    <RouterLink
      to="/"
      id="page-name"
      class="shine text-slate-800 font-bold text-5xl tracking-tighter text-center mt-8 mb-4 p-2 lg:text-5xl capitalize lg:mt-4 lg:mb-2 dark:text-green-700"
      >{{ activeTab }}</RouterLink
    >

    <div class="flex flex-row">
      <div v-for="item in props.navItems" class="flex flex-row">
        <RouterLink
          :key="item.name"
          :to="item.route"
          class="hover:text-green-700 mx-10"
          :class="isCurrentRoute(item.name) ? 'text-green-700' : null"
          >{{ item.label }}</RouterLink
        >
        <div>
          <span v-if="item.label !== props.navItems[props.navItems.length - 1].label"> | </span>
        </div>
      </div>
    </div>
  </nav>
</template>
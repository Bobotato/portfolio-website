<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'

import type { Ref, ComputedRef } from 'vue'
import type { RouteRecordName } from 'vue-router'
import type { NavItem } from '@/types/navTypes'

const props = defineProps<{
  navItems: NavItem[]
}>()

const activeTab: Ref<string | undefined> = ref(
  props.navItems.find((item) => item.name === getRoute())?.label
)

const truncTabs: ComputedRef<NavItem[]> = computed(() => {
  return props.navItems.filter((item) => item.label !== activeTab.value)
})

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
    class="flex flex-col text-slate-800 text-lg text-center max-w-sm dark:text-gray-300"
  >
    <h1
      id="page-name"
      class="shine text-slate-800 font-bold text-5xl tracking-tighter text-center mt-8 mb-4 p-2 capitalize dark:text-green-700"
    >
      {{ activeTab }}
    </h1>

    <div class="flex flex-row">
      <div v-for="item in truncTabs" class="flex flex-row">
        <RouterLink
          :key="item.name"
          :to="item.route"
          class="hover:text-green-700 mx-4"
          :class="isCurrentRoute(item.name) ? 'text-green-700' : null"
          >{{ item.label }}</RouterLink
        >
        <div>
          <span v-if="item.label !== truncTabs[truncTabs.length - 1].label"> | </span>
        </div>
      </div>
    </div>
  </nav>
</template>

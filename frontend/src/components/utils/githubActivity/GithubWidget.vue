<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useGithubActivityWidget } from '@/composables/githubActivity'

import ActivityCalendarWidget from 'activity-calendar-widget/vue'

import type { Ref } from 'vue'

let { activityData, updateActivityData } = useGithubActivityWidget()

let isLoading: Ref<boolean> = ref(true)

onMounted(async () => {
  isLoading.value = true
  activityData.value = await updateActivityData()
  isLoading.value = false
})
</script>

<template>
  <ActivityCalendarWidget :daysToRender="365" :data="activityData" :showSummary="true" />
  <p v-if="isLoading">Is loading...</p>
</template>

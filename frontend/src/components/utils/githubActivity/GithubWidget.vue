<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useGithubActivityWidget } from '@/composables/githubActivity'
import { useDark } from '@vueuse/core'

import ActivityCalendarWidget from 'activity-calendar-widget/vue'
import LoadingSpinner from '@/components/utils/LoadingSpinner.vue'

import type { Ref, WritableComputedRef } from 'vue'

interface Props {
  daysToRender: number
}

const props = defineProps<Props>()

let { activityData, updateActivityData } = useGithubActivityWidget()

const isDark: WritableComputedRef<boolean> = useDark()

let isLoading: Ref<boolean> = ref(true)

onMounted(async () => {
  isLoading.value = true
  activityData.value = await updateActivityData()
  isLoading.value = false
})
</script>

<template>
  <ActivityCalendarWidget
    v-if="!isLoading"
    :daysToRender="props.daysToRender"
    :data="activityData"
    :showSummary="true"
    :levelColorMode="isDark ? 'dark' : 'light'"
    :showWeekdayLabels="false"
  />
  <LoadingSpinner v-if="isLoading" />
</template>

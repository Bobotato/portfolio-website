<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useGithubActivityWidget } from '@/composables/githubActivity'
import { useDark } from '@vueuse/core'

import ActivityCalendarWidget from 'activity-calendar-widget/vue'
import LoadingSpinner from '@/components/utils/animations/LoadingSpinner.vue'

import type { Ref, WritableComputedRef } from 'vue'

interface Props {
  daysToRender: number
}

const props = defineProps<Props>()

let { activityData, updateActivityData } = useGithubActivityWidget()

const isDark: WritableComputedRef<boolean> = useDark()

let isLoading: Ref<boolean> = ref(true)
const isError: Ref<boolean> = ref(false)

onMounted(async () => {
  isLoading.value = true
  try {
    activityData.value = await updateActivityData()
  } catch (error: any) {
    isError.value = true
  }
  isLoading.value = false
})
</script>

<template>
  <ActivityCalendarWidget
    v-if="!isLoading && !isError"
    :daysToRender="props.daysToRender"
    :data="activityData"
    :showSummary="true"
    :levelColorMode="isDark ? 'dark' : 'light'"
    :showWeekdayLabels="false"
  />
  <LoadingSpinner v-if="isLoading && !isError" />
  <p text-left text-sm font-light lg:text-lg v-if="isError">
    An error has occured loading contributions.
  </p>
</template>

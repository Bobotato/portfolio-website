<script lang="ts" setup>
import { ref, Ref, onMounted } from 'vue'

import ActivityCalendarWidget from 'activity-calendar-widget/vue'

const githubData: Ref<null> = ref(null)


</script>

<template>
  <ActivityCalendarWidget :daysToRender="365" />
</template>

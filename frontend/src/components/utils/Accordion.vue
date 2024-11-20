<script setup lang="ts">
import { ref } from 'vue'
import TransitionExpand from '@/components/utils/TransitionExpand.vue'

import type { Ref } from 'vue'

const isExpanded: Ref<boolean> = ref(false)
const toggle = useToggle

function useToggle(): void {
  isExpanded.value = !isExpanded.value
}
</script>
<template>
  <div class="accordion">
    <div class="accordion-header w-full">
      <slot name="accordionHeader" :toggle="toggle" :expanded="isExpanded" />
    </div>
    <TransitionExpand>
      <div v-if="isExpanded" class="accordion-body">
        <slot name="accordionContent" :toggle="toggle" :expanded="isExpanded" />
      </div>
    </TransitionExpand>
  </div>
</template>

<style scoped lang="scss">
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  transition: height 0.3s ease-in;
  overflow: hidden;
}
</style>

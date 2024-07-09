<script lang="ts" setup>
import { useDark } from '@vueuse/core'

import type { WritableComputedRef } from 'vue';
import type { ProficiencyItem } from '@/types/proficiencyTypes'

const isDark: WritableComputedRef<boolean> = useDark()

interface Props {
  proficencyItem: ProficiencyItem
}

const props = defineProps<Props>()
</script>

<template>
  <a
    :href="props.proficencyItem.link"
    target="_blank"
    class="flex flex-col place-items-center justify-center transform transition duration-200 hover:scale-110"
  >
    <img :src="isDark && props.proficencyItem.imgSrcDark ? props.proficencyItem.imgSrcDark : props.proficencyItem.imgSrc" class="object-contain h-16 w-16 lg:h-20 lg:w-20" />
    <p>{{ props.proficencyItem.name }}</p>
  </a>
</template>

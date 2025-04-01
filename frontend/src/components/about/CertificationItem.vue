<script lang="ts" setup>
import type { CertificationItem } from '@/types/proficiencyTypes'

interface Props {
  certificationItem: CertificationItem
}

const props = defineProps<Props>()
</script>

<template>
  <a
    :href="props.certificationItem.link"
    target="_blank"
    class="flex flex-col place-items-center justify-center transform transition duration-200 hover:scale-110"
  >
    <img :src="props.certificationItem.imgSrc" class="object-contain h-16 w-16 lg:h-20 lg:w-20" :alt="props.certificationItem.alt"/>
    <p>{{ props.certificationItem.shortName }}</p>
  </a>
</template>

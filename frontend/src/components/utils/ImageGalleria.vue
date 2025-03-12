<script setup lang="ts">
import { ref } from 'vue'
import Galleria from 'primevue/galleria'

import type { GalleriaItem } from '@/types/galleriaTypes'

interface GalleriaProps {
  images: GalleriaItem[]
}

const props = defineProps<GalleriaProps>()

const activeIndex = ref(0)
</script>

<template>
  <Galleria
    :value="props.images"
    :numVisible="5"
    :circular="true"
    containerStyle="max-width: 800px"
    :showItemNavigators="true"
    :showThumbnails="false"
    :showItemNavigatorsOnHover="true"
    :showIndicators="true"
    :pt="{
      root: '!border-0 !rounded-none',
      item: '!border !border-slate-700',
      indicatorList: '!flex !justify-center !gap-4',
      indicatorButton: '!h-[8px] !w-[50px] !rounded-lg',
      prevButton:
        '!rounded-none !h-[100px] !bg-white !bg-opacity-10 hover:!bg-white hover:!bg-opacity-50 !m-0',
      nextButton:
        '!rounded-none !h-[100px] !bg-white !bg-opacity-10 hover:!bg-white hover:!bg-opacity-50 !m-0',
      caption: '!h-[50px] !p-0 !flex !justify-center !items-center'
    }"
  >
    <template #item="slotProps">
      <img
        :src="slotProps.item.itemImageSrc"
        :alt="slotProps.item.alt"
        style="width: 100%; display: block"
      />
    </template>

    <template #caption="slotProps">
      <div class="text-sm text-left font-light lg:text-base absolute top-[70px]">{{ slotProps.item.alt }}</div>
    </template>
  </Galleria>
</template>

<style>
.p-galleria-caption {
  background: none !important;
}

.p-galleria-indicator-list {
  margin-top: 40px !important;
}
.p-galleria-indicator-active .p-galleria-indicator-button {
  background-color: rgb(22 163 74) !important;
}
</style>

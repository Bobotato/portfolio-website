<script lang="ts">
import Galleria from 'primevue/galleria'

import type { CarouselItem } from '@/types/carouselTypes'

interface Props {
  images: CarouselItem[]
}

const props = defineProps<Props>()
</script>

<template>
  <Galleria
    :value="props.images"
    :responsiveOptions="responsiveOptions"
    :numVisible="5"
    :circular="true"
    containerStyle="max-width: 640px"
    :showItemNavigators="true"
    :showThumbnails="false"
    :showItemNavigatorsOnHover="true"
    :showIndicators="true"
  >
    <template #item="slotProps">
      <img
        :src="slotProps.item.itemImageSrc"
        :alt="slotProps.item.alt"
        style="width: 100%; display: block"
      />
    </template>
    <template #thumbnail="slotProps">
      <img
        :src="slotProps.item.thumbnailImageSrc"
        :alt="slotProps.item.alt"
        style="display: block"
      />
    </template>
  </Galleria>
</template>

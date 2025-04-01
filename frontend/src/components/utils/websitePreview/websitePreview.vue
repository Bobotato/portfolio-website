<script setup lang="ts">
import ImageGalleria from '@/components/utils/websitePreview/ImageGalleria.vue'

import type { GalleriaItem } from '@/types/galleriaTypes'

interface WebsitePreviewProps {
  images: GalleriaItem[]
}

const props = defineProps<WebsitePreviewProps>()
</script>

<template>
  <div class="flex flex-col">
    <div>Quick Preview:</div>
    <div class="flex items-start justify-center mt-6">
      <ImageGalleria :images="props.images"></ImageGalleria>
    </div>
  </div>
</template>

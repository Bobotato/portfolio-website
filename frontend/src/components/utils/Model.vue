<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  initCamera,
  initControls,
  initLight,
  initRenderer,
  loadModel,
  REXURL
} from '@/helpers/model'
import { Scene } from 'three'
import LoadingSpinner from '@/components/utils/LoadingSpinner.vue'

import type { Ref } from 'vue'

const isLoading: Ref<boolean> = ref(true)
const rex3d = ref<HTMLCanvasElement | null>(null)

const scene = new Scene()

const { camera } = initCamera(1, 2, 10)
scene.add(camera)

const { pointLight } = initLight()
scene.add(pointLight)

onMounted(async () => {
  const rex = await loadModel(REXURL)
  if (rex) {
    scene.add(rex)
    isLoading.value = false
  }

  const { renderer } = initRenderer(rex3d)
  const { controls } = initControls(camera, renderer.domElement)

  function animate() {
    if (rex) {
      rex.rotation.y += 0.01
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
      controls.update()
    }
  }

  animate()
})
</script>

<template>
  <div v-if="isLoading" class="flex w-[400px] h-[400px] items-center justify-center">
    <LoadingSpinner></LoadingSpinner>
  </div>
  <canvas v-show="!isLoading" ref="rex3d"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { Scene, PerspectiveCamera, WebGLRenderer, PointLight, Box3 } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import LoadingSpinner from '@/components/LoadingSpinner.vue'

import { loadGLTFModel } from '@/utils/modelLoader'


let isLoading = ref(true)

const rex3d = ref<HTMLCanvasElement | null>(null)

const scene = new Scene();

function createCamera() {
  const camera = new PerspectiveCamera(20, 1, 0.1, 1000);
  camera.position.set(1, 2, 10);
}

async function loadRex() {
  const renderer = new WebGLRenderer({
    canvas: rex3d.value as unknown as HTMLCanvasElement,
    antialias: true,
    });

  let rex: any;

  const gltf = await loadGLTFModel(scene, '/src/assets/3DModels/rexModel.gltf');

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor( 0xffffff, 0);

  renderer.render( scene, camera );

  const pointLight = new PointLight(0xffffff, 50);
  pointLight.position.set(3,3,3);
  scene.add(pointLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableZoom = false;

  function animate() {
    if(rex)
      rex.rotation.y += 0.01
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  }
  
  controls.update;
  isLoading.value = false

  animate()
}

onMounted(() => {
  createCamera()
  loadRex()
})
</script>

<template>
<LoadingSpinner class="absolute left-64 top-48 z-10" v-if="isLoading"></LoadingSpinner>
<canvas ref="rex3d"></canvas>
</template>
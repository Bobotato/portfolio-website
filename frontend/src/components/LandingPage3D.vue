<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';

import { Scene, PerspectiveCamera, WebGLRenderer, PointLight, AmbientLight } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import LoadingSpinner from '@/components/LoadingSpinner.vue'

// import { loadGLTFModel } from '@/utils/modelLoader'

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// const rex3d = ref<HTMLCanvasElement | null>(null)

// const scene = new Scene();

// function createCamera() {
//   const camera = new PerspectiveCamera(20, 1, 0.1, 1000);
//   camera.position.set(1, 2, 10);
//   return camera
// }

// async function loadRex() {
//   const renderer = new WebGLRenderer({
//     canvas: rex3d.value as unknown as HTMLCanvasElement,
//     antialias: true,
//     });

//   let camera = createCamera()

//   let rex = await loadGLTFModel(scene, '/src/assets/3DModels/rexModel.gltf');

//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setClearColor( 0xffffff, 0);

//   renderer.render( scene, camera );

//   const pointLight = new PointLight(0xffffff, 50);
//   pointLight.position.set(3,3,3);
//   scene.add(pointLight);

//   const controls = new OrbitControls(camera, renderer.domElement);
//   controls.enablePan = false;
//   controls.enableZoom = false;

//   function animate() {
//     // if(model)
//     //   model.rotation.y += 0.01
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
//   }
  
//   controls.update;
//   isLoading.value = false

//   animate()
// }

// onMounted(() => {
//   createCamera()
//   loadRex()
// })

let isLoading = ref(true)

const rex3d = ref<HTMLCanvasElement | null>(null)

const scene = new Scene();

function lightSetUp() {
  const pointLight = new PointLight(0xffffff, 50);
  pointLight.position.set(3,3,3);

  return { pointLight }
}

function cameraSetUp(x: number, y: number, z: number) {
  const camera = new PerspectiveCamera(20, 1, 0.1, 1000);
  camera.position.set(x,y,z);

  return { camera }
}

function rendererSetUp(canvas: Ref<HTMLCanvasElement | null>) {
  const renderer = new WebGLRenderer({
    canvas: canvas.value as unknown as HTMLCanvasElement,
    antialias: true,
    });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor( 0xffffff, 0);
  renderer.setSize(400,400);

  return {renderer}
}

function controlsSetUp(camera: PerspectiveCamera, domElement: HTMLElement) {
  const controls = new OrbitControls(camera, domElement);
  controls.enablePan = false;
  controls.enableZoom = false;

  return { controls }
}

onMounted(() => {
    
    let rex: any;

    const loader = new GLTFLoader();

    loader.load('/assets/3DModels/rexModel.gltf', function(gltf) {
      const model = gltf.scene;
      scene.add(model);
      rex = model;
      model.position.setY(-0.15);
      isLoading.value = false;
      })

    const { camera } = cameraSetUp(1,2,10);
    
    const { renderer } = rendererSetUp(rex3d)

    renderer.render( scene, camera );

    const { pointLight } = lightSetUp()
    scene.add(pointLight);

    const { controls } = controlsSetUp(camera, renderer.domElement)

    function animate() {
      if(rex)
        rex.rotation.y += 0.01
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    controls.update;
    }

    animate()
})
</script>

<template>
<div v-if=isLoading class="flex w-[400px] h-[400px] items-center justify-center">
  <LoadingSpinner></LoadingSpinner>
</div>
  <canvas v-show="!isLoading" ref="rex3d"></canvas>
</template>
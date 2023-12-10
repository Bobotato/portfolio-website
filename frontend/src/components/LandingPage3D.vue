<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { Scene, PerspectiveCamera, WebGLRenderer, PointLight, Group } from 'three';
import type { Object3DEventMap } from 'three'

import LoadingSpinner from '@/components/LoadingSpinner.vue'

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let isLoading = ref(true)

// const rex3d = ref<HTMLCanvasElement | null>(null)

// function loadModel(scene: Scene) {
//     const loader = new GLTFLoader();

//     loader.load('/src/assets/3DModels/rexModel.gltf', 
//     function( gltf ) {
//       const model = gltf.scene
//       scene.add(model);
//       model.position.setY(-0.1);
//       return model
//     },
//     function ( xhr ) {
//       console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
//     },
//     function(error: any) {
//       console.log("Model failed to load")
//       console.log(error)
//     }
//     );
//   }  

// onMounted(() => {
//   const scene = new Scene();
//   const camera = new PerspectiveCamera(20, 1, 0.1, 1000);
//   const renderer = new WebGLRenderer({
//     canvas: rex3d.value as unknown as HTMLCanvasElement,
//     antialias: true,
//     });

//   let rex = loadModel(scene)

//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setClearColor( 0xffffff, 0);
//   renderer.setSize(600,600);

//   camera.position.setZ(10);
//   camera.position.setY(2);
//   camera.position.setX(1);

//   renderer.render( scene, camera );

//   const pointLight = new PointLight(0xffffff, 50);
//   pointLight.position.set(3,3,3);
//   scene.add(pointLight);

//   const controls = new OrbitControls(camera, renderer.domElement);
//   controls.enablePan = false;
//   controls.enableZoom = false;

//     function animateInfiniteRotate(model: any) {
//       if(model)
//         model.rotation.y += 0.01
//     requestAnimationFrame(animateInfiniteRotate);
//     renderer.render(scene, camera);

//     controls.update;
//     }

//   animateInfiniteRotate(rex)
// })

const rex3d = ref<HTMLCanvasElement | null>(null)

const loader = new GLTFLoader();

const scene = new Scene();

const camera = new PerspectiveCamera(20, 1, 0.1, 1000);

onMounted(() => {

    const renderer = new WebGLRenderer({
    canvas: rex3d.value as unknown as HTMLCanvasElement,
    antialias: true,
    });

    let rex;

    loader.load('/src/assets/3DModels/rexModel.gltf', function(gltf) {
    const model = gltf.scene;
    scene.add(model);
    model.position.setY(-0.1);
    rex = model;
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor( 0xffffff, 0);
    renderer.setSize(600,600);
    camera.position.setZ(10);
    camera.position.setY(2);
    camera.position.setX(1);

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

    controls.update;
    }

    isLoading.value = false

    animate()

})
</script>

<template>
<LoadingSpinner class="absolute left-64 top-48 z-10" v-if="isLoading"></LoadingSpinner>
<canvas ref="rex3d"></canvas>
</template>
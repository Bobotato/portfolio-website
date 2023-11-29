<script setup lang="ts">
import { Scene, PerspectiveCamera, WebGLRenderer, PointLight, GridHelper } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { ref, onMounted } from 'vue';

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
    rex = model;
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor( 0xffffff, 0);
    renderer.setSize(500,500);
    camera.position.setZ(10);
    camera.position.setY(3);
    camera.position.setX(3);

    renderer.render( scene, camera );

    const pointLight = new PointLight(0xffffff, 50);
    pointLight.position.set(3,3,3);
    scene.add(pointLight);

    const controls = new OrbitControls(camera, renderer.domElement);

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
<canvas ref="rex3d"></canvas>
</template>
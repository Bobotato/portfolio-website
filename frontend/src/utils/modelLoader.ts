import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import type { Scene, Mesh } from 'three';

export async function loadGLTFModel(scene: Scene, modelPath: string) {
    const loader = new GLTFLoader();

    loader.load(modelPath, function(gltf) {
        let model;

        gltf.scene.traverse(function (child) {
            if ((child as Mesh).isMesh) {
                const m = child as Mesh
                m.receiveShadow = true
                m.castShadow = true
            }
        })
        scene.add(gltf.scene); 
        }, 

        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
          
        function(error: any) {
            console.log("Model failed to load")
            console.log(error)
        }
        )
   
};



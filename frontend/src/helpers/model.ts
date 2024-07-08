import { PerspectiveCamera, WebGLRenderer, PointLight, Scene } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import type { Ref } from 'vue'

const REXURL = '/assets/3DModels/rexModel.gltf'

async function loadModel(url: string) {
  const loader = new GLTFLoader()
  const model = await loader.loadAsync(url)
  return model.scene
}

function initLight() {
    const pointLight = new PointLight(0xffffff, 50)
    pointLight.position.set(3, 3, 3)
  
    return { pointLight }
  }
  
  function initCamera(x: number, y: number, z: number) {
    const camera = new PerspectiveCamera(20, 1, 0.1, 1000)
    camera.position.set(x, y, z)
  
    return { camera }
  }
  
  function initRenderer(canvas: Ref<HTMLCanvasElement | null>) {
    const renderer = new WebGLRenderer({
      canvas: canvas.value as unknown as HTMLCanvasElement,
      antialias: true
    })
  
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0xffffff, 0)
    renderer.setSize(400, 400)
  
    return { renderer }
  }
  
  function initControls(camera: PerspectiveCamera, domElement: HTMLElement) {
    const controls = new OrbitControls(camera, domElement)
    controls.enablePan = false
    controls.enableZoom = false
  
    return { controls }
  }

  export { initCamera, initControls, initLight, initRenderer, loadModel, REXURL }
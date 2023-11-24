<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex flex-col items-center justify-center">
    <RouterLink to="/" class="shine text-green-700 font-bold text-8xl tracking-tighter m-8"
      >About Me</RouterLink
    >

    <nav class="flex flex-row gap-8 text-xl">
      <div class="text-green-700">About</div>
      | <RouterLink to="/projects" class="hover:text-green-700">Projects</RouterLink> |
      <RouterLink to="/work-experience" class="hover:text-green-700">Work Experience</RouterLink> |
      <RouterLink to="/contact" class="hover:text-green-700">Contact</RouterLink>
    </nav>
  </header>

  <main class="flex flex-col items-center justify-center">
    <div class="flex flex-col m-8 gap-8 items-center text-center text-xl max-w-6xl">
      <p>
        My name is Alexander Bhojwani, I'm 29 this year and I'm a self-trained full stack software
        engineer.
      </p>
      <p>
        I graduated from Singapore Management University with a BSc of Economics (hons) and I am
        currently working in a startup I cofounded called
        <a href="https://www.smilepepper.com/" class="hover:text-blue-700">SmilePepper</a>.
      </p>
    </div>

    <div class="flex flex-col gap-y-5">
      <h1 class="font-bold text-center text-3xl">My Languages & Frameworks</h1>
      <div class="flex flex-row place-items-center justify-center">
        <div class="flex flex-col place-items-center justify-center">
          <img src="../assets/PythonIcon.png" class="h-24 w-24" />
          <p>Python</p>
        </div>

        <div class="flex flex-col text-center place-items-center justify-center">
          <img src="../assets/JavascriptIcon.png" class="h-24 w-24" />
          <p>Javascript</p>
        </div>

        <div class="flex flex-col place-items-center justify-center">
          <img src="../assets/TypescriptIcon.png" class="h-24 w-24" />
          <p>Typescript</p>
        </div>

        <div class="flex flex-col place-items-center justify-center ml-2">
          <img src="../assets/VueIcon.svg" class="h-20 w-20" />
          <p>Vue</p>
        </div>
      </div>

      <h1 class="font-bold text-center text-3xl">My Technologies</h1>
      <div class="flex flex-row place-items-center justify-center">
        <div class="flex flex-col place-items-center justify-center">
          <img src="../assets/awsIcon.png" class="h-24 w-24" />
          <p>AWS</p>
        </div>

        <div class="flex flex-col text-center place-items-center justify-center">
          <img src="../assets/DOIcon.png" class="h-24 w-24" />
          <p>DigitalOcean</p>
        </div>

        <div class="flex flex-col place-items-center justify-center">
          <img src="../assets/AdobeCCIcon.png" class="h-24 w-24" />
          <p>Adobe CC</p>
        </div>
      </div>
    </div>
  </main>

  <footer class="flex flex-row justify-center">
    <p>Built in 2023 using</p>
    <img src="../assets/VueIcon.svg" class="ml-1 h-4 w-4" />
    <p>Vue.</p>
  </footer>
</template>

<style scoped>
.shine {
  -webkit-mask-image: linear-gradient(
    -75deg,
    rgba(255, 255, 255, 0.6) 30%,
    #f8f8f8 50%,
    rgba(255, 255, 255, 0.6) 70%
  );
  -webkit-mask-size: 300%;
  animation: shine-effect 3s linear infinite;
}

@keyframes shine-effect {
  from {
    -webkit-mask-position: 150%;
  }
  to {
    -webkit-mask-position: -50%;
  }
}
</style>

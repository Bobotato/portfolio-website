<script lang="ts" setup></script>

<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-row items-center -rotate-[60deg]">
      <div class="flex flex-col gap-8 lg:gap-20">
        <img src="/assets/BWIcons/Foot.svg" class="stomp delay6 -rotate-12 invert dark:invert-0" />
        <img src="/assets/BWIcons/Foot.svg" class="stomp delay4 -rotate-12 invert dark:invert-0" />
        <img src="/assets/BWIcons/Foot.svg" class="stomp delay2 -rotate-12 invert dark:invert-0" />
      </div>

      <div class="flex flex-col gap-8 relative lg:gap-24">
        <img src="/assets/BWIcons/Foot.svg" class="stomp delay7 rotate-12 invert dark:invert-0" />
        <img src="/assets/BWIcons/Foot.svg" class="stomp delay5 rotate-12 invert dark:invert-0" />
        <img src="/assets/BWIcons/Foot.svg" class="stomp delay3 rotate-12 invert dark:invert-0" />
        <img src="/assets/BWIcons/Foot.svg" class="stomp delay1 rotate-12 invert dark:invert-0" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.stomp {
  opacity: 0;
  animation: stepfade 9s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.delay1 {
  animation-delay: 1s;
}

.delay2 {
  animation-delay: 2s;
}

.delay3 {
  animation-delay: 3s;
}

.delay4 {
  animation-delay: 4s;
}

.delay5 {
  animation-delay: 5s;
}

.delay6 {
  animation-delay: 6s;
}

.delay7 {
  animation-delay: 7s;
}

.delay8 {
  animation-delay: 8s;
}

@keyframes stepfade {
  1% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>

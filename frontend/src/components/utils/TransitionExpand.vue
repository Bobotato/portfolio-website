<script lang='ts' setup>
function onEnter(element: any) {
    element.style.width = getComputedStyle(element).width;
    element.style.position = 'absolute';
    element.style.visibility = 'hidden';
    element.style.height = 'auto';

    const height = getComputedStyle(element).height;

    element.style.width = null;
    element.style.position = null;
    element.style.visibility = null;
    element.style.height = 0;

    getComputedStyle(element).height;

    requestAnimationFrame(() => {
        element.style.height = height;
    });
}

function onAfterEnter(element: any) {
    element.style.height = 'auto';
}

function onLeave(element: any) {
    element.style.height = getComputedStyle(element).height;
    getComputedStyle(element).height;
    requestAnimationFrame(() => {
        element.style.height = 0;
    });
}
</script>

<template>
    <transition
        name="expand"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @leave="onLeave"
    >
        <slot />
    </transition>
</template>

<style lang="scss" scoped>
.expand-enter-active,
.expand-leave-active {
    transition: height 0.5s ease-in-out;
    overflow: hidden;
}

.expand-enter,
.expand-leave-to {
    height: 0;
}

* {
    will-change: height;
    transform: translateY(0);
    backface-visibility: hidden;
    perspective: 1000px;
}
</style>
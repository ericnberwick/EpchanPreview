<template>
    <div ref="container" class="transition-all duration-1000 ease-out"
        :class="{ 'translate-y-16 opacity-0': !isVisible, 'translate-y-0 opacity-100': isVisible }">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref(null)
const isVisible = ref(false)

let observer

onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
        isVisible.value = entry.isIntersecting
    }, {
        root: null,
        threshold: 0.1 // Adjust this value to control when the animation triggers
    })

    if (container.value) {
        observer.observe(container.value)
    }
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>
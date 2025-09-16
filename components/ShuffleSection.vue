<template>
    <section ref="sectionRef" class="sticky top-0 h-screen flex items-center" :class="bgClass" :style="{ zIndex }">
        <div class="container mx-auto px-4 transition-transform duration-100 ease-out"
            :style="{ transform: `scale(${scale})`, opacity }">
            <slot />
        </div>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useElementBounding, useWindowScroll } from '@vueuse/core'

const props = defineProps({
    zIndex: {
        type: Number,
        required: true
    },
    bgClass: {
        type: String,
        default: ''
    }
})

const sectionRef = ref(null)
const scale = ref(1)
const opacity = ref(1)

const { y: scrollY } = useWindowScroll()
const { top, height } = useElementBounding(sectionRef)

watch(scrollY, () => {
    if (!sectionRef.value) return

    // Calculate the progress of the section scrolling off the top of the screen.
    // `top` is the distance from the top of the viewport to the top of the element.
    // When the element is sticky, `top` will be 0. As we scroll past it, the "real"
    // top would become negative. We use this to drive the animation.
    const progress = -top.value / (height.value / 2)

    if (progress >= 0 && progress <= 1) {
        // As we scroll down (progress from 0 to 1), scale down and fade out.
        scale.value = 1 - progress * 0.1 // Scale down to 90%
        opacity.value = 1 - progress * 0.8 // Fade out more quickly
    } else if (progress < 0) {
        // Before the animation starts, ensure it's at its initial state.
        scale.value = 1
        opacity.value = 1
    }
})
</script>
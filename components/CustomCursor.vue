<template>
  <div
    class="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary-500 pointer-events-none z-[9999] transition-transform duration-100 ease-out mix-blend-difference hidden md:block"
    :style="{
      transform: `translate(${x - 16}px, ${y - 16}px) scale(${isHovering ? 2.5 : 1})`,
    }"
  ></div>
  <div
    class="fixed top-0 left-0 w-1.5 h-1.5 bg-primary-500 rounded-full pointer-events-none z-[9999] hidden md:block"
    :style="{
      transform: `translate(${x - 3}px, ${y - 3}px)`,
    }"
  ></div>
</template>

<script setup>
import { useMouse, useEventListener } from '@vueuse/core'

const { x, y } = useMouse()
const isHovering = ref(false)

if (process.client) {
  useEventListener(window, 'mouseover', (e) => {
    const target = e.target
    if (
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.closest('a') ||
      target.closest('button') ||
      target.classList.contains('cursor-pointer')
    ) {
      isHovering.value = true
    } else {
      isHovering.value = false
    }
  })
}
</script>

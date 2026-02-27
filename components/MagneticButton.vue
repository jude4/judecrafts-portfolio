<template>
  <div
    ref="buttonRef"
    class="relative inline-block transition-transform duration-200 ease-out"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :style="{ transform: `translate(${x}px, ${y}px)` }"
  >
    <slot />
  </div>
</template>

<script setup>
const buttonRef = ref(null)
const x = ref(0)
const y = ref(0)

const handleMouseMove = (e) => {
  if (!buttonRef.value) return
  const { left, top, width, height } = buttonRef.value.getBoundingClientRect()
  const centerX = left + width / 2
  const centerY = top + height / 2
  const distanceX = e.clientX - centerX
  const distanceY = e.clientY - centerY

  // Move 30% of the distance to the mouse
  x.value = distanceX * 0.3
  y.value = distanceY * 0.3
}

const handleMouseLeave = () => {
  x.value = 0
  y.value = 0
}
</script>

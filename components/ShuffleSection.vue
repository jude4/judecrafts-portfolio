<template>
  <section
    ref="sectionRef"
    :class="[
      'sticky top-0 h-screen flex overflow-hidden scroll-mt-24',
      alignmentClass,
      bgClass,
    ]"
    :style="{ zIndex }"
  >
    <div
      class="container mx-auto px-4 pt-24 md:pt-28 pb-12 transition-transform duration-100 ease-out h-full overflow-y-auto"
      :style="{ transform: `scale(${scale})`, opacity }"
      :class="{ 'no-scrollbar': hideScrollbar }"
    >
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useElementBounding, useWindowScroll } from "@vueuse/core";

const props = defineProps({
  zIndex: {
    type: Number,
    required: true,
  },
  bgClass: {
    type: String,
    default: "",
  },
  align: {
    type: String,
    default: "center", // 'center' | 'start'
  },
  hideScrollbar: {
    type: Boolean,
    default: false,
  },
});

const sectionRef = ref<HTMLElement | null>(null);
const scale = ref(1);
const opacity = ref(1);
const alignmentClass = computed(() =>
  props.align === "start" ? "items-start" : "items-center"
);

const { y: scrollY } = useWindowScroll();
const { top, height } = useElementBounding(sectionRef);

watch(scrollY, () => {
  if (!sectionRef.value) return;

  const progress = -top.value / (height.value / 2);

  if (progress >= 0 && progress <= 1) {
    scale.value = 1 - progress * 0.1; // down to 90%
    opacity.value = 1 - progress * 0.8; // fade faster
  } else if (progress < 0) {
    scale.value = 1;
    opacity.value = 1;
  }
});
</script>

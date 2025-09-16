import { useMotion, type MotionVariants } from "@vueuse/motion";
import { useIntersectionObserver } from "@vueuse/core";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animate-on-scroll", {
    mounted: (el, binding) => {
      const motionInstance = useMotion(el, binding.value as MotionVariants);

      const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
        if (isIntersecting) {
          motionInstance.apply("visible");
          // Stop observing after the element is visible and animated.
          stop();
        }
      });
    },
  });
});

import { useMotion, type MotionVariants } from "@vueuse/motion";
import { useIntersectionObserver } from "@vueuse/core";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animate-on-scroll", {
    mounted: (el, binding) => {
      const options = binding.value || {};

      const variants: MotionVariants = {
        initial: options.initial || { opacity: 0, y: 20 },
        visible: options.visible || {
          opacity: 1,
          y: 0,
          transition: {
            duration: 800,
            delay: options.delay || 0,
            ease: 'easeOut'
          }
        },
      };

      const motionInstance = useMotion(el, variants);

      const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
        if (isIntersecting) {
          motionInstance.apply("visible");
          stop();
        }
      }, { threshold: 0.1 });
    },
  });
});

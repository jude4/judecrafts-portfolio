import { useIntersectionObserver } from "@vueuse/core";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animate-on-scroll", {
    mounted(el, binding) {
      const options = binding.value || {};
      const {
        initial = "opacity-0 -translate-y-4",
        final = "opacity-100 translate-y-0",
        duration = "duration-700",
        delay = "delay-100",
      } = options;

      el.classList.add("transition-all", "ease-out", duration, delay, initial);

      const { stop } = useIntersectionObserver(
        el,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.classList.remove(initial);
            el.classList.add(final);
            stop(); // Stop observing after animation to avoid re-triggering
          }
        },
        { threshold: 0.1 }
      );
    },
  });
});

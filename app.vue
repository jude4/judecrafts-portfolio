<template>
  <div :class="{ dark: isDark }" class="font-poppins">
    <NuxtLoadingIndicator color="#4f46e5" />
    <TheHeader v-model:is-dark="isDark" />
    <!-- The container for our sticky sections -->
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <WorksSection />
    <ContactSection />
    <TheFooter />
  </div>
</template>

<script setup>
const isDark = ref(false);
onMounted(() => {
  // Set dark mode based on user's system preference
  isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // Enable smooth scrolling for anchor links
  document.documentElement.style.scrollBehavior = "smooth";
});
onUnmounted(() => {
  document.documentElement.style.scrollBehavior = "auto";
});
</script>

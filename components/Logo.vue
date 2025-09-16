<template>
  <a href="#" class="flex items-center gap-2">
    <img :src="isDark ? '/img/logo-white.png' : '/img/logo-dark.png'" class="w-8 h-8" alt="JudeCrafts Logo" />
    <span class="text-xl font-bold text-gray-800 dark:text-white">JudeCrafts</span>
  </a>
</template>

<script setup>
defineProps({
  isDark: Boolean,
});
</script>
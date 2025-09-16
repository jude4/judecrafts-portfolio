<template>
  <div
    class="h-full w-full p-8 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    v-animate-on-scroll
  >
    <div class="flex h-full flex-col gap-4">
      <div
        class="w-12 h-12 bg-indigo-100 dark:bg-slate-700 rounded-full flex items-center justify-center"
      >
        <Icon
          :name="icon"
          class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
        />
      </div>
      <h4 class="font-semibold text-lg text-gray-800 dark:text-white">
        {{ title }}
      </h4>
      <p
        class="flex-grow text-gray-600 dark:text-gray-400 text-sm leading-relaxed overflow-y-auto"
      >
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
});
</script>

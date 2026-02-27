<template>
  <div
    class="px-4 py-2 rounded-full border border-surface-200 dark:border-surface-800 bg-surface-50/50 dark:bg-surface-900/50 hover:border-primary-500 hover:text-primary-500 transition-all cursor-default text-sm font-medium"
  >
    {{ skill }}
  </div>
</template>

<script setup>
defineProps({
  skill: {
    type: String,
    required: true,
  },
})
</script>

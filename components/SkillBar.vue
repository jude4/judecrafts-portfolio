<template>
    <div>
        <h4 class="text-gray-700 dark:text-gray-300 font-medium">{{ skill }}</h4>
        <div class="w-full bg-gray-200 dark:bg-slate-700 h-2 rounded-full mt-1">
            <div class="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: percentage }"></div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    skill: String,
    percentage: String,
});
</script>
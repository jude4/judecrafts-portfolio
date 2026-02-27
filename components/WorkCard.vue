<template>
    <a :href="url" target="_blank" rel="noopener noreferrer"
        class="group block relative overflow-hidden rounded-3xl bg-surface-100 dark:bg-surface-800"
        v-animate-on-scroll="{ initial: { opacity: 0, y: 30 } }">
        <div class="aspect-[16/10] overflow-hidden">
            <img :src="image" :alt="title"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
        </div>

        <!-- Overlay -->
        <div
            class="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 class="text-2xl font-bold text-white mb-2">
                    {{ title }}
                </h4>
                <p class="text-surface-300 text-sm mb-6 line-clamp-2">
                    {{ description }}
                </p>
                <div class="flex items-center text-primary-400 font-semibold gap-2">
                    <span>View Case Study</span>
                    <Icon name="mdi:arrow-top-right" class="w-4 h-4" />
                </div>
            </div>
        </div>

        <!-- Badge -->
        <div class="absolute top-4 right-4 px-3 py-1 rounded-full glass-dark text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {{ category }}
        </div>
    </a>
</template>

<script setup>
defineProps({
    image: String,
    title: String,
    url: String,
    description: String,
    category: String,
});
</script>
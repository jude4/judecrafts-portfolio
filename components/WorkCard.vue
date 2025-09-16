<template>
    <a :href="url" target="_blank" rel="noopener noreferrer"
        class="block relative group overflow-hidden rounded-lg shadow-md" v-animate-on-scroll>
        <img :src="image" :alt="title"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center p-4">
            <div class="text-center">
                <h4
                    class="text-white text-lg font-bold opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {{ title }}
                </h4>
                <p
                    class="text-indigo-300 text-sm mt-1 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    Visit Site &rarr;
                </p>
            </div>
        </div>
    </a>
</template>

<script setup>
defineProps({
    image: String,
    title: String,
    url: String,
});
</script>
<template>
    <header class="fixed top-0 w-full z-50 transition-all duration-500" :class="{
        'py-2 bg-white/70 dark:bg-surface-950/70 backdrop-blur-xl shadow-lg shadow-surface-950/5 border-b border-surface-200 dark:border-surface-800': isScrolled,
        'py-6': !isScrolled
    }">
        <nav class="container mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <Logo :isDark="isDark" />

                <!-- Desktop Menu -->
                <ul class="hidden md:flex space-x-8 text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase">
                    <li v-for="item in menuItems" :key="item.name" class="relative group">
                        <a :href="item.href"
                            class="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{{
                                item.name }}</a>
                        <span
                            class="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                    </li>
                </ul>

                <div class="flex items-center gap-4">
                    <!-- Dark Mode Toggle -->
                    <button @click="toggleDarkMode"
                        class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
                        <img v-if="!isDark" :src="'/img/moon.png'"
                            class="w-5 h-5 transform transition-transform duration-500" :class="{ 'rotate-90': isDark }"
                            alt="Dark mode" />
                        <img v-else :src="'/img/sun.png'" class="w-5 h-5 transform transition-transform duration-500"
                            :class="{ '-rotate-90': !isDark }" alt="Light mode" />
                    </button>

                    <!-- Mobile Menu Button -->
                    <button class="md:hidden z-50 flex flex-col h-12 w-12 justify-center items-center"
                        @click="isMobileMenuOpen = !isMobileMenuOpen">
                        <div class="h-0.5 w-6 my-1 rounded-full bg-gray-800 dark:bg-white transition ease transform duration-300"
                            :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"></div>
                        <div class="h-0.5 w-6 my-1 rounded-full bg-gray-800 dark:bg-white transition ease transform duration-300"
                            :class="{ 'opacity-0': isMobileMenuOpen }"></div>
                        <div class="h-0.5 w-6 my-1 rounded-full bg-gray-800 dark:bg-white transition ease transform duration-300"
                            :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"></div>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <Transition name="mobile-nav">
            <div v-if="isMobileMenuOpen"
                class="md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
                <ul class="flex flex-col items-center justify-center h-full space-y-8 text-xl font-semibold uppercase">
                    <li v-for="item in menuItems" :key="item.name"
                        class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                        <a :href="item.href" @click="isMobileMenuOpen = false">{{
                            item.name
                        }}</a>
                    </li>
                </ul>
            </div>
        </Transition>
    </header>
</template>

<script setup>
const props = defineProps({
    isDark: Boolean,
});
const emit = defineEmits(["update:isDark"]);

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
];

const toggleDarkMode = () => {
    emit("update:isDark", !props.isDark);
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: all 0.4s cubic-bezier(0.83, 0, 0.17, 1);
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>
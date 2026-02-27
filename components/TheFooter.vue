<template>
    <footer class="bg-surface-50 dark:bg-surface-950 py-16 border-t border-surface-200 dark:border-surface-900">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center gap-8">
                <div class="flex flex-col items-center md:items-start gap-4">
                    <Logo />
                    <p class="text-surface-600 dark:text-surface-400 text-sm max-w-xs text-center md:text-left">
                        Building digital products that people love. Specialized in Nuxt, React and Scalable Backends.
                    </p>
                </div>

                <div class="flex gap-8 text-sm font-semibold uppercase tracking-widest">
                    <a href="#home" class="hover:text-primary-500 transition-colors">Home</a>
                    <a href="#about" class="hover:text-primary-500 transition-colors">About</a>
                    <a href="#works" class="hover:text-primary-500 transition-colors">Works</a>
                    <a href="#contact" class="hover:text-primary-500 transition-colors">Contact</a>
                </div>

                <div class="flex gap-4">
                    <a href="https://github.com/jude4" target="_blank" class="w-10 h-10 rounded-full flex items-center justify-center border border-surface-200 dark:border-surface-800 hover:border-primary-500 transition-all group">
                        <Icon name="mdi:github" class="w-5 h-5 group-hover:text-primary-500" />
                    </a>
                    <a href="https://linkedin.com/in/jude-onohwosafe" target="_blank" class="w-10 h-10 rounded-full flex items-center justify-center border border-surface-200 dark:border-surface-800 hover:border-accent-500 transition-all group">
                        <Icon name="mdi:linkedin" class="w-5 h-5 group-hover:text-accent-500" />
                    </a>
                </div>
            </div>

            <div class="mt-16 pt-8 border-t border-surface-200 dark:border-surface-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-surface-500">
                <p>&copy; {{ currentYear }} JudeCrafts. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-primary-500">Privacy Policy</a>
                    <a href="#" class="hover:text-primary-500">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

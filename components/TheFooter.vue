<template>
    <footer class="bg-gray-800 text-gray-400">
        <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center gap-2">
                <Logo :isDark="true" />
            </div>

            <span class="mt-4 md:mt-0 text-sm">© 2025 JudeCrafts. Design with ♥ by Jude</span>

            <div class="flex gap-6 mt-4 md:mt-0">
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"
                    class="text-gray-400 hover:text-white transition-colors">
                    <Icon name="mdi:github" class="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"
                    class="text-gray-400 hover:text-white transition-colors">
                    <Icon name="mdi:linkedin" class="w-6 h-6" />
                </a>
            </div>
        </div>
    </footer>
</template>
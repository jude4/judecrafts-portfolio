<template>
  <section
    id="home"
    class="sticky top-0 z-0 h-screen flex items-center justify-center text-center overflow-hidden"
  >
    <!-- Dynamic Background -->
    <div
      class="absolute inset-0 bg-surface-50 dark:bg-surface-950 -z-10"
    ></div>
    <div
      class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/20 blur-[120px] rounded-full animate-slow-pulse"
    ></div>
    <div
      class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-500/20 blur-[120px] rounded-full animate-slow-pulse"
      style="animation-delay: 2s"
    ></div>

    <div class="container mx-auto px-4 z-10">
      <div v-animate-on-scroll="{ initial: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }">
        <h1
          class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-surface-900 dark:text-white leading-tight"
        >
          <span class="block">Hi, I’m <span class="text-gradient">Jude.</span></span>
          <span class="block text-3xl md:text-4xl font-medium text-surface-600 dark:text-surface-400 mt-4 h-12">
            <AutoTyperVue
              componentTag="span"
              :text="[
                'Full Stack Developer',
                'UI/UX Designer',
                'Problem Solver',
              ]"
              :typing-delay="80"
              :erasing-delay="50"
              :erasing-style="'backspace'"
            />
          </span>
        </h1>
        <p
          class="mt-8 max-w-xl mx-auto text-lg md:text-xl text-surface-600 dark:text-surface-400 leading-relaxed"
        >
          Crafting digital experiences that blend <span class="text-surface-900 dark:text-white font-semibold">bold design</span> with <span class="text-surface-900 dark:text-white font-semibold">flawless performance</span>.
        </p>
      </div>

      <div class="mt-12 flex flex-col items-center gap-8">
        <div class="flex justify-center gap-6" v-animate-on-scroll="{ delay: 200 }">
          <MagneticButton>
            <a
              href="https://github.com/jude4"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-center w-14 h-14 rounded-full glass border border-surface-200 dark:border-surface-800 hover:border-primary-500 transition-colors"
            >
              <Icon
                name="mdi:github"
                class="w-6 h-6 text-surface-700 dark:text-surface-300 group-hover:text-primary-500 transition-colors"
              />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://linkedin.com/in/jude-onohwosafe"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-center w-14 h-14 rounded-full glass border border-surface-200 dark:border-surface-800 hover:border-accent-500 transition-colors"
            >
              <Icon
                name="mdi:linkedin"
                class="w-6 h-6 text-surface-700 dark:text-surface-300 group-hover:text-accent-500 transition-colors"
              />
            </a>
          </MagneticButton>
        </div>

        <div class="flex flex-wrap justify-center gap-4" v-animate-on-scroll="{ delay: 400 }">
          <MagneticButton>
            <a
              href="#contact"
              class="btn-primary flex items-center gap-2 group"
            >
              Let's Talk
              <Icon name="mdi:arrow-right" class="group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#works"
              class="btn-secondary"
            >
              View Work
            </a>
          </MagneticButton>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
      <Icon name="mdi:chevron-down" class="w-6 h-6" />
    </div>
  </section>
</template>

<script setup>
import { AutoTyperVue } from "auto-typer-vue3";
</script>

<style>
@import "auto-typer-vue3/dist/style.css";

.auto-typer-vue .cursor.typing {
  background-color: #4f46e5;
}

.dark .auto-typer-vue .cursor.typing {
  background-color: #818cf8;
}
</style>

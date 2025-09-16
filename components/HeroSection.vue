<template>
  <section
    id="home"
    class="sticky top-0 z-0 h-screen flex items-center justify-center text-center overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 -z-10"
    ></div>
    <div
      class="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
      style="
        mask-image: linear-gradient(to bottom, transparent, black, black);
        -webkit-mask-image: linear-gradient(
          to bottom,
          transparent,
          black,
          black
        );
      "
    ></div>

    <div class="container mx-auto px-4 z-10" v-animate-on-scroll>
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 dark:text-white"
      >
        <span class="block">Hi, I’m Jude.</span>
        <span class="block text-indigo-600 dark:text-indigo-400 mt-2">
          <AutoTyperVue
            componentTag="span"
            :text="[
              'Full Stack Developer',
              'Problem Solver',
              'Builder of the Modern Web',
            ]"
            :typing-delay="120"
            :erasing-delay="100"
            :erasing-style="'backspace'"
          />
        </span>
      </h1>
      <p
        class="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
      >
        I design and develop clean, efficient, and user-centric solutions that
        make the web a better place.
      </p>
      <div class="mt-8 flex flex-col items-center gap-6">
        <p
          class="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400"
        >
          Let's connect
        </p>
        <div class="flex justify-center gap-4">
          <a
            href="https://github.com/jude4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            class="inline-flex items-center justify-center rounded-full p-3 ring-1 ring-gray-200 dark:ring-slate-700 bg-white/80 dark:bg-slate-800/70 backdrop-blur hover:ring-indigo-300 dark:hover:ring-indigo-500 hover:-translate-y-0.5 transition-all"
          >
            <Icon
              name="mdi:github"
              class="w-6 h-6 text-gray-800 dark:text-gray-100"
            />
            <span class="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/jude-onohwosafe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            class="inline-flex items-center justify-center rounded-full p-3 ring-1 ring-gray-200 dark:ring-slate-700 bg-white/80 dark:bg-slate-800/70 backdrop-blur hover:ring-indigo-300 dark:hover:ring-indigo-500 hover:-translate-y-0.5 transition-all"
          >
            <Icon
              name="mdi:linkedin"
              class="w-6 h-6 text-[#0A66C2] dark:text-[#78A6E3]"
            />
            <span class="sr-only">LinkedIn</span>
          </a>
        </div>
        <div class="flex gap-4">
          <a
            href="#contact"
            class="bg-indigo-600 block text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 transition-transform transform hover:scale-105"
            >Let's Talk</a
          >
          <a
            href="#works"
            class="bg-white block dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-semibold px-6 py-3 rounded-md border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 transition-transform transform hover:scale-105"
            >My Projects</a
          >
        </div>
      </div>
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

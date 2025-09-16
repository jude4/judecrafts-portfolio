<template>
  <ShuffleSection
    id="about"
    :z-index="10"
    bg-class="bg-white dark:bg-slate-900"
    :hide-scrollbar="true"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full"
    >
      <!-- Left side with image -->
      <div class="relative w-full flex justify-center" v-animate-on-scroll>
        <div class="relative w-64 h-64 sm:w-80 sm:h-80">
          <div
            class="absolute inset-0 bg-indigo-100 dark:bg-slate-800 rounded-full transform -rotate-6"
          ></div>
          <div
            class="absolute inset-0 bg-indigo-200 dark:bg-slate-700 rounded-full transform rotate-6"
          ></div>
          <div
            class="relative w-full h-full rounded-full overflow-hidden shadow-xl z-10"
          >
            <img
              :src="avatar"
              alt="Jude's Avatar"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Right side with content -->
      <div class="flex flex-col gap-6" v-animate-on-scroll>
        <h2
          class="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest"
        >
          About Me
        </h2>
        <h3
          class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
        >
          Designing with Passion, <br />Building with Precision.
        </h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          I'm a passionate developer who loves bringing ideas to life, from the
          first pixel to the last line of code. With over 6 years of experience
          across the full stack, I specialize in creating seamless,
          user-friendly digital experiences.
        </p>

        <!-- Skills -->
        <div class="space-y-4 mt-4">
          <SkillBar skill="HTML & CSS" percentage="95%" />
          <SkillBar skill="JavaScript & TypeScript" percentage="90%" />
          <SkillBar skill="Vue.js & Nuxt.js" percentage="90%" />
          <SkillBar skill="React & Next.js" percentage="80%" />
          <SkillBar skill="PHP & Laravel" percentage="85%" />
          <SkillBar skill="Node.js & Nest.js" percentage="85%" />
        </div>
      </div>
    </div>
  </ShuffleSection>
</template>

<script setup>
import SkillBar from "./SkillBar.vue";
import avatar from "~/assets/img/avatar.jpg";
</script>

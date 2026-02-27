<template>
  <ShuffleSection
    id="about"
    :z-index="10"
    bg-class="bg-white dark:bg-slate-900"
    :hide-scrollbar="true"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full"
    >
      <!-- Left side with image -->
      <div class="relative w-full flex justify-center" v-animate-on-scroll="{ initial: { opacity: 0, x: -50 } }">
        <div class="relative w-72 h-72 sm:w-96 sm:h-96 group">
          <div
            class="absolute inset-0 bg-primary-500/10 rounded-3xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"
          ></div>
          <div
            class="absolute inset-0 bg-accent-500/10 rounded-3xl transform rotate-6 group-hover:rotate-0 transition-transform duration-500"
          ></div>
          <div
            class="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <img
              :src="avatar"
              alt="Jude's Avatar"
              class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      <!-- Right side with content -->
      <div class="flex flex-col gap-8" v-animate-on-scroll="{ initial: { opacity: 0, x: 50 } }">
        <div>
          <h2
            class="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em]"
          >
            Behind the Code
          </h2>
          <h3
            class="text-4xl md:text-5xl font-black text-surface-900 dark:text-white mt-4 leading-tight"
          >
            Solving problems with <br /><span class="text-gradient">creative precision.</span>
          </h3>
        </div>

        <p class="text-lg text-surface-600 dark:text-surface-400 leading-relaxed">
          I'm a Full-Stack Engineer with a designer's eye. Over the past 6 years, I've focused on bridging the gap between <span class="text-surface-900 dark:text-white font-semibold">complex backend logic</span> and <span class="text-surface-900 dark:text-white font-semibold">elegant frontend interfaces</span>.
        </p>

        <!-- Skills -->
        <div class="space-y-6">
          <h4 class="text-sm font-bold uppercase text-surface-400 tracking-widest">Technologies I master:</h4>
          <div class="flex flex-wrap gap-3">
            <SkillPill v-for="skill in skills" :key="skill" :skill="skill" />
          </div>
        </div>
      </div>
    </div>
  </ShuffleSection>
</template>

<script setup>
import avatar from "~/assets/img/avatar.jpg";

const skills = [
  "JavaScript", "TypeScript", "Vue 3", "Nuxt.js", "React", "Next.js",
  "Node.js", "NestJS", "PHP", "Laravel", "Tailwind CSS", "PostgreSQL",
  "AWS", "Docker", "UI/UX Design"
];
</script>

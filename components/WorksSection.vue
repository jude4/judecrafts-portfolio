<template>
  <ShuffleSection
    id="works"
    :z-index="30"
    bg-class="bg-white dark:bg-slate-900"
    :hide-scrollbar="true"
  >
    <!-- Section Header -->
    <div class="text-center mb-12 w-full" v-animate-on-scroll>
      <h2
        class="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest"
      >
        Portfolio
      </h2>
      <h3
        class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2"
      >
        Works & Projects
      </h3>
      <p class="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
        Here are some of the projects I'm proud to have worked on. Each one was
        a unique challenge and a joy to create.
      </p>
    </div>

    <!-- Works Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      v-animate-on-scroll
    >
      <WorkCard
        v-for="item in items"
        :key="item.title"
        :image="item.image"
        :title="item.title"
        :url="item.url"
      />
    </div>
  </ShuffleSection>
</template>

<script setup lang="ts">
import beezlinq from "~/assets/img/beezlinq.png";
import savingsbox from "~/assets/img/savingsbox.png";
import realtimepay from "~/assets/img/realtimepay.png";

const items = [
  { image: beezlinq, title: "Beezlinq", url: "https://beezlinq.com" },
  { image: savingsbox, title: "SavingsBox", url: "https://savingsbox.ng" },
  { image: realtimepay, title: "RealTimePay", url: "https://realtimepay.ng" },
];

// No carousel state needed
</script>

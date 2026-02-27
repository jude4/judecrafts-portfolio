<template>
  <ShuffleSection
    id="works"
    :z-index="30"
    bg-class="bg-white dark:bg-slate-900"
    :hide-scrollbar="true"
  >
    <!-- Section Header -->
    <div class="text-center mb-16 w-full" v-animate-on-scroll>
      <h2
        class="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em]"
      >
        Selected Works
      </h2>
      <h3
        class="text-4xl md:text-5xl font-black text-surface-900 dark:text-white mt-4"
      >
        Digital <span class="text-gradient">Craftsmanship.</span>
      </h3>
      <p class="text-surface-600 dark:text-surface-400 mt-6 max-w-2xl mx-auto text-lg">
        A curated selection of projects where I've blended innovative design with robust engineering to solve real-world problems.
      </p>
    </div>

    <!-- Works Grid -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-10"
      v-animate-on-scroll
    >
      <WorkCard
        v-for="item in items"
        :key="item.title"
        v-bind="item"
      />
    </div>
  </ShuffleSection>
</template>

<script setup lang="ts">
import beezlinq from "~/assets/img/beezlinq.png";
import savingsbox from "~/assets/img/savingsbox.png";
import realtimepay from "~/assets/img/realtimepay.png";

const items = [
  {
    image: beezlinq,
    title: "Beezlinq",
    url: "https://beezlinq.com",
    category: "Web Application",
    description: "A comprehensive digital networking platform connecting professionals and businesses seamlessly."
  },
  {
    image: savingsbox,
    title: "SavingsBox",
    url: "https://savingsbox.ng",
    category: "Fintech",
    description: "An automated savings and investment platform helping thousands of users reach their financial goals."
  },
  {
    image: realtimepay,
    title: "RealTimePay",
    url: "https://realtimepay.ng",
    category: "Payment Gateway",
    description: "A secure and lightning-fast payment processing solution for modern e-commerce businesses."
  },
];

// No carousel state needed
</script>

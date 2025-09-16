<template>
    <ShuffleSection id="works" :z-index="30" bg-class="bg-white dark:bg-slate-900">
        <!-- Section Header -->
        <div class="text-center mb-12 w-full" v-animate-on-scroll>
            <h2 class="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                Portfolio
            </h2>
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2">
                Works & Projects
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                Here are some of the projects I'm proud to have worked on. Each one
                was a unique challenge and a joy to create.
            </p>
        </div>

        <!-- Works Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" v-animate-on-scroll>
            <WorkCard :image="beezlinq" title="Beezlinq" url="https://beezlinq.com" />
            <WorkCard :image="savingsbox" title="SavingsBox" url="https://savingsbox.ng" />
            <WorkCard :image="realtimepay" title="RealTimePay" url="https://realtimepay.ng" />
        </div>
    </ShuffleSection>
</template>

<script setup>
import beezlinq from '~/assets/img/beezlinq.png'
import savingsbox from '~/assets/img/savingsbox.png'
import realtimepay from '~/assets/img/realtimepay.png'
</script>
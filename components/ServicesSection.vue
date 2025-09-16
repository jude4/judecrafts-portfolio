<template>
    <ShuffleSection id="services" :z-index="20" bg-class="bg-slate-50 dark:bg-slate-950">
        <!-- Section Header -->
        <div class="text-center mb-12 w-full" v-animate-on-scroll>
            <h2 class="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                Services
            </h2>
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2">
                What I Offer
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                From front-end polish to back-end power, I offer a complete range of
                services to build and scale your digital presence.
            </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-animate-on-scroll>
            <ServiceCard icon="ph:paint-brush-duotone" title="UX / UI Design">
                I specialize in creating interactive websites for individuals and
                businesses, leveraging top design tools for a great user experience.
            </ServiceCard>
            <ServiceCard icon="ph:code-duotone" title="Web Applications">
                Building robust web applications using modern front-end frameworks
                (Vue.js, Nuxt.js) and scalable back-end technologies (Laravel,
                Nest.js).
            </ServiceCard>
            <ServiceCard icon="ph:chart-pie-slice-duotone" title="Custom CRM & Dashboards">
                I build custom CRM systems and admin dashboards tailored to specific
                business needs for streamlined operations.
            </ServiceCard>
            <ServiceCard icon="ph:rocket-launch-duotone" title="DevOps & Deployments">
                I set up development environments and deploy web applications on cloud
                platforms like AWS, Vercel, and Netlify, managing CI/CD pipelines.
            </ServiceCard>
            <ServiceCard icon="ph:wrench-duotone" title="Maintenance & Support">
                I provide ongoing support, including bug fixes, performance
                optimization, and feature enhancements to ensure security and uptime.
            </ServiceCard>
            <ServiceCard icon="ph:chats-teardrop-duotone" title="Consulting & Mentoring">
                I offer consulting and code review services to help improve your
                development practices and ensure high-quality code.
            </ServiceCard>
        </div>
    </ShuffleSection>
</template>
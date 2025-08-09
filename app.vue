<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="font-poppins overflow-hidden transition-colors duration-300">
      <!-- <NuxtRouteAnnouncer /> -->
      <!-- into section -->
      <div
        class="relative h-[400px] bg-gradient-to-t from-indigo-200 lg:h-screen dark:from-slate-800 dark:to-slate-900">
        <nav class="fixed top-0 w-full px-5 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
          <div class="container flex justify-between items-center py-5 mx-auto">
            <div class="flex gap-2 items-center">
              <Logo :isDark="isDark" />
            </div>

            <ul class="hidden space-x-10 text-sm font-bold text-gray-600 dark:text-gray-100 uppercase md:flex">
              <li class="hover:text-gray-500 transition-colors">
                <a href="#">Home</a>
              </li>

              <li class="hover:text-gray-500 transition-colors">
                <a href="#about">About me</a>
              </li>

              <li class="hover:text-gray-500 transition-colors">
                <a href="#services">Services</a>
              </li>

              <li class="hover:text-gray-500 transition-colors">
                <a href="#works">Works</a>
              </li>

              <li class="hover:text-gray-500 transition-colors">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div class="flex items-center gap-2">

              <img src="./assets/img/moon.png" class=" w-5 cursor-pointer md:block" alt="Toggle dark mode" @click="isDark = !isDark" />
              <div v-if="!menu" class="z-20 space-y-1 cursor-pointer md:hidden" @click="toggleMenu">
                <div class="w-6 h-0.5 bg-black dark:bg-gray-100"></div>
                <div class="w-6 h-0.5 bg-black dark:bg-gray-100"></div>
                <div class="w-6 h-0.5 bg-black dark:bg-gray-100"></div>
              </div>
              <div class="z-20" v-else>
                <span class="w-6 h-0.5 text-2xl text-white cursor-pointer md:hidden" @click="toggleMenu">X</span>
              </div>
              <ul :class="menu ? 'block' : 'hidden'"
                class="absolute top-0 left-0 p-10 space-y-10 w-full text-center text-white bg-indigo-900 rounded-b-3xl">
                <li>
                  <a href="#" @click="toggleMenu">Home</a>
                </li>

                <li>
                  <a href="#about" @click="toggleMenu">About me</a>
                </li>

                <li>
                  <a href="#services" @click="toggleMenu">Services</a>
                </li>

                <li>
                  <a href="#works" @click="toggleMenu">Works</a>
                </li>

                <li>
                  <a href="#contact" @click="toggleMenu">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <!-- Intro content -->
        <!-- image -->
        <img src="./assets/img/avatar.jpg"
          class="object-contain absolute right-0 bottom-0 rounded-full mx-auto  h-5/6 lg:left-0"
          alt="hero back image" />
        <!-- circle -->
        <div
          class="hidden lg:block absolute bottom-0 w-big -z-10 h-big bg-indigo-900 rounded-full right-0 left-0 mx-auto">
        </div>
        <!--animated text  -->
        <div
          class="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left--48 xl:text-7xl font-bold">
          <span class="text-gray-600">Freelance</span>
          <AutoTyperVue id="main-auto-typer" :typingDelay="200" componentTag="h1" :text="text" />
        </div>
        <!-- text -->
        <div
          class="hidden lg:flex flex-col absolute top-0 bottom-0 m-auto shadow-lg right-10 gap-5 rounded-sm bg-white p-6 h-fit w-1/3 dark:shadow-slate-800 dark:bg-slate-900 animate-[bounce_2s_ease-in-out_infinite]">
          <h1 class="text-4xl font-semibold text-indigo-900">Hi, i'm Jude</h1>
          <p class="text-gray-400">
            With 8+ years building delightful, performant web experiences. I craft robust front‑ends, scalable back‑ends, and thoughtful design systems.
          </p>
          <a class="bg-indigo-600 hover:bg-indigo-500 py-2 px-3 text-xl w-fit font-semibold rounded-md text-white transition-transform hover:scale-[1.02] active:scale-95 shadow hover:shadow-md"
            href="https://linkedin.com/in/jude-onohwosafe/" target="_blank">Contact Me</a>
        </div>
      </div>

      <!-- about -->
      <div class="px-10 dark:bg-slate-900 scroll-mt-28" id="about">
        <div class="container mx-auto flex flex-col-reverse lg:flex-row py-40 items-center gap-20">
          <!-- left size -->
          <div class="relative" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }">
            <img src="./assets/img/dots.png" class="h-1/4 -z-10 absolute top-0 left-0 w-1/4" alt="decor dots" loading="lazy" />
            <div class="h-full rounded-full overflow-hidden">
              <svg width="100" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="200" fill="#4B0082" opacity="0.8" />
                <circle cx="50" cy="50" r="30" fill="#9370DB" />
                <line x1="20" y1="100" x2="80" y2="150" stroke="#DDA0DD" stroke-width="4" />
                <polygon points="40,180 60,180 50,160" fill="#DDA0DD" />
              </svg>
              <!-- <img src="./assets/img/portrait.png" alt="" /> -->
            </div>
          </div>
          <!-- right size -->
          <div class="my-auto flex flex-col gap-3" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }">
            <h1 class="text-indigo-600 font-bold">ABOUT ME</h1>
            <h1 class="text-3xl font-medium dark:text-white">Better Design</h1>
            <h1 class="text-3xl font-medium dark:text-white">
              Better Experience
            </h1>
            <p class="text-gray-400">
              I design and build digital products. I'm a multi‑disciplinary maker with over 6 years of experience across product design and engineering.
            </p>
            <h2 class="text-gray-400 font-medium">HTML</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-full">
              <div class="w-full bg-indigo-600 h-1.5 rounded-md"></div>
            </div>

            <h2 class="text-gray-400 font-medium">Javascript</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-full">
              <div class="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>

            <h2 class="text-gray-400 font-medium">PHP/Laravel</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-full">
              <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>

            <h2 class="text-gray-400 font-medium">Vue</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-full">
              <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>

            <h2 class="text-gray-400 font-medium">React</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-full">
              <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>

            <h2 class="text-gray-400 font-medium">Nest</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-full">
              <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- services  -->
    <div id="services" class="dark:bg-slate-900 scroll-mt-28">
      <div class="container mx-auto">
        <!-- top -->
        <div class="flex flex-col gap-3 items-center" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">
          <h1 class="text-indigo-600 font-bold">SERVICES</h1>
          <h1 class="text-3xl dark:text-white">What do I offer?</h1>
          <p class="w-full md:w-1/2 text-center text-gray-400">
            I design and build applications that enhance your brand and make it effortless for your clients to achieve their goals.
          </p>
        </div>
        <!-- bottom -->
        <div class="flex flex-wrap p-5 sm:p-0">
          <!-- card -->
          <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { delay: 50 } }">
            <img src="./assets/img/icon.png" class="w-10" alt="service icon" loading="lazy" />
            <h1 class="font-medium text-lg dark:text-white">UX / UI Design</h1>
            <p class="text-gray-400">
              I specialize in creating interactive websites for individuals and businesses, leveraging top design tools.
            </p>
            <a href="#" class="text-indigo-600 font-semibold">Read More</a>
          </div>

          <!-- card -->
          <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }">
            <img src="./assets/img/icon.png" class="w-10" alt="service icon" loading="lazy" />
            <h1 class="font-medium text-lg dark:text-white">
              Web Applications
            </h1>
            <p class="text-gray-400">
              Building robust web applications using modern front‑end frameworks (Vue.js, Nuxt) and scalable back‑end technologies (Laravel, Nest.js).
            </p>
            <a href="#" class="text-indigo-600 font-semibold">Read More</a>
          </div>

          <!-- card -->
          <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { delay: 150 } }">
            <img src="./assets/img/icon.png" class="w-10" alt="service icon" loading="lazy" />
            <h1 class="font-medium text-lg dark:text-white">
              Custom CRM & Admin Dashboards
            </h1>
            <p class="text-gray-400">
              I build custom CRM systems tailored to specific business needs.
            </p>
            <a href="#" class="text-indigo-600 font-semibold">Read More</a>
          </div>

          <!-- card -->
          <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }">
            <img src="./assets/img/icon.png" class="w-10" alt="service icon" loading="lazy" />
            <h1 class="font-medium text-lg dark:text-white">
              DevOps & Deployments
            </h1>
            <p class="text-gray-400">
              I set up development environments, deploy web applications on cloud platforms (AWS, GCP, DigitalOcean, Vercel, Netlify), and manage CI/CD pipelines.
            </p>
            <a href="#" class="text-indigo-600 font-semibold">Read More</a>
          </div>

          <!-- card -->
          <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { delay: 250 } }">
            <img src="./assets/img/icon.png" class="w-10" alt="service icon" loading="lazy" />
            <h1 class="font-medium text-lg dark:text-white">
              Maintenance & Support
            </h1>
            <p class="text-gray-400">
              I provide ongoing support for web applications, including bug fixes, performance optimization, feature enhancements, and ensuring security and uptime.
            </p>
            <a href="#" class="text-indigo-600 font-semibold">Read More</a>
          </div>

          <!-- card -->
          <div class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }">
            <img src="./assets/img/icon.png" class="w-10" alt="service icon" loading="lazy" />
            <h1 class="font-medium text-lg dark:text-white">
              Consulting, Mentoring, and Code Review
            </h1>
            <p class="text-gray-400">
              I offer consulting, mentoring, and code review services to help improve your development practices and ensure high‑quality code.
            </p>
            <a href="#" class="text-indigo-600 font-semibold">Read More</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Works and Projects -->
    <div id="works" class="pt-10 dark:bg-slate-900 scroll-mt-28">
      <div class="container mx-auto">
        <!-- top -->
        <div class="flex flex-col gap-3 items-center" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">
          <h1 class="text-indigo-600 font-bold">PORTFOLIO</h1>
          <h1 class="text-3xl dark:text-white">Works & Projects</h1>
          <p class="w-full md:w-1/2 text-center text-gray-400">
            I help designers, small agencies and businesses bring their ideas to life. Powered by Figma, VS Code and coffee, I turn your requirements into well‑designed websites.
          </p>
        </div>
        <!-- bottom -->
        <div class="flex flex-wrap p-5 sm:p-0 justify-between">
          <!-- card -->
          <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-110 m-1 overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { delay: 50 } }">
            <img src="./assets/img/item.png" alt="portfolio item" loading="lazy" />
          </div>

          <!-- card -->
          <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-110 m-1 overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }">
            <img src="./assets/img/item.png" alt="portfolio item" loading="lazy" />
          </div>

          <!-- card -->
          <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-110 m-1 overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { delay: 150 } }">
            <img src="./assets/img/item.png" alt="portfolio item" loading="lazy" />
          </div>

          <!-- card -->
          <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-110 m-1 overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }">
            <img src="./assets/img/item.png" alt="portfolio item" loading="lazy" />
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="dark:bg-slate-900">
      <div class="container mx-auto pt-10 scroll-mt-28" id="contact">
        <!-- top -->
        <div class="flex flex-col gap-3 items-center" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }">
          <h1 class="text-indigo-600 font-bold">CONTACT</h1>
          <h1 class="text-3xl dark:text-white">Have a Question?</h1>
          <p class="w-full md:w-1/2 text-center text-gray-400">
            Do you have an idea? Let's discuss it and see what we can do together.
          </p>
        </div>
        <!-- bottom -->
        <form action="" class="flex p-8 flex-col gap-5 items-center mt-5">
          <input
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:text-white dark:ring-0"
            type="text" placeholder="Name" />
          <input
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:text-white dark:ring-0"
            type="email" placeholder="Email" />
          <textarea name="" rows="10"
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:text-white dark:ring-0"
            id="" placeholder="Type here..."></textarea>
          <button class="w-full md:w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer transition-transform hover:scale-[1.01] active:scale-95 shadow hover:shadow-md">
            Submit
          </button>
        </form>
      </div>
    </div>

    <!-- footer -->
    <div class="w-full px-5 bg-gray-800">
      <div class="container flex justify-between items-center py-5 mx-auto">
        <div class="flex gap-2 items-center">
          <Logo :isDark="true" />
        </div>

        <span class="text-white hidden md:block font-medium">© 2025 JudeCrafts. Design with ♥ by Jude</span>

        <div class="flex gap-2">
          <img src="./assets/img/facebook.png" class="w-4 cursor-pointer hover:opacity-80" alt="facebook" loading="lazy" />
          <img src="./assets/img/instagram.png" class="w-4 cursor-pointer hover:opacity-80" alt="instagram" loading="lazy" />
          <img src="./assets/img/twitter.png" class="w-4 cursor-pointer hover:opacity-80" alt="twitter" loading="lazy" />
          <img src="./assets/img/linkedin.png" class="w-4 cursor-pointer hover:opacity-80" alt="linkedin" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AutoTyperVue } from "auto-typer-vue3";

let text = ["Developer", "Designer"];

const menu = ref(false);

const toggleMenu = () => {
  menu.value = !menu.value;
};

const isDark = ref(false);

onMounted(() => {
  try {
    const stored = localStorage.getItem('theme');
    if (stored) {
      isDark.value = stored === 'dark';
    } else if (window?.matchMedia) {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  } catch {}
});

watch(isDark, (v) => {
  try { localStorage.setItem('theme', v ? 'dark' : 'light'); } catch {}
});
</script>
<style scoped>
@import "auto-typer-vue3/dist/style.css";

#main-auto-typer {
  color: red;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}
</style>

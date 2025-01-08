<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="font-poppins overflow-hidden">
      <!-- <NuxtRouteAnnouncer /> -->
      <!-- into section -->
      <div
        class="relative h-[400px] bg-gradient-to-t from-indigo-200 lg:h-screen dark:from-slate-800 dark:to-slate-900"
      >
        <nav class="fixed top-0 w-full px-5 bg-white z-10 dark:bg-slate-900">
          <div class="container flex justify-between items-center py-5 mx-auto">
            <div class="flex gap-2 items-center">
               <Logo :isDark="isDark" />
            </div>

            <ul
              class="hidden space-x-10 text-sm font-bold text-gray-600 dark:text-gray-100 uppercase md:flex"
            >
              <li class="hover:text-gray-500">
                <a href="#">Home</a>
              </li>

              <li class="hover:text-gray-500">
                <a href="#about">About me</a>
              </li>

              <li class="hover:text-gray-500">
                <a href="#services">Services</a>
              </li>

              <li class="hover:text-gray-500">
                <a href="#works">Works</a>
              </li>

              <li class="hover:text-gray-500">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div class="flex items-center gap-2">

              <img
                src="./assets/img/moon.png"
                class=" w-5 cursor-pointer md:block"
                alt=""
                @click="isDark = !isDark"
              />
              <div
                v-if="!menu"
                class="z-20 space-y-1 cursor-pointer md:hidden"
                @click="toggleMenu"
              >
                <div class="w-6 h-0.5 bg-black dark:bg-gray-100"></div>
                <div class="w-6 h-0.5 bg-black dark:bg-gray-100"></div>
                <div class="w-6 h-0.5 bg-black dark:bg-gray-100"></div>
              </div>
              <div class="z-20" v-else>
                <span
                  class="w-6 h-0.5 text-2xl text-white cursor-pointer md:hidden"
                  @click="toggleMenu"
                  >X</span
                >
              </div>
              <ul
                :class="menu ? 'block' : 'hidden'"
                class="absolute top-0 left-0 p-10 space-y-10 w-full text-center text-white bg-indigo-900 rounded-b-3xl"
              >
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
        <img
          src="./assets/img/man.png"
          class="object-cover absolute right-0 bottom-0 mx-auto h-5/6 lg:left-0"
          alt="hero back image"
        />
        <!-- circle -->
        <div
          class="hidden lg:block absolute bottom-0 w-big -z-10 h-big bg-indigo-900 rounded-full right-0 left-0 mx-auto"
        ></div>
        <!--animated text  -->
        <div
          class="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left--48 xl:text-7xl font-bold"
        >
          <span class="text-gray-600">Freelance</span>
          <AutoTyperVue
            id="main-auto-typer"
            :typingDelay="200"
            componentTag="h1"
            :text="text"
          />
        </div>
        <!-- text -->
        <div
          class="hidden lg:flex flex-col absolute top-0 bottom-0 m-auto shadow-lg right-10 gap-5 rounded-sm bg-white p-6 h-fit w-1/3 dark:shadow-slate-800 dark:bg-slate-900"
        >
          <h1 class="text-4xl font-semibold text-indigo-900">Hi, i'm Jude</h1>
          <p class="text-gray-400">
            With over 6 years of experience on web design and development. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. N oumquam quo
            provident, facere minus temporibus veniam nostrum reprehenderit
            nihil?
          </p>
          <a
            class="bg-indigo-600 hover:bg-indigo-500 py-2 px-3 text-xl w-fit font-semibold rounded-md text-white"
            href="#contact"
            >Hire Me</a
          >
        </div>
      </div>

      <!-- about -->
      <div class="px-10 dark:bg-slate-900" id="about">
        <div
          class="container mx-auto flex flex-col-reverse lg:flex-row py-40 items-center gap-20"
        >
          <!-- left size -->
          <div class="relative">
            <img
              src="./assets/img/dots.png"
              class="h-1/4 -z-10 absolute top-0 left-0 w-1/4"
              alt=""
            />
            <div class="h-full rounded-full overflow-hidden">
              <img src="./assets/img/portrait.png" alt="" />
            </div>
          </div>
          <!-- right size -->
          <div class="my-auto flex flex-col gap-3">
            <h1 class="text-indigo-600 font-bold">ABOUT ME</h1>
            <h1 class="text-3xl font-medium dark:text-white">Better Design</h1>
            <h1 class="text-3xl font-medium dark:text-white">
              Better Experience
            </h1>
            <p class="text-gray-400">
              I design and build digital products. I'm also a multi-disciplinary
              maker with over 6 years of experiences in wide range of design
              disciplines.
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
    <div id="services " class="dark:bg-slate-900">
      <div class="container mx-auto">
        <!-- top -->
        <div class="flex flex-col gap-3 items-center">
          <h1 class="text-indigo-600 font-bold">SERVICES</h1>
          <h1 class="text-3xl dark:text-white">What do I offer?</h1>
          <p class="w-1/2 text-center text-gray-400">
            I design web applications that enhance your brand and make it easy
            for your clients to utilize.
          </p>
        </div>
        <!-- bottom -->
        <div class="flex flex-wrap p-5 sm:p-0">
          <!-- card -->
          <div
            class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
          >
            <img src="./assets/img/icon.png" class="w-10" alt="" />
            <h1 class="font-medium text-lg dark:text-white">UX / UI Design</h1>
            <p class="text-gray-400">
              I specialize in creating interactive websites for individuals and
              businesses, leveraging top design tools.
            </p>
            <a href="#" class="text-indigo-600 font-semibold" bv>Read More</a>
          </div>

          <!-- card -->
          <div
            class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
          >
            <img src="./assets/img/icon.png" class="w-10" alt="" />
            <h1 class="font-medium text-lg dark:text-white">
              Web Applications
            </h1>
            <p class="text-gray-400">
              I Building robust web applications using modern front-end
              frameworks (Vue.js, NuxtJs) and scalable back-end technologies
              (Laravel, PHP, Nest.js).
            </p>
            <a href="#" class="text-indigo-600 font-semibold" bv>Read More</a>
          </div>

          <!-- card -->
          <div
            class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
          >
            <img src="./assets/img/icon.png" class="w-10" alt="" />
            <h1 class="font-medium text-lg dark:text-white">
              Custom CRM & Admin Dashboards
            </h1>
            <p class="text-gray-400">
              I build custom CRM systems tailored to specific business needs.
            </p>
            <a href="#" class="text-indigo-600 font-semibold" bv>Read More</a>
          </div>

          <!-- card -->
          <div
            class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
          >
            <img src="./assets/img/icon.png" class="w-10" alt="" />
            <h1 class="font-medium text-lg dark:text-white">
              DevOps & Deployments
            </h1>
            <p class="text-gray-400">
              I set up development environments, deploy web applications on
              cloud platforms (AWS, GCP, DigitalOcean, Vercel, Netlify), and
              manage CI/CD pipelines with Git version control.
            </p>
            <a href="#" class="text-indigo-600 font-semibold" bv>Read More</a>
          </div>

          <!-- card -->
          <div
            class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
          >
            <img src="./assets/img/icon.png" class="w-10" alt="" />
            <h1 class="font-medium text-lg dark:text-white">
              Maintenance & Support
            </h1>
            <p class="text-gray-400">
              I provide ongoing support for web applications, including bug
              fixes, performance optimization, feature enhancements, and
              ensuring security and uptime.
            </p>
            <a href="#" class="text-indigo-600 font-semibold" bv>Read More</a>
          </div>

          <!-- card -->
          <div
            class="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
          >
            <img src="./assets/img/icon.png" class="w-10" alt="" />
            <h1 class="font-medium text-lg dark:text-white">
              Consulting, Mentoring, and Code Review
            </h1>
            <p class="text-gray-400">
              I offer consulting, mentoring, and code review services to help
              improve your development practices, enhance your coding skills,
              and ensure high-quality code.
            </p>
            <a href="#" class="text-indigo-600 font-semibold" bv>Read More</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Works and Projects -->
    <div id="works" class="pt-10 dark:bg-slate-900">
      <div class="container mx-auto">
        <!-- top -->
        <div class="flex flex-col gap-3 items-center">
          <h1 class="text-indigo-600 font-bold">PORTFOLIO</h1>
          <h1 class="text-3xl dark:text-white">Works & Projects</h1>
          <p class="w-1/2 text-center text-gray-400">
            I help designers, small agencies and businesses bring their ideas to
            life. Powered by Figma, VS Code and coffee, I turn your requirements
            into a well-designed websites.
          </p>
        </div>
        <!-- bottom -->
        <div class="flex flex-wrap p-5 sm:p-0 justify-between">
          <!-- card -->
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-110 m-1"
          >
            <img src="./assets/img/item.png" alt="" />
          </div>

          <!-- card -->
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-110 m-1"
          >
            <img src="./assets/img/item.png" alt="" />
          </div>

          <!-- card -->
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-110 m-1"
          >
            <img src="./assets/img/item.png" alt="" />
          </div>

          <!-- card -->
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-110 m-1"
          >
            <img src="./assets/img/item.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="dark:bg-slate-900">
      <div class="container mx-auto pt-10" id="contacts">
        <!-- top -->
        <div class="flex flex-col gap-3 items-center">
          <h1 class="text-indigo-600 font-bold">CONTACT</h1>
          <h1 class="text-3xl dark:text-white">Have a Question?</h1>
          <p class="w-1/2 text-center text-gray-400">
            Do you have an idea? Let's discuss it and see what we can do
            together.
          </p>
        </div>
        <!-- bottom -->
        <form action="" class="flex p-8 flex-col gap-5 items-center mt-5">
          <input
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:text-white dark:ring-0"
            type="text"
            placeholder="Name"
          />
          <input
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:text-white dark:ring-0"
            type="email"
            placeholder="Email"
          />
          <textarea
            name=""
            rows="10"
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:text-white dark:ring-0"
            id=""
            placeholder="Type here..."
          ></textarea>
          <button
            class="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer"
          >
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

        <span class="text-white hidden md:block font-medium"
          >© 2025 JudeCrafts. Design with ♥ by Jude</span
        >

        <div class="flex gap-2">
          <img
            src="./assets/img/facebook.png"
            class="w-4 cursor-pointer"
            alt=""
          />
          <img
            src="./assets/img/instagram.png"
            class="w-4 cursor-pointer"
            alt=""
          />
          <img
            src="./assets/img/twitter.png"
            class="w-4 cursor-pointer"
            alt=""
          />
          <img
            src="./assets/img/linkedin.png"
            class="w-4 cursor-pointer"
            alt=""
          />
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
</script>
<style scoped>
@import "auto-typer-vue3/dist/style.css";
#main-auto-typer {
  color: red;
}
</style>

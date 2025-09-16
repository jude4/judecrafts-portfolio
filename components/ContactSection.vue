<template>
  <ShuffleSection
    id="contact"
    :z-index="40"
    bg-class="bg-slate-100 dark:bg-black"
    :hide-scrollbar="true"
  >
    <!-- Section Header -->
    <div
      class="text-center mb-12 w-full"
      v-animate-on-scroll="{
        initial: 'opacity-0 translate-y-8',
        final: 'opacity-100 translate-y-0',
      }"
    >
      <h2
        class="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest"
      >
        Contact
      </h2>
      <h3
        class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2"
      >
        Have a Project in Mind?
      </h3>
      <p class="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
        Let's discuss your idea and see how we can create something amazing
        together.
      </p>
    </div>

    <div class="max-w-xl mx-auto">
      <!-- Success Message -->
      <div
        v-if="success"
        class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md relative mb-6"
        role="alert"
      >
        <strong class="font-bold">Success!</strong>
        <span class="block sm:inline"> Your message has been sent.</span>
      </div>

      <!-- Error Message -->
      <div
        v-if="error"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative mb-6"
        role="alert"
      >
        <strong class="font-bold">Oops!</strong>
        <span class="block sm:inline"> {{ error }}</span>
      </div>

      <!-- Form -->
      <form
        v-if="!success"
        @submit.prevent="handleSubmit"
        class="flex flex-col gap-6"
      >
        <input
          v-model="formData.name"
          name="name"
          class="p-3 w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          type="text"
          placeholder="Your Name"
          required
          v-animate-on-scroll="{
            initial: 'opacity-0 scale-95',
            final: 'opacity-100 scale-100',
            delay: 'delay-100',
          }"
        />
        <input
          v-model="formData.email"
          name="email"
          class="p-3 w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          type="email"
          placeholder="Your Email"
          required
          v-animate-on-scroll="{
            initial: 'opacity-0 scale-95',
            final: 'opacity-100 scale-100',
            delay: 'delay-200',
          }"
        />
        <textarea
          v-model="formData.message"
          name="message"
          rows="6"
          class="p-3 w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          placeholder="Your Message..."
          required
          v-animate-on-scroll="{
            initial: 'opacity-0 scale-95',
            final: 'opacity-100 scale-100',
            delay: 'delay-300',
          }"
        ></textarea>
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 transition-colors disabled:bg-indigo-400 disabled:cursor-not-allowed flex items-center justify-center"
          v-animate-on-scroll="{
            initial: 'opacity-0 scale-95',
            final: 'opacity-100 scale-100',
            delay: 'delay-400',
          }"
        >
          <span v-if="!loading">Send Message</span>
          <span v-else>
            <Icon name="ph:spinner-gap-duotone" class="w-6 h-6 animate-spin" />
          </span>
        </button>
      </form>
    </div>
  </ShuffleSection>
</template>

<script setup>
const formData = ref({
  name: "",
  email: "",
  message: "",
});

const loading = ref(false);
const success = ref(false);
const error = ref("");

async function handleSubmit() {
  loading.value = true;
  error.value = "";

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: formData.value,
    });

    success.value = true;
    formData.value = { name: "", email: "", message: "" }; // Clear form
  } catch (e) {
    error.value = "Something went wrong. Please try again.";
  } finally {
    loading.value = false;
  }
}
</script>

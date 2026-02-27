<template>
  <ShuffleSection
    id="contact"
    :z-index="40"
    bg-class="bg-slate-100 dark:bg-black"
    :hide-scrollbar="true"
  >
    <!-- Section Header -->
    <div
      class="text-center mb-16 w-full"
      v-animate-on-scroll
    >
      <h2
        class="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em]"
      >
        Get In Touch
      </h2>
      <h3
        class="text-4xl md:text-5xl font-black text-surface-900 dark:text-white mt-4"
      >
        Let's build something <span class="text-gradient">extraordinary.</span>
      </h3>
      <p class="text-surface-600 dark:text-surface-400 mt-6 max-w-2xl mx-auto text-lg">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>
    </div>

    <div class="max-w-2xl mx-auto glass dark:glass-dark p-8 md:p-12 rounded-[2rem] shadow-2xl" v-animate-on-scroll="{ initial: { opacity: 0, scale: 0.95 } }">
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
        class="flex flex-col gap-8"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="text-sm font-semibold text-surface-600 dark:text-surface-400 ml-1">Your Name</label>
            <input
              v-model="formData.name"
              name="name"
              class="p-4 w-full bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-semibold text-surface-600 dark:text-surface-400 ml-1">Email Address</label>
            <input
              v-model="formData.email"
              name="email"
              class="p-4 w-full bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>
        <div class="space-y-2">
          <label class="text-sm font-semibold text-surface-600 dark:text-surface-400 ml-1">Project Details</label>
          <textarea
            v-model="formData.message"
            name="message"
            rows="5"
            class="p-4 w-full bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
            placeholder="Tell me about your project..."
            required
          ></textarea>
        </div>
        <MagneticButton>
          <button
            type="submit"
            :disabled="loading"
            class="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!loading">Send Message</span>
            <Icon v-if="!loading" name="mdi:send" class="w-5 h-5" />
            <Icon v-else name="ph:spinner-gap-duotone" class="w-6 h-6 animate-spin" />
          </button>
        </MagneticButton>
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

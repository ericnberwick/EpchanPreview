<template>
  <div class="w-screen h-screen bg-gray-800">
    <Navbar page="email" />
    <div class="bg-gray-800">
      <div class="px-8 py-24 bg-gray-800">
        <div class="container mx-auto text-center ">
          <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white mb-4">
            Contact</h2>
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-4 font-normal !text-gray-500">
            Send a message below</p>
        </div>

        <div class="space-x-2 max-w-md mx-auto my-auto mt-5 border border-border px-6 py-12  rounded-lg">
          <div class="mb-4 ml-2">
            <label for="email" class="block text-white text-sm font-bold mb-2">Your Name</label>
            <input v-model="name" type="email" id="email" name="email" placeholder="John Smith" required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500  text-grey">
          </div>

          <div class="mb-4">
            <label for="email" class="block text-white text-sm font-bold mb-2">Your Email</label>
            <input v-model="email" type="email" id="email" name="email" placeholder="john@example.com" required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500  text-grey">
          </div>

          <div class="mb-6">
            <label for="message" class="block text-white text-sm font-bold mb-2">Your Message</label>
            <textarea id="message" name="message" rows="4" placeholder="How can we help you?" v-model="message" required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500  text-grey"></textarea>
          </div>

          <button @click="sendEmail()" type="submit"
            class="mb-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            Send Message
          </button>

          <transition name="fade">
            <div v-show="sentMessage" class=" border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
              role="alert">
              <div class="flex">
                <div class="py-1">
                  <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                      d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p class="font-bold">Message sent successfully</p>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <Footer class="mt-72"></Footer>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app';
import { ref } from 'vue';
import Footer from '../components/Footer.vue';

const sentMessage = ref<boolean>(false);
const email = ref<string>('');
const message = ref<string>('');
const name = ref<string>('');

const sendEmail = async () => {
  const { data, error } = await useFetch('/api/send', {
    method: 'POST',
    body: JSON.stringify({ email: email.value, message: message.value, name: name.value }),
  });

  if (error.value) {
    console.error('Error sending email:', error.value);
  } else {
    console.log(message.value, 'Email sent from', email.value, 'successfully :', data.value);
  }

  email.value = '';
  message.value = '';
  name.value = '';
  sentMessage.value = true;

  setTimeout(() => {
    sentMessage.value = false;
  }, 5000);
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
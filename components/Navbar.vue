<template>
  <div class="w-full bg-gray-800">
    <nav class="">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-24 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button type="button" @click="toggleNavbar"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">

              <img class="h-8 w-auto white-svg" src="public/img/candlestick.svg">
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <NuxtLink to="/"
                  :class="['rounded-md px-3 py-2 text-sm font-medium', page === 'home' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']">
                  Home</NuxtLink>

                <NuxtLink href="financial-machine-learning"
                  :class="['rounded-md px-3 py-2 text-sm font-medium', page === 'financial-machine-learning' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']">
                  Financial Machine Learning</NuxtLink>

                <NuxtLink href="workshops"
                  :class="['rounded-md px-3 py-2 text-sm font-medium', page === 'workshops' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']">
                  Workshops</NuxtLink>

                <NuxtLink to="/books"
                  :class="['rounded-md px-3 py-2 text-sm font-medium', page === 'books' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']">
                  Books</NuxtLink>

                <NuxtLink href="/investment-management"
                  :class="['rounded-md px-3 py-2 text-sm font-medium', page === 'investment-management' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']">
                  Investment Management</NuxtLink>

                <NuxtLink to="/about"
                  :class="['rounded-md px-3 py-2 text-sm font-medium', page === 'about' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']">
                  About</NuxtLink>

                <NuxtLink href="/contact"
                  :class="['rounded-md px-3 py-2 text-sm font-medium', page === 'email' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']">
                  Contact</NuxtLink>

              </div>
            </div>
          </div>

        </div>
      </div>

      <transition enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 transform -translate-y-2" enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition ease-in duration-200" leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2">
        <div v-show="navbarPanelOpen" class="w-full">
          <div class="flex flex-col">
            <NuxtLink to="/" :class="[
              'rounded-md px-3 py-2 text-sm font-medium',
              page === 'home'
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            ]">
              Home
            </NuxtLink>
            <NuxtLink href="financial-machine-learning" :class="[
              'rounded-md px-3 py-2 text-sm font-medium',
              page === 'financial-machine-learning'
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            ]">
              Financial Machine Learning
            </NuxtLink>
            <NuxtLink href="workshops" :class="[
              'rounded-md px-3 py-2 text-sm font-medium',
              page === 'workshops'
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            ]">
              Workshops
            </NuxtLink>
            <NuxtLink to="/books" :class="[
              'rounded-md px-3 py-2 text-sm font-medium',
              page === 'books'
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            ]">
              Books
            </NuxtLink>
            <NuxtLink href="/investment-management" :class="[
              'rounded-md px-3 py-2 text-sm font-medium',
              page === 'investment-management'
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            ]">
              Investment Management
            </NuxtLink>
            <NuxtLink to="/about" :class="[
              'rounded-md px-3 py-2 text-sm font-medium',
              page === 'about'
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            ]">
              About
            </NuxtLink>
            <NuxtLink href="/contact" :class="[
              'rounded-md px-3 py-2 text-sm font-medium',
              page === 'email'
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            ]">
              Contact
            </NuxtLink>
          </div>
        </div>
      </transition>


    </nav>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'

const navbarPanelOpen = ref(false);

const props = defineProps({
  page: {
    type: String,
    required: true
  }
})

onMounted(() => {
  navbarPanelOpen.value = false;
});

const toggleNavbar = () => {
  navbarPanelOpen.value = !navbarPanelOpen.value
  console.log("navbar toggled : ", navbarPanelOpen.value);
}
</script>

<style>
.white-svg {
  filter: invert(100%);
}
</style>
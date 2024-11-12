<template>
  <div class="grid grid-cols-5 gap-4 ">
    <div class="col-span-3 flex items-center justify-center">
      <div class="ml-48 m-4  w-min lg:ml-0">
        <h2 class=" font-bold text-7xl w-min">QTS</h2>
        <h2 class=" font-bold text-7xl w-min">Capital</h2>
        <h2 class=" font-bold text-7xl w-min">Management</h2>
        <h3 class="mt-4  text-xl font-medium text-gray-300  ">{{ bannerData.fields.description }}</h3>
        <div class="mt-4 ">
          <a class="inline-flex items-center gap-4 rounded border border-indigo-600 bg-indigo-600 px-16 py-4 text-white hover:bg-indigo-800 transition-all hover:text-gray-100 focus:outline-none focus:ring active:text-indigo-500"
            href="https://qtscm.com/" target="_blank">
            <span class="text-sm font-medium"> Find out more </span>

            <svg class="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="col-span-2 col-start-4 lg:block hidden">
      <img :src="'https:' + bannerData.fields.picture.fields.file.url" width="600">
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  bannerData: {
    type: Object,
    required: true
  }
})
</script>
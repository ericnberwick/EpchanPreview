<template>
  <div class="relative grid grid-cols-1 bg-clip-border rounded-xl bg-gray-800 text-white shadow-md border border-blue-gray-100 transition-all duration-300 ease-in-out
             hover:border-green-500 hover:shadow-lg h-[465px]">
    <div
      class="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-white shadow-none !m-0 p-6">
      <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white capitalize ">
        {{ course.fields.courseName }}</h5>
      <RichTextRenderer
        class="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500"
        :document="course.fields.briefDescription" />
      <h3
        class="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4">
        {{ course.fields.price }}<span
          class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 -translate-y-0.5 self-end opacity-70"></span>
      </h3>
    </div>
    <div class="p-6 border-t border-blue-gray-50">
      <ul class="flex flex-col gap-3" v-for="(item, index) in course.fields.whatsIncluded.content[0].content"
        :key="index">
        <li class="flex items-center gap-3 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
          <p class="block antialiased text-white font-sans text-sm leading-normal font-normal text-inherit">
            {{ item.content[0].content[0].value }}</p>
        </li>
      </ul>
    </div>
    <div class="flex flex-col justify-between m-4">
      <a :href="course.fields.stripeLink.content[0].content[0].value" class="mt-auto">
        <button
          class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full"
          type="button">buy now</button>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

defineProps({
  course: {
    type: Object,
    required: true
  }
})
</script>
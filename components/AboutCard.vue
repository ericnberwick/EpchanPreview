<template>
  <div class="w-full flex justify-center">
    <div class="w-11/12 my-5 ">
      <div class="mx-auto rounded-xl overflow-hidden">
        <div class="flex rounded-xl bg-gray-800">
          <div id="left side where pic is" class="w-4/12 flex items-center justify-center" style="height: 35rem;">
            <img :src="'https:' + about.fields.profilePicture.fields.file.url" alt="image" loading="lazy"
              class="rounded-2xl object-cover" style="width: 15rem; height: 280px;">
          </div>
          <div id="right side where text is" class="w-7/12 bg-gray-800 text-gray-200 py-5 pr-10">
            <RichTextRenderer :document="about.fields.description" class="text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>



  <!-- <div class="w-full border-2 border-red-700 m">
    <div class="flex justify-center">
      <div id="left side where pic is" class="w-2/3 border-2 border-blue-700">
        <RichTextRenderer :document="about.fields.description" class="text-white" />
      </div>

      <div id="right side where text is" class="w-1/3 border-2 border-purple-700 bg-gray-800 text-gray-200">
        <div class="h-full flex items-center justify-center align-items  bg-gray-800">
          <img :src="'https:' + about.fields.profilePicture.fields.file.url" alt="image" loading="lazy"
            class="rounded-2xl " style="width: 15rem;">
        </div>
      </div>
    </div>
  </div> -->


</template>

<!-- <div class="py-2 bg-white border-2 border-black rounded-xl w-fit mb-5">
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
      <div class="md:5/12 lg:w-5/12">
        <img :src="'https:' + about.fields.profilePicture.fields.file.url" alt="image" loading="lazy"
          style="width: 30rem;" class="rounded-xl">
      </div>
      <div class="md:7/12 lg:w-6/12">
        <h2 class="text-2xl text-gray-900 font-bold md:text-4xl mb-4">{{ about.fields.name }}</h2>
        <RichTextRenderer :document="about.fields.description" class="mt-4 text-gray-600" />
      </div>
    </div>
  </div>
</div> -->

<script setup>
import { defineProps, ref, onMounted } from 'vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

const props = defineProps({
  about: {
    type: Object,
    required: true
  }
})
</script>

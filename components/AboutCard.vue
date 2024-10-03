<template>
  <div class="w-full flex justify-center">
    <div class="w-11/12 my-5 border-2 border-white rounded-xl">
      <div class="mx-auto rounded-xl overflow-hidden">
        <div class="flex rounded-xl bg-gray-800">
          <div id="left side where pic is" class="w-4/12 flex items-center justify-center " style="height: 35rem;">
            <img :src="'https:' + about.fields.profilePicture.fields.file.url" alt="image" loading="lazy"
              class="rounded-2xl object-cover" style="width: 20rem; height: 30rem;">
          </div>
          <div id="right side where text is" class="w-7/12 bg-gray-800 text-gray-200 py-5 pr-1 mt-8 ">
            <RichTextRenderer :document="about.fields.description" class="text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

defineProps({
  about: {
    type: Object,
    required: true
  }
})
</script>

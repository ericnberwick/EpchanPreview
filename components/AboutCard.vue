<template>
  <ScrollTransition>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 2xl:grid-cols-2">
        <div class="">
          <img class="object-cover object-top" :src="'https:' + about.fields.profilePicture.fields.file.url" alt="">
        </div>
        <div class="flex bg-gray-100 p-10">
          <div class="mb-auto mt-auto max-w-2xl">
            <h1 class="text-3xl">{{ about.fields.name }}</h1>
            <RichTextRenderer :document="about.fields.description" />
            <div class="hidden lg:block">
              <RichTextRenderer :document="about.fields.description2" />
            </div>
            <NuxtLink to="/contact">
              <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </ScrollTransition>
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

<style scoped>
:deep(p) {
  margin-bottom: 1em;
}
</style>
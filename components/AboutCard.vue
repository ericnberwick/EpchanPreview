<template>
  <div class="flex justify-center">

    <div class=" overflow-hidden">
      <div class="grid grid-cols-3 grid-rows-2 bg-gray-800 p-8">

        <div class=" col-start-1 row-start-1 flex items-center justify-center ">
          <img :src="'https:' + about.fields.profilePicture.fields.file.url" alt="image" loading="lazy"
            class="rounded-2xl object-cover " style="height: 25rem;">
        </div>

        <div class="col-start-2 row-start-1 col-span-2 text-white flex  justify-center mt-10">
          <p class="text-lg font-medium text-gray-300 ">
            <RichTextRenderer :document="about.fields.description" :renderMark="renderMark" :renderNode="renderNode" />
          </p>
        </div>

        <div class="col-start-1 row-start-2 col-span-3 grid grid-cols-1 grid-rows-2 ">
          <p class="text-lg font-medium text-gray-300">
            <RichTextRenderer :document="about.fields.description2" :renderMark="renderMark" :renderNode="renderNode" />
          </p>
          <div class=" h-1/2 w-full">
            <EducationCard></EducationCard>
          </div>
        </div>


      </div>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

defineProps({
  about: {
    type: Object,
    required: true
  }
})

const renderMark = {
  [MARKS.BOLD]: (text) => `<strong>${text}</strong>`,
  [MARKS.ITALIC]: (text) => `<em>${text}</em>`,
  [MARKS.UNDERLINE]: (text) => `<u>${text}</u>`,
}

const renderNode = {
  [BLOCKS.PARAGRAPH]: (node, next) => `<p style="white-space: pre-wrap;">${next(node.content)}</p>`,
  [BLOCKS.HEADING_1]: (node, next) => `<h1>${next(node.content)}</h1>`,
  [BLOCKS.HEADING_2]: (node, next) => `<h2>${next(node.content)}</h2>`,
  // Add more block types as needed
}
</script>

<style scoped>
/* Additional styling if needed */
:deep(p) {
  margin-bottom: 1em;
  /* Adds space between paragraphs */
}
</style>

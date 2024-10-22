<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 grid-rows-1 bg-gray-800 p-8 ">



    <div class=" col-start-1 row-start-1 flex items-center justify-center 0">
      <img src="public/img/Ernie.jpg" alt="image" loading="lazy" class="">
    </div>

    <div class="lg:col-start-2 lg:row-start-1 lg:col-span-2 text-white lg:flex justify-center  p-4">
      <div class="lg:hidden block">
        <img src="public/img/Ernie.jpg" alt="image" class="">
      </div>
      <p class="text-lg font-medium text-gray-300 ">
        <RichTextRenderer :document="about.fields.description" :renderMark="renderMark" :renderNode="renderNode" />
        <RichTextRenderer class="hidden lg:block" :document="about.fields.description2" :renderMark="renderMark"
          :renderNode="renderNode" />
      </p>

    </div>

    <div class="col-start-1 row-start-2 col-span-3 grid grid-cols-1 xl:grid-rows-2 lg:hidden block">
      <p class="text-lg font-medium text-gray-300">
        <RichTextRenderer :document="about.fields.description2" :renderMark="renderMark" :renderNode="renderNode" />
      </p>
      <!-- <div class=" h-1/2 w-full">
            <EducationCard></EducationCard>
          </div> -->
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

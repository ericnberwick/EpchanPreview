<template>
  <div class=" flex justify-center w-full  hover:border-green-500 transition duration-300 ease-out">
    <div class="card__content relative transition-transform duration-1000 ">
      <div class="container grid  gap-2 pr-2">
        <div
          class="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item grid-cols-1 lg:grid-cols-3 border-2 border-green-900">
          <div class=" relative bg-clip-border text-gray-700 m-0 overflow-hidden flex items-center justify-center">
            <a :href="review.fields.linkToBook" class="">
              <div class="relative  w-fit overflow-hidden">
                <img :src="'https:' + review.fields.bookImage.fields.file.url"
                  alt="Revolutionizing Our Production Process" width="400px"
                  class="transition-transform duration-500 ease-in-out transform scale-105 hover:scale-110">
                <span v-if="review.fields.new == true"
                  class="absolute bg-green-600 text-center text-white font-semibold py-1 w-full md:w-[190px] transform md:rotate-45 top-0 md:top-[32px] right-0 md:right-[-40px]">
                  New
                </span>
              </div>
            </a>
          </div>
          <div
            class="p-6 px-2 sm:pr-6 sm:pl-4 text-white p-6 px-2 sm:pr-6 sm:pl-4 text-white col-start-1 lg:col-start-2 col-span-1 lg:col-span-2">
            <a :href="review.fields.linkToBook"
              class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-green-500">{{
                review.fields.title }}</a>
            <RichTextRenderer
              class="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500"
              :document="review.fields.description" :renderMark="renderMark" :renderNode="renderNode" />

            <div class="mt-2" v-if="review.fields.praise">
              <h2
                class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug  mb-2 normal-case ">
                Praise</h2>
              <RichTextRenderer
                class="mt-8 block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-500"
                :document="review.fields.praise" :renderMark="renderMark" :renderNode="renderNode" />
            </div>
            <a :href="review.fields.linkToBook">
              <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6"
                type="button">buy now</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

const props = defineProps({
  review: {
    type: Object,
    required: true
  }
})

const praiseExists = ref(false);

onMounted(() => {
  if (props.review.fields.praise) {
    praiseExists.value = true;
  } else {
    praiseExists.value = false;
  }
});

const renderMark = {
  [MARKS.BOLD]: (text) => `<strong>${text}</strong>`,
  [MARKS.ITALIC]: (text) => `<em>${text}</em>`,
  [MARKS.UNDERLINE]: (text) => `<u>${text}</u>`,
}

const renderNode = {
  [BLOCKS.PARAGRAPH]: (node, next) => `<p style="white-space: pre-wrap;">${next(node.content)}</p>`,
  [BLOCKS.HEADING_1]: (node, next) => `<h1>${next(node.content)}</h1>`,
  [BLOCKS.HEADING_2]: (node, next) => `<h2>${next(node.content)}</h2>`,
}
</script>
<template>
    <div class="container mx-auto mt-10">
      
      <div class="container mx-auto border-black border-2 rounded-xl p-3">
        <div class="grid grid-cols-3 grid-rows-3 gap-4">
          <!-- Image spans 2 rows, located at column 1, row 1 -->
          <img :src="'https:' + review.fields.bookImage.fields.file.url" style="height: 400px;" alt="Descriptive Text" class="col-start-1 col-end-2 row-start-1 row-end-3 ml-3 mt-3">
          
          <!-- Heading in column 1, row 2 -->
          <h1 class="col-start-2 col-end-2 row-start-1 row-end-3 text-xl font-semibold italic">{{ review.fields.title }}</h1>
  
          <!-- Button in column 1, row 3 -->
          <div class="col-start-3 col-end-4 row-start-1 row-end-2 flex items-center justify-center">
            <a :href="review.fields.amazonLink.content[0].content[0].value">
                
                <button class="bg-yellow-600 text-white font-bold py-2 px-4 rounded hover:bg-yellow-700 focus:outline-none focus:shadow-outline">
                     Amazon
                </button>
            </a>
  </div>
  
          
          
          <!-- Paragraph spans 2 columns, located at column 2, row 2 -->
          <div class="col-start-2 col-end-4 row-start-2 row-end-4">
            <RichTextRenderer :document="review.fields.description" />
          </div>
  
          <!-- Div spans 3 rows in column 3 -->
          <div class="col-start-1 col-end-4 row-start-3 row-end-4 bg-gray-300 p-4">
            <RichTextRenderer :document="review.fields.praise" />
          </div>
        </div>
      </div>
  
      
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  import RichTextRenderer from 'contentful-rich-text-vue-renderer';
  
  const props = defineProps({
    review: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style>
  /* You can add component-specific styles here */
  </style>
  
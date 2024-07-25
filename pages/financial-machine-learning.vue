<template>
    <div class="">
      <Navbar page="financial-machine-learning"/>
  
      <div class="px-8 py-24">
  <div class="container mx-auto text-center">
    <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">Financial Machine Learning</h2>
    <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">Check out our affordable pricing options for delicious meals.</p>
  </div>

  <div class="ml-20 w-screen" v-for="paragraph in paragraphs" :key="paragraph.sys.id">
    <h2 class="font-bold my-4">{{ paragraph.fields.title }}</h2>
    <RichTextRenderer class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500" :document="paragraph.fields.body" />
  </div>
  
</div>
      
  
  
    </div>
  </template>
  
  
<script setup>
import { ref, onMounted } from "vue";
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import {Entry} from "contentful";



const config = useRuntimeConfig();
// Define a ref to hold fetched data
const paragraphs = ref([]);
const spaceName = config.public.CONTENTFUL_SPACE_ID;
const accessTokenName = config.public.CONTENTFUL_ACCESS_KEY;

let client;



async function fetchEntries() {
  const contentful = await import("contentful");
  client = contentful.createClient({
    space: spaceName,
    accessToken: accessTokenName,
  });

  


  const res = await client.getEntries({
    content_type: "financialMachineLearningParagraph", // Ensure this matches the actual ID in Contentful
  });
  // Assign data to reviews ref
  console.log("res.items ", res.items)
  paragraphs.value = res.items ;
}

// Fetch data on component mount
onMounted(() => {
  fetchEntries();
});
</script>
  
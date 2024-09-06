<template>
  <div class="">
    <Navbar page="financial-machine-learning" />


    <div class="px-8 py-24 bg-gray-800">
      <div class="container mx-auto text-center">
        <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white mb-4">
          Financial Machine Learning</h2>
        <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
        </p>
      </div>

      <div class="w-full h-56 overflow-hidden mb-8">
        <NuxtImg src="img/finance-banner.jpg" class="w-full h-full object-cover"
          style="object-position: center bottom;"></NuxtImg>
      </div>

      <div class="w-full text-white">
        <div class=" " v-for="paragraph in sortedParagraphs">
          <h2 v-if="paragraph.fields.title != 'notitle'" class="font-bold my-4 text-xl text-white">{{
            paragraph.fields.title }}
          </h2>
          <RichTextRenderer
            class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal text-white"
            :document="paragraph.fields.body" />
        </div>
        <Footer class="mt-40"></Footer>

      </div>





    </div>



  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { Entry } from "contentful";

var sortedParagraphs = ref([]);

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
  paragraphs.value = res.items;
  sortedParagraphs.value = res.items.slice().sort((a, b) => a.fields.order - b.fields.order);
  console.log("sortedparagrahps", sortedParagraphs);
}

// Fetch data on component mount
onMounted(() => {
  fetchEntries();
});
</script>
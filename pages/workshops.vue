<template>
    <Navbar page="workshops"/>
    <section class="px-8 py-24">
  <div class="container mx-auto text-center">
    <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">Workshops</h2>
    <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">Check out our affordable pricing options for delicious meals.</p>
  </div>

  <div class="w-full h-56 overflow-hidden ">
    <img src="public/img/workshop.jpg" class="w-full h-full object-cover" style="object-position: center bottom;">
  </div>

  <div class="mt-24">
    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="course in courses" :key="course.sys.id">
        <CourseCard :course="course"/>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import {Entry} from "contentful";



const config = useRuntimeConfig();
// Define a ref to hold fetched data
const courses = ref([]);
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
    content_type: "courseCard", // Ensure this matches the actual ID in Contentful
  });
  // Assign data to reviews ref
  console.log("res.items ", res.items)
  courses.value = res.items ;
}

// Fetch data on component mount
onMounted(() => {
  fetchEntries();
});
</script>
<template>
  <div class="container mx-auto mt-10">
    <Navbar />
    <div class="w-full flex justify-left">
      <h1 class="mt-6 text-4xl font-bold text-center mb-8">Book Reviews</h1>
    </div>
    <hr class="border-2 border-black">
    <div v-for="review in reviews" :key="review.sys.id">
      <BookCard :review="review" />
    </div>


  </div>
</template>



<script setup>
import { ref, onMounted } from "vue";
import * as contentful from "contentful";

const config = useRuntimeConfig();

const reviews = ref([]);
const spaceName = config.public.CONTENTFUL_SPACE_ID;
const accessTokenName = config.public.CONTENTFUL_ACCESS_KEY;

// Create Contentful client
const client = contentful.createClient({
  space: spaceName,
  accessToken: accessTokenName,
});

async function fetchEntries() {
  console.log("spaceName: ", spaceName);
  const res = await client.getEntries({
    content_type: "book", // Ensure this matches the actual ID in Contentful
  });
  // Assign data to reviews ref
  reviews.value = res.items;
  console.log("res: ", res);
}

// Fetch data on component mount
onMounted(() => {
  fetchEntries();
});
</script>

<template>
    <div class="">
      <Navbar page="book" />
  
      <div class="container mx-auto text-center mt-2">
    <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">Books</h2>
    <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">Explores Ernest's collection of books he has written over the years</p>
  </div>
      <hr class="w-full border-2 border-black">
      <div class="ml-20 w-screen" v-for="review in reviews" :key="review.sys.id">
        <BookCard :review="review" />
      </div>
  
  
    </div>
  </template>
  
  
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const config = useRuntimeConfig();
  // Define a ref to hold fetched data
  const reviews = ref([]);
  const spaceName = config.public.CONTENTFUL_SPACE_ID;
  const accessTokenName = config.public.CONTENTFUL_ACCESS_KEY;
  
  let client;
  
  async function fetchEntries() {
    console.log("spaceName: ", spaceName);
    const contentful = await import("contentful");
    client = contentful.createClient({
      space: spaceName,
      accessToken: accessTokenName,
    });
  
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
  
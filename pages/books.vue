<template>
  <div class="">
    <Navbar page="books" />
    <div class="px-8 py-24 ">
      <div class="container mx-auto text-center ">
        <h2
          class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          Books</h2>
        <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
        </p>
      </div>

      <div class="w-full h-56 overflow-hidden mb-8">
        <NuxtImg src="img/booksbanner.jpg" class="w-full h-full object-cover" style="object-position: center ">
        </NuxtImg>
      </div>

    </div>

    <div class=" w-screen flex justify-center px-10">
      <div class=" grid gap-8 grid-cols-1 sm:grid-cols-2 ">
        <div v-for="review in reviews" :key="review.sys.id">
          <BookCard :review="review" class="w-full" />
        </div>
      </div>
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
  console.log("This new result is : ", res);
}

// Fetch data on component mount
onMounted(() => {
  fetchEntries();
});
</script>
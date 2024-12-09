<template>
  <div class=" h-screen bg-gray-800">
    <Navbar page="books" />
    <div class=" bg-gray-800">
      <div class="px-8 py-24 text-white">
        <div class="container mx-auto text-center text-white">
          <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white mb-4">
            Books</h2>
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
          </p>
        </div>

        <div class="w-full h-56 overflow-hidden mb-8 bg-gray-800">
          <NuxtImg src="img/booksbanner.jpg" class="w-full h-full object-cover rounded-xl"
            style="object-position: center ">
          </NuxtImg>
        </div>
      </div>
      <div class="mx-8">
        <LoadingCard v-if="isLoading" message="Loading Books..."></LoadingCard>
      </div>

      <Transition name="fade">
        <div v-if="!isLoading" class=" w-full flex justify-center px-10 bg-gray-800 text-white mb-16">
          <div class=" grid gap-8 grid-cols-1  text-white">
            <BookCard v-for="review in reviews" :key="review.sys.id" :review="review" class="w-full" />
            <PreviewBook class=""></PreviewBook>
          </div>
        </div>
      </Transition>
      <div class="bg-gray-800">
        <Footer class=""></Footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from '#imports';
import PreviewBook from "../components/PreviewBook.vue";

const config = useRuntimeConfig();
const reviews = ref([]);
const spaceName = config.public.CONTENTFUL_SPACE_ID;
const accessTokenName = config.public.CONTENTFUL_ACCESS_KEY;

let client;
const isLoading = ref(true);

onMounted(() => {
  fetchEntries();
  isLoading.value = false;
});

async function fetchEntries() {
  const contentful = await import("contentful");
  client = contentful.createClient({
    space: spaceName,
    accessToken: accessTokenName,
  });

  const res = await client.getEntries({
    content_type: "book",
  });

  reviews.value = res.items.slice().sort((a, b) => a.fields.order - b.fields.order);
}
</script>
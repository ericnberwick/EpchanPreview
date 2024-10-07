<template>
  <div class="h-screen bg-gray-800">
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
      <Transition name="fade">
        <div v-if="!isLoading" class="w - full text - white">
          <div class="rounded-xl border border-gray-700 bg-gray-800 px-8 py-4">
            <div v-for="paragraph in sortedParagraphs" :key="paragraph.sys.id">
              <ParagraphCard :paragraph="paragraph"></ParagraphCard>
            </div>
          </div>
        </div>
      </Transition>

      <LoadingCard v-if="isLoading" message="Loading content..."></LoadingCard>
      <div class="w-full mt-20">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from '#imports';

var sortedParagraphs = ref([]);
const isLoading = ref(true);

const config = useRuntimeConfig();
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

  paragraphs.value = res.items;
  sortedParagraphs.value = res.items.slice().sort((a, b) => a.fields.order - b.fields.order);
  console.log("sortedparagrahps", sortedParagraphs);
}

// Fetch data on component mount
onMounted(() => {
  fetchEntries();
  isLoading.value = false

});
</script>
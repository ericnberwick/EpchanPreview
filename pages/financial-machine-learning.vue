<template>
  <div class="h-screen bg-gray-800">
    <Navbar page="financial-machine-learning" />

    <div class="py-24">
      <div class="mt- flex justify-center">
        <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white mb-4">
          Financial Machine Learning</h2>

      </div>

      <div class="w-full h-56 overflow-hidden mb-8">
        <NuxtImg src="img/finance-banner.jpg" class="w-full h-full object-cover"
          style="object-position: center bottom;">
        </NuxtImg>
      </div>
    </div>
    <section class="bg-gray-800 px-8">
      <!-- Container -->
      <div class="pt-48">
        <!-- Component -->
        <div class="relative py-16 md:py-24 lg:py-32">
          <!-- Items -->
          <ParagraphCard v-for="(paragraph, index) in sortedParagraphs" :key="index" :paragraph="paragraph"
            class="bg-gray-800 ">
          </ParagraphCard>
        </div>
      </div>
    </section>
    <div class="w-full">
      <Footer></Footer>
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
  //console.log("sortedparagrahps", sortedParagraphs);
}

// Fetch data on component mount
onMounted(() => {
  fetchEntries();
  isLoading.value = false

});
</script>
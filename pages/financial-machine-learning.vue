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

      <div class="w-full h-56 overflow-hidden">
        <NuxtImg src="img/finance-banner.jpg" class="w-full  object-cover">
        </NuxtImg>
      </div>

      <div class="w-full">
        <div class=" " v-for="paragraph in sortedParagraphs" :key="paragraph.sys.id">
          <ParagraphCardLeft :paragraph="paragraph"></ParagraphCardLeft>
          <ParagraphCardRight :paragraph="paragraph"></ParagraphCardRight>
          <ParagraphSummaryCard :paragraph="paragraph"></ParagraphSummaryCard>
        </div>
      </div>

      <div class="w-full ">
        <section>
          <div class="mt-20 mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            <div class="mb-12 flex flex-col md:flex-row">
              <h1
                class="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj mb-4">
                Our Research Articles and Presentations</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div v-for="blog in blogs" :key="blog.sys.id">
                <BlogCard :blog="blog"></BlogCard>
              </div>
            </div>
          </div>
        </section>
      </div>

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
import BlogCard from "../components/BlogCard.vue";

var sortedParagraphs = ref([]);
const isLoading = ref(true);
const blogs = ref([])
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

  paragraphs.value = res.items;
  sortedParagraphs.value = res.items.slice().sort((a, b) => a.fields.order - b.fields.order);

  const blogCards = await client.getEntries({
    content_type: "financialMachineLearningBlogCard",
  });
  blogs.value = blogCards.items;
}

onMounted(() => {
  fetchEntries();
  isLoading.value = false
});
</script>
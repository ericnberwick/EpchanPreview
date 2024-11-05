<template>
  <div class="h-screen bg-gray-800">
    <Navbar page="workshops" />
    <section class="py-24 bg-gray-800">
      <div class="container mx-auto text-center">
        <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white mb-4">
          Workshops</h2>
        <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
        </p>
      </div>

      <div class="w-full h-56 overflow-hidden ">
        <NuxtImg src="/img/workshop.jpg" class="w-full h-full object-cover rounded-xl"
          style="object-position: center bottom;">
        </NuxtImg>
      </div>
      <div class="mx-8">
        <LoadingCard v-if="isLoading" message="Loading workshops..."></LoadingCard>
      </div>

      <div v-if="!isLoading" class="mt-24 mx-8">
        <div class="grid gap-8 lg:grid-cols-3 grid-cols-1 ">
          <div v-for="course in courses" :key="course.sys.id">
            <ScrollTransition>
              <CourseCard :course="course" class="border-4-border-red-900" />
            </ScrollTransition>
          </div>
        </div>
      </div>
      <BonusCourseCard class="mt-10 "></BonusCourseCard>
      <div class="mt-10">
        <Review></Review>
      </div>
      <Footer class="mt-20"></Footer>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from '#imports';
import BonusCourseCard from "../components/BonusCourseCard.vue";
import LoadingCard from "../components/LoadingCard.vue";

const config = useRuntimeConfig();
const courses = ref([]);
const spaceName = config.public.CONTENTFUL_SPACE_ID;
const accessTokenName = config.public.CONTENTFUL_ACCESS_KEY;

let client;
const isLoading = ref(true);

async function fetchEntries() {
  const contentful = await import("contentful");
  client = contentful.createClient({
    space: spaceName,
    accessToken: accessTokenName,
  });

  const res = await client.getEntries({
    content_type: "courseCard",
  });
  courses.value = res.items;
}

onMounted(() => {
  fetchEntries();
  isLoading.value = false
});
</script>
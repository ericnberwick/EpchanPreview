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
        <section class="bg-gray-800">
          <div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div class="md:flex md:items-end md:justify-between">
              <div class="">
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Reviews from our customers
                </h2>
              </div>
            </div>

            <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <WorkshopReviewCard v-for="review in reviews" :key="review.sys.id" :review="review"></WorkshopReviewCard>
              <blockquote class="flex h-full flex-col justify-center items-center bg-white p-6 shadow-sm sm:p-8">
                <div>
                  <div class="mt-4">
                    <p class="text-4xl font-bold text-blue-600 ">Enroll Now</p>
                    <a href=" https://buy.stripe.com/fZe4ig3Gf1rsfN64gj">
                      <button
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6"
                        type="button">Enroll now</button>
                    </a>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </section>
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
import WorkshopReviewCard from "../components/WorkshopReviewCard.vue";

const config = useRuntimeConfig();
const courses = ref([]);
const spaceName = config.public.CONTENTFUL_SPACE_ID;
const accessTokenName = config.public.CONTENTFUL_ACCESS_KEY;
const reviews = ref([]);

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

  const reviewRes = await client.getEntries({
    content_type: "workshopReviews",
  });

  reviews.value = reviewRes.items;
}

onMounted(() => {
  fetchEntries();
  isLoading.value = false
});
</script>
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

      <LoadingCard v-if="isLoading" message="Loading workshops..."></LoadingCard>

      <Transition name="fade">
        <div v-if="!isLoading" class="mt-24 mx-8">
          <div class="grid gap-8 lg:grid-cols-3 grid-cols-1 ">
            <div v-for="course in courses" :key="course.sys.id">
              <CourseCard :course="course" class="border-4-border-red-900" />
            </div>


          </div>

        </div>
      </Transition>
      <BonusCourseCard class="mt-10 "></BonusCourseCard>

      <div class="mt-10">
        <Review></Review>
      </div>


      <!-- <div class="mt-8 flex justify-center">
        <div class=" w-1/2  flex flex-col">
          <div class=" flex justify-center mt-6">
            <h2 class="text-white">Praise for our workshops</h2>
          </div>
          <div class=" flex justify-center mt-6">
            <p class="text-white"><i>“An excellent course by a great teacher. Ernie clearly explained and applied the
                different
                areas of Artificial Intelligence, provided invaluable insights as to their relative merits, and gave me
                the
                confidence to implement them in my own trading.”</i> – Dr Nikhil Shenai (Ph.D., Imperial College, BA,
              University
              of
              Cambridge), Founder of E K Technologies (Quantitative Trading & Development)</p>
          </div>

          <div class=" flex justify-center mt-6">
            <p class="text-white"><i>“While being familiar with the subject I truly enjoyed the material covered and the
                [options] course has certainly provided food for thought.”</i> – Laurent Hoffmann, Ph.D., Former Senior
              Quantitative
              Analyst, Structured Credit Trading, at Depfa Bank Asset Management Europe & RoW.</p>
          </div>

          <div class=" flex justify-center mt-6">
            <p class="text-white"><i>“…thank you again for the Momentum Strategies training course this week. It was
                very
                beneficial. I found your explanations of the concepts very clear and the examples well developed. I like
                the
                rigorous approach that you take to strategy evaluation.”</i> – Andrew B. (senior executive at a major
              Canadian
              bank.)</p>
          </div>

          <div class=" flex justify-content mt-6">
            <p class="text-white"><i>“…I have been very impressed with Ernie’s past workshops…”</i> – Stephen Hope,
              Former
              Head
              of
              Fixed Income Quantitative Trading Strategies, BNP Paribas.</p>
          </div>

          <div class=" flex justify-center mt-6">
            <p class="text-white"><i>“Ernie’s workshop offers particularly helpful insights in implementing profitable
                trading
                strategies and that’s beyond his books’ content. And he is one of the most patient and giving
                instructors
                I
                ever
                met“</i> – K.W. Fung, CQF, Founder of Quants Investment</p>
          </div>

          <div class=" flex justify-center mt-6">
            <p class="text-white"><i>“These workshops have provided me with enough familiarity and confidence to tackle
                the
                latest research. Just the segment on intermarket sweep orders in the MFT course was worth the price of
                admission
                to all three workshops I went to.“</i> – Cedric Yau</p>
          </div>

          <div class=" flex justify-center mt-6">
            <p class="text-white"><i>“Dr. Chan brings a practical approach to a difficult topic that helps students not
                only
                understand the topic at hand but why the topic is important in the applied field. I can’t speak highly
                enough
                about the course and instruction…”</i> – Anonymous student evaluation</p>
          </div>

          <div class=" flex justify-content mt-6">
            <p class="text-white"><i>“Dr. Chan … is a phenomenal instructor…”</i> – Anonymous student evaluation</p>
          </div>
        </div>
      </div> -->
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
// Define a ref to hold fetched data
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
    content_type: "courseCard", // Ensure this matches the actual ID in Contentful
  });
  // Assign data to reviews ref
  courses.value = res.items;
}

onMounted(() => {
  fetchEntries();
  isLoading.value = false
});
</script>
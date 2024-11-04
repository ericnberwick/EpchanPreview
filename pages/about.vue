<template>
  <div class="bg-gray-800  h-screen">
    <Navbar page="about" />

    <div class="bg-gray-800">
      <div class="px-8 pt-24  ">
        <div class="container mx-auto text-center">
          <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white mb-4">
            About</h2>
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
          </p>
        </div>
      </div>

      <div class="grid grid-cols-5">
        <div class="w-full col-span-5">
          <div v-for="profile in profiles" :key="profile.sys.id">
            <AboutCard :about="profile"></AboutCard>
          </div>
        </div>

        <div class="hidden xl:block col-start-2 col-span-3 w-full ">
          <ScrollTransition>
            <AnotherTimeline></AnotherTimeline>
          </ScrollTransition>
        </div>

        <div class="xl:hidden col-start-2 col-span-3 w-full mt-16">
          <ScrollTransition>
            <Timeline></Timeline>
          </ScrollTransition>
        </div>
      </div>

      <div class="mt-72">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from '#imports';
import Timeline from "../components/Timeline.vue";
import AnotherTimeline from "../components/AnotherTimeline.vue";
import AboutCard from "../components/AboutCard.vue";

const config = useRuntimeConfig();
const profiles = ref([]);
const spaceName = config.public.CONTENTFUL_SPACE_ID;
const accessTokenName = config.public.CONTENTFUL_ACCESS_KEY;
const isLoading = ref(true);
let client;

onMounted(() => {
  fetchEntries();
  isLoading.value = false
});

async function fetchEntries() {
  const contentful = await import("contentful");
  client = contentful.createClient({
    space: spaceName,
    accessToken: accessTokenName,
  });

  const res = await client.getEntries({
    content_type: "aboutProfile",
  });
  profiles.value = res.items;
}
</script>
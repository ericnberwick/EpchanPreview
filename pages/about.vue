<template>
  <div class="">
    <Navbar page="about" />

    <div class="px-8 pt-24">
      <div class="container mx-auto text-center">
        <h2
          class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          About</h2>
        <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
          Find out more about who we are</p>
      </div>

    </div>
    <div class="" v-for="profile in profiles" :key="profile.sys.id">
      <AboutCard :about="profile"></AboutCard>
    </div>
  </div>

</template>



<script setup>
import { ref, onMounted } from "vue";

const profile1 = {
  name: "Ernie P Chanie",
  description: "Suuuuu"
}

const config = useRuntimeConfig();
const profiles = ref([]);
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
    content_type: "aboutProfile", // Ensure this matches the actual ID in Contentful
  });
  profiles.value = res.items;
  console.log("res: ", res);
}

//Fetch data on component mount
onMounted(() => {
  fetchEntries();
});
</script>
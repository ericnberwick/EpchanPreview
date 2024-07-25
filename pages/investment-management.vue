<template>
  <div class="">
    <Navbar page="investment-management"/>

    <div class="px-8 py-24">
<div class="container mx-auto text-center">
  <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">Investment Management</h2>
  <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">Dr. Chan is the founder of QTS Capital Management, LLC., a commodity pool operator and commodity trading advisor. QTS manages a commodity pool (hedge fund) as well as individual brokerage accounts. Please visit www.qtscm.com for an overview of its service.</p>
</div>

</div>
    


  </div>
</template>



<script setup>
import { ref, onMounted } from "vue";

const profile1 = { 
  name : "Ernie P Chanie",
  description : "Suuuuu"
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

<template>
  <div class="">
    <Navbar page="investment-management" />

    <div class="px-8 py-24">
      <div class="container mx-auto text-center">
        <h2
          class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          Investment Management</h2>
        <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
        </p>
      </div>

      <div class="w-full h-56 overflow-hidden mb-8">
        <NuxtImg src="img/investment-management.jpg" class="w-full h-full object-cover"
          style="object-position: center bottom;"></NuxtImg>
      </div>


      <div class="2xl:container 2xl:mx-auto ">
        <div class="lg:w-10/12 w-full">
          <p class="font-normal text-base leading-6 text-gray-600 dark:text-white mt-6">Dr. Chan is the founder of QTS
            Capital Management, LLC., a commodity pool operator and commodity trading advisor. QTS manages a commodity
            pool (hedge fund) as well as individual brokerage accounts. Please visit www.qtscm.com for an overview of
            its service.</p>
        </div>



        <div class="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div class="w-full xl:w-5/12 lg:w-6/12">
            <h2 class="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white">About QTS
            </h2>
            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white mt-4">Founded in 2011 by quant hedge
              fund manager and quant finance author Dr. Ernest Chan, QTS Capital Managment LLC is a global
              multi-strategy investment management firm.</p>
            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white mt-6">Led by a team of
              Mathematicians and Physicists QTS has developed a proprietary quantitative approach to strategy
              development and selection with a strong emphasis on uncorrelated risk-adjusted returns and risk
              mitigation. </p>
          </div>
          <div class="flex items-center w-full ">
            <NuxtImg class=" w-1/2" src="/img/qts.png"></NuxtImg>

          </div>
        </div>
      </div>

    </div>



  </div>
  <Footer></Footer>
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

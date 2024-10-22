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


        <!-- Container -->
        <div class="w-full col-span-5">
          <div class="container mx-auto">
            <div class="grid grid-cols-1 2xl:grid-cols-2">
              <div class="">
                <img class=" object-cover object-top" src="public/img/ernie_2.jpg" alt="">
              </div>
              <div class="flex bg-gray-100 p-10">
                <div class="mb-auto mt-auto max-w-2xl">
                  <h1 class="text-3xl ">Dr Ernest P Chan</h1>

                  <p>Dr. Ernest P. Chan, founder, PredictNow.ai Inc. Ernie’s
                    career since 1994 has been focusing on the development of statistical models and advanced computer
                    algorithms to find patterns and trends in large quantities of data. He has applied his expertise in
                    machine learning at IBM T.J. Watson Research Centre's Human Language Technologies group, at Morgan
                    Stanley’s Data Mining and Artificial Intelligence Group, and at Credit Suisse’s Horizon Trading
                    Group.
                    He is also the founder and managing member of a quantitative investment management firm, QTS Capital
                    Management, LLC.
                    <br />
                    <br /> Ernie was quoted by the Wall Street Journal , New York Times , Forbes, and the CIO magazine,
                    and interviewed on CNBC’s Closing Bell program, Technical Analysis of Stocks and Commodities
                    magazine,
                    Securities Industry News, Automated Trader magazine, and the CFA Institute Magazine on topics
                    related
                    to quantitative trading. In recognition of his expertise in statistical data mining, he was invited
                    to
                    serve on the Program Committees of the International Conference of Knowledge Discovery and Data
                    Mining
                    in 1998.
                    <br />
                    <br />
                    He is the author of “Quantitative Trading: How to Build Your Own Algorithmic Trading Business“,
                    “Algorithmic Trading: Winning Strategies and Their Rationale“, and “Machine Trading: Deploying
                    Computer Algorithms to Conquer the Markets“ , all published by John Wiley & Sons. He also writes the
                    popular Quantitative Trading blog and conducts workshops on quantitative investment strategies and
                    machine learning in London, UK. He was an Adjunct Associate Professor of Finance at Nanyang
                    Technological University in Singapore, and an Industry Fellow of the NTU-SGX Centre for Financial
                    Education, which is jointly set up by NTU and the Singapore Exchange. He is an adjunct faculty at
                    Northwestern University’s Master’s in Data Science program and supervises student theses there.
                    <br />
                    <br />



                    Ernie holds a Bachelor of Science degree from University of Toronto in 1988, a Master of Science
                    (1991) and a Doctor of Philosophy (1994) degree in theoretical physics from Cornell University.
                  </p>
                  <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden xl:block col-start-2 col-span-3 w-full ">
          <AnotherTimeline></AnotherTimeline>
        </div>

        <div class="xl:hidden col-start-2 col-span-3 w-full mt-16">
          <Timeline></Timeline>
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
    content_type: "aboutProfile", // Ensure this matches the actual ID in Contentful
  });
  profiles.value = res.items;
}
</script>
<template>
  <div class="bg-gray-800  h-screen">
    <Navbar page="investment-management" />
    <Transition name="fade">
      <div v-if="!isLoading" class="px-8 py-24 bg-gray-800 text-white">
        <div class="container mx-auto text-center">
          <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white mb-4">
            Investment Management</h2>
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
          </p>
        </div>

        <div class="w-full h-56 overflow-hidden mb-8">
          <NuxtImg src="img/finances.jpg" class="w-full h-full object-cover object-center rounded-xl"
            style="object-position: center top;"></NuxtImg>
        </div>

        <div class="">
          <InvestmentManagementLandBanner :bannerData="d" v-for="d in bannerData" :key="d.sys.id">
          </InvestmentManagementLandBanner>

          <ScrollTransition>
            <div class="mt-16 grid grid-cols-1 lg:grid-cols-3">
              <div>
                <div class="flex items-center">
                  <img src="public/img/calender.svg" width="16px" class="m-4 ">
                  <h2 class="text-4xl font-bold">Founded in 2011</h2>
                </div>
                <p class="m-4 text-lg font-medium text-gray-300 ">Founded in 2011 by quant hedge fund manager and quant
                  finance author Dr. Ernest Chan, QTS Capital Managment LLC is a global multi-strategy investment
                  management
                  firm.</p>
              </div>
              <div>
                <div class="flex items-center">
                  <img src="public/img/chart-line.svg" width="16px" class="m-4 ">
                  <h2 class="text-4xl font-bold">Data Driven</h2>
                </div>
                <p class="m-4 text-lg font-medium text-gray-300 ">Led by a team of mathematicians and physicists QTS has
                  developed a proprietary quantitative approach to
                  strategy development and selection with a strong emphasis on uncorrelated risk-adjusted returns and
                  risk
                  mitigation. </p>
              </div>
              <div>
                <div class="flex items-center">
                  <img src="public/img/fa-book.svg" width="16px" class="m-4 ">
                  <h2 class="text-4xl font-bold">Programs</h2>
                </div>

                <p class="m-4 text-lg font-medium text-gray-300 ">QTS Capital Management LLC manages a Commodity Pool as
                  well as individual clients’ accounts using quantitative strategies. It is a member of the National
                  Futures
                  Association and is registered as a Commodity Pool Operator and Commodity Trading Advisor (NFA ID:
                  0431162). Since 2011, it has served a global clientele spanning 4 continents. </p>
              </div>
            </div>
          </ScrollTransition>

          <ScrollTransition>
            <div class="mt-16 grid grid-cols-1">
              <div class="flex justify-center">
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Investor Reviews
                </h2>
              </div>
              <div>
                <section class="bg-gray-800">
                  <div class="  px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div class="md:flex md:items-end md:justify-between">
                      <div class="max-w-xl">
                      </div>
                    </div>

                    <div class="mt-8 grid gap-4 grid-cols-1 lg:grid-cols-2">
                      <InvestorManagementReview v-for="review in reviews" :key="review.sys.id" :review="review">
                      </InvestorManagementReview>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </ScrollTransition>
        </div>
      </div>
    </Transition>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import InvestorManagementReview from '../components/Investor-Management-Review.vue';
import { useRuntimeConfig } from '#imports';
import { ref, onMounted } from "vue";
import InvestmentManagementLandBanner from '../components/InvestmentManagementLandBanner.vue';

const isLoading = ref(false);

const config = useRuntimeConfig();
const reviews = ref([]);
const bannerData = ref([]);
const spaceName = config.public.CONTENTFUL_SPACE_ID;
const accessTokenName = config.public.CONTENTFUL_ACCESS_KEY;

let client;


onMounted(() => {
  fetchEntries();
  isLoading.value = false;
});

async function fetchEntries() {
  const contentful = await import("contentful");
  client = contentful.createClient({
    space: spaceName,
    accessToken: accessTokenName,
  });

  const res = await client.getEntries({
    content_type: "investmentManagementReviews",
  });

  const bannerResult = await client.getEntries({
    content_type: "investmentManagementLandingBanner",
  });

  bannerData.value = bannerResult.items;
  reviews.value = res.items;
}
</script>
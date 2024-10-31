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
          <div class="grid grid-cols-5 gap-4 ">

            <div class="col-span-3 flex items-center justify-center">
              <ScrollTransition>
                <div class="ml-48 m-4  w-min lg:ml-0">
                  <h2 class=" font-bold text-7xl w-min">QTS</h2>
                  <h2 class=" font-bold text-7xl w-min">Capital</h2>
                  <h2 class=" font-bold text-7xl w-min">Management</h2>
                  <h3 class="mt-4  text-xl font-medium text-gray-300  ">QTS Capital Management is a quantitative
                    trading
                    firm
                    that uses advanced mathematical models and computer algorithms to analyze financial markets and
                    execute
                    automated trading strategies across various asset classes.</h3>
                  <div class="mt-4 ">
                    <a class="inline-flex items-center gap-4 rounded border border-indigo-600 bg-indigo-600 px-16 py-4 text-white hover:bg-indigo-800 transition-all hover:text-gray-100 focus:outline-none focus:ring active:text-indigo-500"
                      href="https://qtscm.com/" target="_blank">
                      <span class="text-sm font-medium"> Find out more </span>

                      <svg class="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                </div>
              </ScrollTransition>
            </div>

            <div class="col-span-2 col-start-4 lg:block hidden">
              <ScrollTransition>
                <img src="public/img/building.jpg" width="600">
              </ScrollTransition>
            </div>

          </div>

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
              <InvestorManagementReview></InvestorManagementReview>
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
import { ref } from "vue";
const isLoading = ref(false);
</script>
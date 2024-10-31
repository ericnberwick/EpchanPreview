<template>
  <div class="w-screen bg-gray-800">
    <Navbar />
    <ScrollTransition>
      <div class="w-full grid xl:grid-cols-3 grid-cols-1">
        <div class="hidden col-start-1 col-span-1 xl:flex justify-center items-center">
          <div class="w-full">
            <div class="w-full flex justify-center items-center ">
              <h2 id="title" class="font-bold text-white text-center ">Welcome to E.P.
                Chan &
                Associates</h2>
            </div>
            <div class=" flex justify-center items-center ">
              <p class="text-lg font-medium text-gray-300 w-1/2 text-center">
                Insights on Applications of AI and Quantitative Analytics to Asset Management and Beyond
              </p>
            </div>
            <div class="flex flex-wrap justify-center gap-4 mt-4">
              <NuxtLink
                class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                to="/workshops">
                Get Started
              </NuxtLink>

              <NuxtLink
                class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                to="/financial-machine-learning">
                Learn More
              </NuxtLink>
            </div>
          </div>


        </div>
        <div class="hidden col-start-2 col-span-2 xl:block">
          <video autoplay loop muted class="w-full">
            <source src="public/img/finance.mp4" type="video/webm" />
          </video>
        </div>

        <div class="xl:hidden col-start-1 col-span-1 flex justify-center items-center">
          <div class="relative ">
            <video autoplay loop muted class="w-full hidden md:block">
              <source src="public/img/finance.mp4" type="video/webm" />
            </video>
            <img class="block md:hidden" src="public/img/mobile-land.jpg">
            <div class="absolute inset-0 flex items-start mt-10 justify-center">
              <div class="w-full">
                <div class="w-full flex justify-center items-center">
                  <h2 id="title" class="font-bold text-white text-center">Welcome to E.P.
                    Chan &
                    Associates</h2>
                </div>
                <div class=" flex justify-center items-center ">
                  <p class="text-lg font-medium text-gray-300 w-1/2 text-center">
                    Insights on Applications of AI and Quantitative Analytics to Asset Management and
                    Beyond
                  </p>
                </div>
                <div class="flex flex-wrap justify-center gap-2 mt-4">
                  <NuxtLink
                    class="block w-full rounded border md:border-blue-600 bg-blue-800 md:bg-blue-600 px-12 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto w-2/6 mx-20 sm:mx-0"
                    to="/workshops">
                    Get Started
                  </NuxtLink>

                  <NuxtLink
                    class="block w-full rounded border bg-blue-800 md:bg-black px-12 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto w-2/6 mx-20 sm:mx-0"
                    to="/financial-machine-learning">
                    Learn More
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </ScrollTransition>
    <ScrollTransition>
      <div class="w-full grid grid-cols-1 lg:grid-cols-3">
        <div class="col-start-1 col-span-1 flex items-center justify-center ">
          <img src="public/img/ernie_2.jpg" class="object-cover w-full">
        </div>
        <div class="col-start-2 col-span-3 flex justify-start mt-20 md:mt-0">
          <section class="bg-gray-800 text-white ">
            <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div class="max-w-xl">
                <h2 class="text-6xl font-bold ">Dr Ernest P Chan</h2>
                <p class="mt-4 text-gray-300 text-2xl">
                  Ernest P. Chan, is an <a href="https://predictnow.ai/"
                    class="text-blue-600 hover:text-blue-800 underline hover:no-underline font-medium transition duration-300 ease-in-out">expert</a>
                  in machine learning and the application of quantitative
                  models for asset management.
                </p>
              </div>

              <div class="mt-8 grid grid-cols-1 gap-12">
                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                      </path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                      </path>
                    </svg>
                  </span>

                  <div>
                    <h2 class="text-xl font-bold">Chief Scientific Officer</h2>
                    <p class="mt-1 text-md text-gray-300">
                      founded and serves as Chief Scientific Officer of <a href="https://predictnow.ai/"
                        class="text-blue-600 hover:text-blue-800 underline hover:no-underline font-medium transition duration-300 ease-in-out">Predictnow.ai</a>
                      that
                      focuses
                      on risk management and adaptive optimization using machine learning
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                      </path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                      </path>
                    </svg>
                  </span>

                  <div>
                    <h2 class="text-xl font-bold">Chairman</h2>
                    <p class="mt-1 text-md text-gray-300">
                      He founded and serves as non-executive chairman of <a
                        class="text-blue-600 hover:text-blue-800 underline hover:no-underline font-medium transition duration-300 ease-in-out"
                        href="https://qtscm.com/">QTS Capital Management, LLC</a>, a commodity pool
                      operator and trading advisor
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                      </path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                      </path>
                    </svg>
                  </span>

                  <div>
                    <h2 class="text-xl font-bold">Quantitative Model Specialist</h2>
                    <p class="mt-1 text-md text-gray-300">
                      Dr. Chan has built and traded numerous
                      quantitative models for investment banks and hedge funds in the past.
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                      </path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                      </path>
                    </svg>
                  </span>

                  <div>
                    <h2 class="text-xl font-bold">Client Focused</h2>

                    <p class="mt-1 text-md text-gray-300">
                      He has served individual and
                      institutional clients in Australia, Canada, China, France, Germany, India,
                      Israel, Italy, Korea, the
                      Netherlands, Peru, Singapore, South Africa, Sweden, the United Kingdom, and the
                      United States since 2006.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ScrollTransition>

    <ScrollTransition>
      <div class="w-full ">
        <section>
          <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header class="text-center">
              <h2 class="text-6xl font-bold text-white ">Our top rated resources</h2>
            </header>
            <ul class="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-5">
              <li>
                <NuxtLink to="/books" class="group block overflow-hidden ">
                  <img src="public/img/gen-ai-book.jpg" alt=""
                    class="h-[350px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[450px]" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/books" class="group block overflow-hidden ">
                  <img src="public/img/aiTrading.jpg" alt=""
                    class="h-[350px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[450px]" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/books" class="group block overflow-hidden ">
                  <img src="public/img/book.jpg" alt=""
                    class="h-[350px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[450px]" />
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/books" class="group block overflow-hidden ">
                  <img src="public/img/algo-book.png" alt=""
                    class="h-[350px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[450px]" />
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/books" class="group block overflow-hidden ">
                  <img src="public/img/machine-book.png" alt=""
                    class="h-[350px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[450px]" />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </ScrollTransition>
    <div class="w-full">
      <Footer></Footer>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();
// Define a ref to hold fetched data
const reviews = ref([]);
const welcome = ref([]);
const spaceName = config.public.CONTENTFUL_SPACE_ID;
const accessTokenName = config.public.CONTENTFUL_ACCESS_KEY;

let client;

async function fetchWelcome() {
  const contentful = await import("contentful");
  client = contentful.createClient({
    space: spaceName,
    accessToken: accessTokenName,
  });
  const welcomeText = await client.getEntries({
    content_type: "welcomeText", // Ensure this matches the actual ID in Contentful you can copy this from Content Model on top left
  });
  welcome.value = welcomeText.items;
}

async function fetchEntries() {
  const contentful = await import("contentful");
  client = contentful.createClient({
    space: spaceName,
    accessToken: accessTokenName,
  });

  const res = await client.getEntries({
    content_type: "book",
  });

  reviews.value = res.items;
}

onMounted(() => {
  fetchWelcome();
  fetchEntries();
});
</script>

<style>
#title {
  font-size: 2.5rem
}
</style>

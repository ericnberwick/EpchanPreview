<template>
    <div class="h-screen bg-gray-800">
        <Navbar page="financial-machine-learning" />


        <div class="px-8 py-24 bg-gray-800">
            <div class="container mx-auto text-center">
                <h2
                    class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white mb-4">
                    Financial Machine Learning</h2>
                <p
                    class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">
                </p>
            </div>

            <div class="w-full h-56 overflow-hidden mb-8">
                <NuxtImg src="img/finance-banner.jpg" class="w-full h-full object-cover"
                    style="object-position: center bottom;"></NuxtImg>
            </div>

            <div class="w-full ">

                <section>
                    <!-- Container -->
                    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                        <!-- Component -->
                        <div class="flex flex-col items-center">
                            <!-- Title -->
                            <h2 class="text-center text-3xl font-bold md:text-5xl"> The latest and greatest news </h2>
                            <p class="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16"> Lorem
                                ipsum dolor sit amet elit ut aliquam </p>
                            <!-- Content -->
                            <div
                                class="mb-12 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-16 md:grid-cols-3 lg:mb-20 lg:gap-6">
                                <!-- Item -->
                                <div>
                                    <a href="#" class="flex flex-col gap-4 rounded-md bg-gray-100 px-4 py-8 md:p-4">
                                        <div class="relative">
                                            <img src="public/img/data-scrubbing.jpg" alt=""
                                                class="inline-block h-48 w-full rounded-md object-cover" />

                                        </div>
                                        <div class="flex w-full flex-col gap-5">

                                            <p class="font-bold">What is the probability of profit of your next trade?
                                                (Introducing PredictNow.ai)</p>
                                            <!-- Divider -->
                                            <div class="h-px w-full bg-black"></div>
                                            <div class="flex items-center">

                                                <div class="flex flex-col md:flex-row md:items-center">
                                                    <p class="text-sm font-medium text-gray-500">explains in details how
                                                        you
                                                        can use our SaaS to improve your existing investment or trading
                                                        strategy.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <!-- Button -->
                            <a href="#" class="rounded-md bg-black px-6 py-3 font-semibold text-white"> Check
                                All&nbsp;Reviews </a>
                        </div>
                    </div>
                </section>






            </div>


            <LoadingCard v-if="isLoading" message="Loading content..."></LoadingCard>
            <div class="w-full mt-20">
                <Footer></Footer>
            </div>

        </div>




    </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from '#imports';

var sortedParagraphs = ref([]);
const isLoading = ref(true);

const config = useRuntimeConfig();
// Define a ref to hold fetched data
const paragraphs = ref([]);
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
        content_type: "financialMachineLearningParagraph", // Ensure this matches the actual ID in Contentful
    });
    // Assign data to reviews ref
    console.log("res.items ", res.items)
    paragraphs.value = res.items;
    sortedParagraphs.value = res.items.slice().sort((a, b) => a.fields.order - b.fields.order);
    console.log("sortedparagrahps", sortedParagraphs);
}

// Fetch data on component mount
onMounted(() => {
    fetchEntries();
    isLoading.value = false

});
</script>
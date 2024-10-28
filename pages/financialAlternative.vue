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

            <div class="w-full text - white">
                <!-- component -->
                <div class="relative">
                    <div class="sticky top-0 flex h-screen items-center justify-center">
                        <img src="public/img/talin.jpg" class="h-full w-full object-cover" />
                        <div
                            class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-center justify-center gap-4 p-10 backdrop-blur-xl">

                            <p class="font-sans text-2xl font-bold text-white text-center mt-24 w-1/2">It is
                                extraordinarily
                                difficult to
                                succeed in financial machine learning. That’s why we
                                started PredictNow.ai, a machine learning SaaS and consulting firm that focuses on risk
                                management and adaptive optimization.

                                We highlight some of the difficulties of financial ML below. and how PredictNow.ai can
                                help your investment management practice overcome them.</p>
                        </div>
                    </div>
                    <div class="sticky top-0 flex h-screen items-center justify-center">
                        <img src="https://www.stockvault.net/data/2014/10/06/163147/preview16.jpg"
                            class="h-full w-full object-cover" />

                        <div
                            class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
                            <h2 class="text-2xl font-bold text-white">Second Section</h2>
                            <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                the 1500s,</p>
                        </div>
                    </div>

                    <div class="sticky top-0 flex h-screen items-center justify-center">
                        <img src="https://www.stockvault.net/data/2016/03/14/187739/preview16.jpg"
                            class="h-full w-full object-cover" />

                        <div
                            class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
                            <h2 class="text-2xl font-bold text-white">Third Section</h2>
                            <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                the 1500s,</p>
                        </div>
                    </div>

                    <div class="sticky top-0 flex h-screen items-center justify-center">
                        <img src="https://www.stockvault.net/data/2016/03/14/187732/preview16.jpg"
                            class="h-full w-full object-cover" />

                        <div
                            class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
                            <h2 class="text-2xl font-bold text-white">Fourth Section</h2>
                            <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                the 1500s,</p>
                        </div>
                    </div>

                    <div class="sticky top-0 flex h-screen items-center justify-center">
                        <img src="https://www.stockvault.net/data/2016/03/14/187732/preview16.jpg"
                            class="h-full w-full object-cover" />

                        <div
                            class="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
                            <h2 class="text-2xl font-bold text-white">Fourth Section</h2>
                            <p class="font-sans text-lg text-white">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                the 1500s,</p>
                        </div>
                    </div>
                </div>


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
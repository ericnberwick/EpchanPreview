<template>
    <div class="bg-gray-800 text-gray-600 work-sans leading-normal text-base tracking-normal">
        <Navbar page="home" />

        <div class="mt-8 relative container mx-auto " style="max-width:1600px;">
            <div class="relative w-full" style="height:50vh;">
                <NuxtImg class="absolute inset-0 h-full w-full object-cover rounded-xl" src="/img/back2.jpg"
                    alt="Background Image" />
                <div class="absolute inset-0 flex items-center">
                    <div class="container mx-auto">
                        <div
                            class="flex flex-col w-full lg:w-1/2 md:ml-16 items-start md:items-start px-6 tracking-wide">
                            <p class="text-black text-2xl my-4">Welcome to E.P. Chan & Associates</p>
                            <NuxtLink to="/land"
                                class="flex justify-center w-full rounded border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                                Switch to Prototype
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="bg-gray-800 py-8">
            <div class="container py-8 px-6 mx-auto">
                <a class="tracking-wide no-underline hover:no-underline font-bold text-white text-xl mb-8" href="#">
                    Welcome
                </a>

                <p class="text-white">Ernest P. Chan, is an expert in machine learning and the application of
                    quantitative
                    models for asset
                    management. He founded and serves as non-executive chairman of <a
                        class="text-blue-600 hover:text-blue-800 underline hover:no-underline font-medium transition duration-300 ease-in-out"
                        href="https://qtscm.com/">QTS Capital Management, LLC</a>, a commodity pool
                    operator and trading advisor, and founded and serves as Chief Scientific Officer of <a
                        href="https://predictnow.ai/"
                        class="text-blue-600 hover:text-blue-800 underline hover:no-underline font-medium transition duration-300 ease-in-out">Predictnow.ai</a>
                    that
                    focuses
                    on risk management and adaptive optimization using machine learning. Dr. Chan has built and traded
                    numerous
                    quantitative models for investment banks and hedge funds in the past. He has served individual and
                    institutional clients in Australia, Canada, China, France, Germany, India, Israel, Italy, Korea, the
                    Netherlands, Peru, Singapore, South Africa, Sweden, the United Kingdom, and the United States since
                    2006.</p>
            </div>
        </section>

        <section class="bg-gray-800">
            <div class="container mx-auto flex items-center flex-wrap pt-4">
                <nav id="store" class="w-full z-30 top-0 px-6 ">
                    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2">
                        <a class="tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                            href="#">
                            Books
                        </a>
                    </div>
                </nav>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                    <div v-for="review in reviews" :key="review.sys.id">
                        <BookCardLand :review="review" />
                    </div>
                </div>



            </div>
        </section>
        <Footer />
    </div>
</template>



<script setup>
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from '#imports';
import NewCard from "../components/NewCard.vue";

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
.carousel-inner {
    position: relative;
    width: 100%;
}

.carousel-item {
    transition: opacity 1s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.opacity-0 {
    opacity: 0;
}

.opacity-100 {
    opacity: 1;
}

.white-svg {
    color: black;
}

.work-sans {
    font-family: 'Work Sans', sans-serif;
}

#menu-toggle:checked+#menu {
    display: block;
}

.hover\:grow {
    transition: all 0.3s;
    transform: scale(1);
}

.hover\:grow:hover {
    transform: scale(1.02);
}

.carousel-open:checked+.carousel-item {
    position: static;
    opacity: 100;
}

.carousel-item {
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}

#carousel-1:checked~.control-1,
#carousel-2:checked~.control-2,
#carousel-3:checked~.control-3 {
    display: block;
}

.carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
}

#carousel-1:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet {
    color: #000;
    /*Set to match the Tailwind colour you want the active one to be */
}
</style>
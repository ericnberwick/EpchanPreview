<template>
  <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">

    <!--Nav-->
    <Navbar page="home" />

    <div class="mt-8 carousel relative container mx-auto" style="max-width:1600px;">
      <div class="carousel-inner relative overflow-hidden w-full">
        <!-- Slide 1 -->
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
          v-model="currentSlide" value="1">
        <div class="carousel-item absolute"
          :class="{ 'opacity-100': currentSlide === 1, 'opacity-0': currentSlide !== 1 }" style="height:50vh;">
          <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
            <NuxtImg class="absolute inset-0 h-full w-full object-cover" src="/img/back2.jpg" alt="Background Image" />
            <div class="container mx-auto relative">
              <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-start md:items-start px-6 tracking-wide">
                <p class="text-black text-2xl my-4">Welcome to E.P. Chan & Associates</p>
              </div>
            </div>
          </div>
        </div>

        <!-- <label @click="handleLabelClick()" for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label @click="handleLabelClick()" for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> -->

        <!-- Slide 2 -->
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""
          v-model="currentSlide" value="2">
        <div class="carousel-item absolute"
          :class="{ 'opacity-100': currentSlide === 2, 'opacity-0': currentSlide !== 2 }" style="height:50vh;">
          <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
            <NuxtImg class="absolute inset-0 h-full w-full object-cover" src="/img/back3.jpg" alt="Background Image" />
            <div class="container mx-auto relative">
              <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p class="text-black text-2xl my-4">Explore Courses</p>
                <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                  href="#">view courses</a>
              </div>
            </div>
          </div>
        </div>

        <!-- <label @click="handleLabelClick()" for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label @click="handleLabelClick()" for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> -->

        <!-- Slide 3 -->
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""
          v-model="currentSlide" value="3">
        <div class="carousel-item absolute"
          :class="{ 'opacity-100': currentSlide === 3, 'opacity-0': currentSlide !== 3 }" style="height:50vh;">
          <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
            <NuxtImg class="absolute inset-0 h-full w-full object-cover" src="/img/orange.jpg" alt="Background Image" />
            <div class="container mx-auto relative">
              <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p class="text-black text-2xl my-4">Explore Books</p>
                <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                  href="#">view books</a>
              </div>
            </div>
          </div>
        </div>

        <!-- <label @click="handleLabelClick()" for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
      <label @click="handleLabelClick()" for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> -->

        <!-- Add additional indicators for each slide -->
        <!-- <ol class="carousel-indicators">
        <li class="inline-block mr-3">
          <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
        </li>
        <li class="inline-block mr-3">
          <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
        </li>
        <li class="inline-block mr-3">
          <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
        </li>
      </ol> -->
      </div>
    </div>

    <section class="bg-white py-8">

      <div class="container py-8 px-6 mx-auto">

        <a class="tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8" href="#">
          Welcome
        </a>


        <!-- <RichTextRenderer :document="welcome[0].fields?.welcomeText" class="mt-8 mb-8"/> -->
        <p>Welcome to the official website of Dr. Ernest P. Chan, a seasoned quantitative trader with a deep passion for
          developing and implementing advanced trading algorithms. With years of expertise in financial markets and a
          strong foundation in data science, Dr. Chan is dedicated to unlocking value through quantitative analysis and
          algorithmic trading solutions. Whether you are new to the trading world or looking to refine your strategies,
          this platform offers a range of resources and insights designed to help you achieve exceptional trading
          performance. Engage with Dr. Chan’s pioneering work and discover how quantitative approaches can transform
          your trading endeavors.</p>


      </div>

    </section>

    <section class="bg-white py-8">

      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

        <nav id="store" class="w-full z-30 top-0 px-6 py-1">
          <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

            <a class="tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
              Books
            </a>


          </div>
        </nav>



        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 w-full">
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
import { ref, onMounted, onUnmounted, watchEffect } from "vue";
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

const config = useRuntimeConfig();
// Define a ref to hold fetched data
const reviews = ref([]);
const welcome = ref([]);
const spaceName = config.public.CONTENTFUL_SPACE_ID;
const accessTokenName = config.public.CONTENTFUL_ACCESS_KEY;

let client;

async function fetchWelcome() {
  console.log("spaceName: ", spaceName);
  const contentful = await import("contentful");
  client = contentful.createClient({
    space: spaceName,
    accessToken: accessTokenName,
  });
  const welcomeText = await client.getEntries({
    content_type: "welcomeText", // Ensure this matches the actual ID in Contentful you can copy this from Content Model on top left
  });
  welcome.value = welcomeText.items;

  console.log("wel :", welcomeText)
}



async function fetchEntries() {
  console.log("spaceName: ", spaceName);
  const contentful = await import("contentful");
  client = contentful.createClient({
    space: spaceName,
    accessToken: accessTokenName,
  });




  const res = await client.getEntries({
    content_type: "book", // Ensure this matches the actual ID in Contentful
  });
  // Assign data to reviews ref

  reviews.value = res.items;

  console.log("res: ", res);
}

const currentSlide = ref(1);
const totalSlides = 3;

const startInterval = () => {
  interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
};

const nextSlide = () => {
  currentSlide.value = currentSlide.value < totalSlides ? currentSlide.value + 1 : 1;
};

const resetInterval = () => {
  clearInterval(interval);
  startInterval();
};


const handleLabelClick = (slideNumber) => {
  currentSlide.value = slideNumber;
  resetInterval(); // Reset the interval when a user clicks on a label
};

let interval;

// Fetch data on component mount
onMounted(() => {
  startInterval();
  fetchWelcome();
  fetchEntries();
});

onUnmounted(() => {
  clearInterval(interval);
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

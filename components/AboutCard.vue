<template>
  <ScrollTransition>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 2xl:grid-cols-2">
        <div class="">
          <img class="object-cover object-top" :src="'https:' + about.fields.profilePicture.fields.file.url" alt="">
        </div>
        <div class="flex bg-gray-100 p-10">
          <div class="mb-auto mt-auto max-w-2xl">
            <h1 class="text-3xl">{{ about.fields.name }}</h1>
            <RichTextRenderer :document="about.fields.description" />
            <!-- <p>
              "Dr. Chan is the founder of Predictnow.ai and QTS Capital Management. Ernie’s career since 1994 has been
              focusing on the development of statistical models and advanced computer algorithms to find patterns and
              trends in large quantities of data. He has applied his expertise in machine learning at IBM T.J. Watson
              Research Centre's Human Language Technologies group, at Morgan Stanley’s Data Mining and Artificial
              Intelligence Group, and at Credit Suisse’s Horizon Trading Group. He is also the founder and managing
              member of a quantitative investment management firm, QTS Capital Management, LLC.
            </p>
            <br>
            <p>
              Ernie was quoted by the Wall Street Journal , New York Times , Forbes, and the CIO magazine, and
              interviewed on CNBC’s Closing Bell program, Technical Analysis of Stocks and Commodities magazine,
              Securities Industry News, Automated Trader magazine, and the CFA Institute Magazine on topics related to
              quantitative trading.
            </p>
            <br>
            <p>
              He is the author of “Quantitative Trading: How to Build Your Own Algorithmic Trading Business“,
              “Algorithmic Trading: Winning Strategies and Their Rationale“, and “Machine Trading: Deploying Computer
              Algorithms to Conquer the Markets“ , all published by John Wiley & Sons. He also writes the popular
              Quantitative Trading blog and conducts workshops on quantitative investment strategies and machine
              learning in London, UK. He was an Adjunct Associate Professor of Finance at Nanyang Technological
              University in Singapore, and an Industry Fellow of the NTU-SGX Centre for Financial Education, which is
              jointly set up by NTU and the Singapore Exchange. He was an adjunct faculty at Northwestern University’s
              Master’s in Data Science program and supervised student theses there.
            </p>
            <br>
            <p>
              Ernie holds a Bachelor of Science degree from University of Toronto in 1988, a Master of Science (1991)
              and a Doctor of Philosophy (1994) degree in theoretical physics from Cornell University.
            </p> -->
            <NuxtLink to="/contact">
              <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </ScrollTransition>
</template>

<script setup>
import { defineProps } from 'vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';


defineProps({
  about: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
:deep(p) {
  margin-bottom: 1em;
}
</style>
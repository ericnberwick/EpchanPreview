<template>
  <div class="card card h-full flex justify-center w-full border-2 border-grey-800">
    <div class="card__content relative transition-transform duration-1000 ">
      <div class="container grid  gap-8 pr-2">
        <div
          class="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
          <div class="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0">

            <a :href="review.fields.linkToBook">
              <img :src="'https:' + review.fields.bookImage.fields.file.url"
                alt="Revolutionizing Our Production Process" class="object-cover w-full " />
            </a>
          </div>
          <div class="p-6 px-2 sm:pr-6 sm:pl-4">

            <a href="#"
              class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">{{
                review.fields.title }}</a>
            <RichTextRenderer
              class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500"
              :document="review.fields.description" />

          </div>

        </div>
      </div>

      <div class="card__back absolute top-0 left-0 h-full w-full bg-white flex items-center justify-center ">
        <div class=" w-full h-full p-2">
          <h2 v-if="praiseExists">Praise</h2>
          <RichTextRenderer v-if="praiseExists" class="block  font-sans text-black text-sm"
            :document="review.fields.praise" />
          <div class="mt-5 w-full flex justify-center">
            <a :href="review.fields.linkToBook" class="w-full">
              <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6"
                type="button">buy now</button>
            </a>
          </div>
        </div>

      </div>

    </div>


  </div>

</template>


<script setup>
import { defineProps, onMounted, ref } from 'vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

const props = defineProps({
  review: {
    type: Object,
    required: true
  }
})

const praiseExists = ref(false);

onMounted(() => {
  if (props.review.fields.praise) {
    praiseExists.value = true;
  } else {
    praiseExists.value = false;
  }
});
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


h2 {
  font-size: 2rem
}

/* Vanilla CSS for flip card */
.card {
  width: 100%;

}

.card__content {
  transform-style: preserve-3d;
}

.card:hover .card__content {
  transform: rotateY(.5turn);
}

.card__front,
.card__back {
  backface-visibility: hidden;
}

.card__back {
  transform: rotateY(.5turn);
}
</style>
<template>
    <div v-if="displayParagraph == true">

        <section class="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
                    <div class="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                        <div class="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                            <h1
                                class="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                                {{
                                    paragraph.fields.title }}</h1>
                            <div class="mt-8 lg:mt-12 lg:flex lg:items-center">
                                <p class="mt-4 text-lg text-gray-200 lg:mt-0 lg:ml-4 font-pj">
                                    <RichTextRenderer :document="paragraph.fields.body" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="xl:col-span-3">
                        <a :href="paragraph.fields.linkPicture"
                            class="inline-block transform transition duration-300 ease-in-out hover:rotate-2 hover:-translate-y-1">
                            <img class="max-w-sm md:max-w-md xl:max-w-xl rounded-xl h-auto mx-auto"
                                :src="'https:' + paragraph.fields.image.fields.file.url" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

const props = defineProps({
    paragraph: {
        type: Object,
        required: true
    }
})

const displayParagraph = ref(false)

onMounted(() => {
    if (parseInt(props.paragraph.fields.order) % 2 !== 0) {
        displayParagraph.value = true
    }
})
</script>
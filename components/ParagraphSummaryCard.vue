<template>
    <div v-if="paragraph.fields.displayNoPicture">
        <ScrollTransition>
            <div class="w-full flex justify-center">
                <section class="px-12 mt-10 max-w-7xl">
                    <div class="">
                        <div class="flex justify-content mb-4">
                            <h1
                                class="lg:ml-4 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                                {{ paragraph.fields.title }}
                            </h1>
                        </div>
                        <div class="flex justify-center">
                            <p class="mt-4 text-lg text-gray-200 lg:mt-0 lg:ml-4 font-pj">
                                <RichTextRenderer :document="paragraph.fields.body" />
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </ScrollTransition>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer'

defineProps({
    paragraph: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div>
        <a :href="blog.fields.linkToArticle" target="_blank" rel="noopener noreferrer"
            class="flex flex-col gap-4 rounded-md bg-gray-100 px-4 py-8 md:p-4 h-[450px]">
            <div class="relative overflow-hidden rounded-md h-48">
                <img :src="'https:' + blog.fields.image.fields.file.url" alt=""
                    class="inline-block w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
            </div>
            <div class="flex w-full flex-col gap-5">
                <p class="font-bold">{{ blog.fields.title }}</p>
                <!-- Divider -->
                <div class="h-px w-full bg-black"></div>
                <div class="flex items-center">
                    <div class="flex flex-col md:flex-row md:items-center">
                        <p class="text-sm font-medium text-gray-500">{{ blog.fields.description }}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    blog: {
        type: Object,
        required: true
    }
})
</script>
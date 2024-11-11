<template>
    <li>
        <NuxtLink to="/books" class="group block overflow-hidden">
            <img :src="'https:' + book.fields.bookImage.fields.file.url" alt=""
                class="h-[350px] w-full object-cover transition duration-500 scale-[1.02] group-hover:scale-105 sm:h-[450px]" />
        </NuxtLink>
    </li>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    book: {
        type: Object,
        required: true
    }
})
</script>
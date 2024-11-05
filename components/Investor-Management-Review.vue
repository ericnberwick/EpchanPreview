<template>
    <blockquote class="flex h-full flex-col justify-between bg-gray-800 p-6 shadow-sm sm:p-8 border-2 border-gray-200">
        <div>
            <div class="mt-4">
                <p class="text-2xl font-bold text-blue-600 sm:text-3xl">{{ review.fields.title }}</p>
                <p class="mt-4 font-medium text-gray-300">
                    {{ review.fields.description }}
                </p>
            </div>
        </div>

        <footer class="mt-4 font-medium text-gray-300 font-bold">
            &mdash; {{ review.fields.reviewer }}
        </footer>
    </blockquote>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    review: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="relative flex flex-col  rounded-xl bg-gray-800 text-white  border border-purple-500 transition-all duration-300 ease-in-out
               hover:border-green-500 hover:shadow-lg grid grid-cols-2 p-4">
        <div class="flex justify-center h-full">
            <div class="text-center max-w-2xl">
                <h3
                    class="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 mb-4">
                    Complete list of our pre-recorded online courses
                </h3>
                <p class="text-base text-left">
                    Unlock the world of algorithmic trading with Dr. Ernest P. Chan's catalog of courses! Enjoy
                    unlimited
                    access to pre-recorded lessons on Adobe Connect, narrated by Dr. Chan himself. Each course includes
                    provided software and sample data, along with unlimited Q&A support via a dedicated Slack channel.
                    Whether you prefer Matlab or Python, these courses are designed for those with basic familiarity in
                    either language. Don't miss this chance to learn from an expert—contact ernest@epchan.com for
                    registration or visit www.epchan.com/workshops for current live offerings. Elevate your trading
                    skills
                    today!
                </p>
            </div>
        </div>

        <div class="p-6  group">
            <a href="/EP Chan Course Offerings.pdf" target="_blank" rel="noopener noreferrer">
                <div class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-56
             fill-white transition-colors duration-300 ease-in-out group-hover:fill-purple-500">
                        <path
                            d="M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z" />
                    </svg>
                </div>


                <button
                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-purple-500 text-purple-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6"
                    type="button">
                    Explore
                </button>
            </a>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    course: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class=" flex justify-center w-full hover:border-green-500 transition duration-300 ease-out">
        <div class="card__content relative transition-transform duration-1000 w-[1536px] ">
            <div class="container grid  gap-2 pr-2">
                <div
                    class="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item grid-cols-1 lg:grid-cols-3 border-2 border-green-900">
                    <div
                        class=" relative bg-clip-border text-gray-700 m-0 overflow-hidden flex items-center justify-center">
                        <a href="https://qtscm.com" class="">
                            <div class="relative  w-fit overflow-hidden">
                                <img src="public/img/humanoids1.webp" alt="Revolutionizing Our Production Process"
                                    width="400px"
                                    class="transition-transform duration-500 ease-in-out transform scale-105 hover:scale-110">
                                <!-- <span v-if="review.fields.new == true"
                                    class="absolute bg-green-600 text-center text-white font-semibold py-1 w-full md:w-[190px] transform md:rotate-45 top-0 md:top-[32px] right-0 md:right-[-40px]">
                                    New
                                </span> -->
                            </div>
                        </a>
                    </div>
                    <div
                        class="p-6 px-2 sm:pr-6 sm:pl-4 text-white p-6 px-2 sm:pr-6 sm:pl-4 text-white col-start-1 lg:col-start-2 col-span-1 lg:col-span-2">
                        <a href="https://qtscm.com"
                            class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-green-500">
                            Hypothetical 6th book
                        </a>
                        <div
                            class="block antialiased font-sans text-base leading-relaxed text-inherit font-normal text-gray-500">
                            <p>
                                Hi. This is a test.
                            </p>
                        </div>

                        <div class="mt-4">
                            <h2
                                class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug  mb-2 normal-case ">
                                Praise</h2>
                            <div
                                class="mt-2 block antialiased font-sans text-base leading-relaxed text-inherit font-normal text-gray-500">
                                <p>Wow, this book is great!</p>
                            </div>
                        </div>
                        <a href="https://qtscm.com">
                            <button
                                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6"
                                type="button">buy now</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

</script>
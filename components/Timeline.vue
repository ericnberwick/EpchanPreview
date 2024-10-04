<template>
    <ol class="relative border-s border-gray-200 dark:border-gray-700 timeline">
        <li class=" mb-10 ms-6 timeline-item animate-reveal" :style="{ animationDelay: '0ms' }" ref="item1">
            <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <h3 class="ml-8 flex items-center mb-1 text-lg text-white  font-bold">Founder and Chief Scientist,
                PredictNow.ai
            </h3>
            <time class="ml-8 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jul 2020 -
                Present · 4 yrs 4 mos</time>
            <p class="ml-8 mb-4 tfont-medium text-gray-300 ">PredictNow.ai is a financial machine
                learning SaaS that lets investors and traders compute the probability of profit of their next
                investment.</p>

        </li>
        <li class="mb-10 ms-6 timeline-item animate-reveal" :style="{ animationDelay: '0ms' }" ref="item2">
            <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <h3 class="ml-8 mb-1 text-lg text-white  font-bold">Non-executive chairman and founder, QTS
                Capital Management</h3>
            <time class="ml-8 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2011 -
                Present · 13 yrs 5 mos</time>
            <p class="ml-8 font-medium text-gray-300 ">QTS Capital Management, LLC. is a CTA and
                CPO which manages QTS Partners, L.P</p>
        </li>
        <li class="mb-10 ms-6 timeline-item animate-reveal" :style="{ animationDelay: '0ms' }" ref="item3">
            <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <h3 class="ml-8 mb-1 text-lg text-white  font-bold">Managing Member, EXP Capital Management, LLC</h3>
            <time class="ml-8 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jul 2008 -
                Dec
                2010 · 2 yrs 6 mos</time>
            <p class="ml-8 font-medium text-gray-300 ">Quantitative hedge fund based in Chicago, IL.</p>
        </li>
        <li class="mb-10 ms-6 timeline-item animate-reveal" :style="{ animationDelay: '0ms' }" ref="item4">
            <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <h3 class="ml-8  mb-1 text-lg text-white  font-bold">Senior Quantitative Analyst, Maple Securities</h3>
            <time class="ml-8 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jul 2003 -
                Sep
                2005 · 2 yrs 3 mos</time>
            <p class="ml-8 font-medium text-gray-300 ">Quantitative research, trading, portfolio management. Statistical
                arbitrage.</p>
        </li>
        <li class="mb-10 ms-6 timeline-item animate-reveal" :style="{ animationDelay: '0ms' }" ref="item5">
            <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <h3 class="ml-8 mb-1 text-lg text-white  font-bold">Senior Quantitative Analyst, MANE Fund Management</h3>
            <time class="ml-8 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2004 - 2005
                · 1
                yr</time>
            <p class="ml-8 font-medium text-gray-300 "></p>
        </li>
        <li class="mb-10 ms-6 timeline-item animate-reveal" :style="{ animationDelay: '0ms' }" ref="item6">
            <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <h3 class="ml-8 mb-1 text-lg text-white  font-bold">Senior Research Strategist, Mapleridge Capital
                Corporation
            </h3>
            <time class="ml-8 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2002 -
                Jan
                2003 · 8 mos</time>
            <p class="ml-8 font-medium text-gray-300 "></p>
        </li>
        <li class="mb-10 ms-6 timeline-item animate-reveal" :style="{ animationDelay: '0ms' }" ref="item7">
            <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <h3 class="ml-8 mb-1 text-lg text-white  font-bold">Millennium Partners
            </h3>
            <time class="ml-8 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2003 - 2003
                ·
                Less than a year</time>
            <p class="ml-8 font-medium text-gray-300 "></p>
        </li>
        <li class="mb-10 ms-6 timeline-item animate-reveal" :style="{ animationDelay: '0ms' }" ref="item8">
            <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <h3 class="ml-8 mb-1 text-lg text-white  font-bold">
                Vice President, Credit Suisse
            </h3>
            <time class="ml-8 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 1998 -
                Dec
                1999 · 1 yr 8 mos</time>
            <p class="font-medium text-gray-300 "></p>
        </li>
        <li class="mb-10 ms-6 timeline-item animate-reveal" :style="{ animationDelay: '0ms' }" ref="item9">
            <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <h3 class="ml-8 mb-1 text-lg text-white  font-bold">

                Associate, Morgan Stanley
            </h3>
            <time class="ml-8 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 1997 -
                Apr
                1998 · 1 yr 4 mos</time>
            <p class="ml-8 font-medium text-gray-300 ">Data Mining and Artificial Intelligence group</p>
        </li>
        <li class=" ms-6 timeline-item animate-reveal">
            <span
                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <h3 class="ml-8 mb-1 text-lg text-white  font-bold">

                Research Associate, IBM
            </h3>
            <time class="ml-8 block  text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1994 - 1997 · 3
                yrs</time>

        </li>
    </ol>


</template>

<script setup>
import { ref, onMounted } from 'vue'

const item1 = ref(null)
const item2 = ref(null)
const item3 = ref(null)
const item4 = ref(null)
const item5 = ref(null)
const item6 = ref(null)
const item7 = ref(null)
const item8 = ref(null)
const item9 = ref(null)

// Add refs for additional items as needed

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
            }
        })
    }, { threshold: 0.1 })

    // Observe each item
    if (item1.value) observer.observe(item1.value)
    if (item2.value) observer.observe(item2.value)
    if (item3.value) observer.observe(item3.value)
    if (item4.value) observer.observe(item4.value)
    if (item5.value) observer.observe(item5.value)
    if (item6.value) observer.observe(item6.value)
    if (item7.value) observer.observe(item7.value)
    if (item8.value) observer.observe(item8.value)
    if (item8.value) observer.observe(item9.value)

    // Observe additional items as needed
})
</script>

<style scoped>
.timeline-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s, transform 0.5s;
}

.animate-reveal {
    animation: reveal 0.5s forwards;
    animation-play-state: paused;
}

.animate-reveal.is-visible {
    animation-play-state: running;
}

@keyframes reveal {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
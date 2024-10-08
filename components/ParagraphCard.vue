<template>
    <div :class="`top-[${top}]`" class="sticky -mt-48 mb-48 rounded-t-[46px] border-2 bg-gray-800  px-5 py-10 sm:px-20">
        <div class="mb-14 flex gap-8 text-2xl font-bold text-white">

            <p class="underline" v-if="paragraph.fields.title != 'notitle'">{{ paragraph.fields.order + " " +
                paragraph.fields.title }}
            </p>
            <p class="underline" v-if="paragraph.fields.title == 'notitle'">{{ paragraph.fields.order }}
                Introduction
            </p>
        </div>
        <div class="flex flex-col-reverse gap-8 sm:gap-20 lg:flex-row lg:items-center">
            <div class="max-w-2xl">
                <img src="public/img/building.jpg" alt="" />
            </div>
            <div class="max-w-7xl  ">

                <p class="text-2xl text-[#636262]   text-gray-100">
                    <RichTextRenderer :document="paragraph.fields.body" />
                </p>
            </div>
        </div>
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


const topInt = ref(((parseInt(props.paragraph.fields.order) - 1) * 6))
const top = ref(topInt.value.toString() + "rem");


onMounted(() => {
    if (topInt.value > 30) {
        topInt.value = 30;
        top.value = "30rem"
    }

});
</script>
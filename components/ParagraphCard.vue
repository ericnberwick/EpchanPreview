<template>
    <ul class="mt-4  ">
        <li class="">
            <a class="block h-full rounded-lg border border-gray-700 p-4 transition-all ">
                <strong v-if="paragraph.fields.title != 'notitle'" class="font-medium text-white text-lg">{{
                    paragraph.fields.title }}</strong>


                <p class="mt-1 text-sm font-medium text-gray-300 ">
                    <RichTextRenderer :document="paragraph.fields.body" />
                </p>
            </a>
        </li>



    </ul>

</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

const props = defineProps({
    paragraph: {
        type: Object,
        required: true
    }
})

//const praiseExists = ref(false);

onMounted(() => {
    console.log("yoo : ", props.paragraph.fields)

});
</script>
<template>
    <el-tooltip class="box-item pl-8" placement="left-start">
        <template #content class="max-w-full">
            <span class="whitespace-pre-line">{{ sugerencia }}</span>
        </template>
        <div class="absolute top-0 right-0 -translate-x-1/4 -translate-y-1/4">
            <button @click="showInput = !showInput;"
                class="h-7 w-7 rounded-full p-1 bg-amber-200 active:scale-90 active:brightness-75 hover:brightness-105 hover:scale-110 transition-all duration-200 font-semibold text-sm flex items-center justify-center">
                <p v-if="titleBtn">{{ titleBtn }}</p>
                <i class="pi pi-pen-to-square"></i>
            </button>
        </div>
    </el-tooltip>

    <el-input v-if="showInput" :autosize="{ minRows: 1, maxRows: 6 }" type="textarea" :placeholder="placeholder"
        v-model="model"></el-input>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const showInput = ref(true);

// Recibe las props del padre, donde 'modelValue' es el valor del v-model
const props = defineProps({
    placeholder: {
        type: String,
        default: "Escribe aquí las observaciones ..."
    },
    titleBtn: {
        type: String,
        default: ""
    },
    sugerencia: {
        type: String,
        default: "Observación"
    },
});

const model = defineModel('inputext');
</script>

<style></style>
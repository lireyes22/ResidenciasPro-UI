<template>
    <div :class="divClass">
        <Button @click="emits('click')" :class="
            [
                {'bg-red-700 text-white': color==='red' && !props.outlined,},
                {'bg-blue-700 text-white': color==='blue' && !props.outlined,},
                {'bg-green-700 text-white': color==='green' && !props.outlined,},
                {'bg-yellow-400 text-white': color==='yellow' && !props.outlined,},
                {'bg-cyan-700 text-white': color==='cyan' && !props.outlined,},
                {'bg-gray-700 text-white': color==='gray' && !props.outlined,},
                {'bg-purple-700 text-white': color==='purple' && !props.outlined,},
                {'bg-color-2 text-white': color==='bluedw' && !props.outlined,},
                {'bg-teal-700 text-white': color==='teal' && !props.outlined,},


                {'border-red-500 hover:bg-red-700 hover:text-white rounded-md shadow-sm active:bg-red-900': color==='red' && props.outlined,},
                {'border-blue-500 hover:bg-blue-700 hover:text-white rounded-md shadow-sm active:bg-blue-900': color==='blue' && props.outlined,},
                {'border-green-500 hover:bg-green-700 hover:text-white rounded-md shadow-sm active:bg-green-900': color==='green' && props.outlined,},
                {'border-yellow-500 hover:bg-yellow-700 hover:text-white rounded-md shadow-sm active:bg-yellow-900': color==='yellow' && props.outlined,},
                {'border-cyan-500 hover:bg-cyan-700 hover:text-white rounded-md shadow-sm active:bg-cyan-900': color==='cyan' && props.outlined,},
                {'border-gray-500 hover:bg-gray-700 hover:text-white rounded-md shadow-sm active:bg-gray-900': color==='gray' && props.outlined,},
                {'border-purple-500 hover:bg-purple-700 hover:text-white rounded-md shadow-sm active:bg-purple-900': color==='purple' && props.outlined,},
                {'border-color-2 hover:bg-purple-700 hover:text-white rounded-md shadow-sm active:bg-purple-900': color==='bluedw' && props.outlined,},
                {'border-teal-500 hover:bg-teal-700 hover:text-white rounded-md shadow-sm active:bg-teal-900': color==='teal' && props.outlined,},

                {'rounded-md': !props.rounded},
                {'rounded-3xl': props.rounded},
                styleClass, 'btnConfirm'
            ]
        " :disabled="props.disabled">
            <i :class="[icon, { '': margin }]" :style="`color: ${iconColor}`" v-if="iconPosition === 'left'"></i>
            <span v-if="text" :class="[{'hidden md:flex': textAutoHide===true}]">{{ text }}</span>
            <i :class="[icon, { '': margin }]" :style="`color: ${iconColor}`" v-if="iconPosition === 'right'"></i>
        </Button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import Button from 'primevue/button';

interface Props {
    icon: string;
    iconColor?: string;
    iconPosition?: string;
    text?: string;
    margin?: boolean;
    outlined?: boolean;
    rounded?: boolean;
    disabled?: boolean;
    color?: string;
    styleClass?: string;
    divClass?: string;
    textAutoHide?: boolean;
}

interface Emits {
    (e: 'click'): void;
}

const props = withDefaults(defineProps<Props>(), { 
    text: '', 
    outlined: false, 
    disabled: false, 
    color: 'teal', 
    iconColor: 'white',
    styleClass: 'p-2 border-2 w-full disabled:opacity-50', 
    iconPosition: 'left' ,
    textAutoHide: false
});
const emits = defineEmits<Emits>();
</script>
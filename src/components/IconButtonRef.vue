<template>
    <div :class="[
                { 'bg-red-700 hover:bg-red-500 text-white shadow-sm active:bg-red-900': color === 'red' && !props.outlined, },
                { 'bg-blue-700 hover:bg-blue-500 text-white shadow-sm active:bg-blue-900': color === 'blue' && !props.outlined, },
                { 'bg-green-700 hover:bg-green-500 text-white shadow-sm active:bg-green-900': color === 'green' && !props.outlined, },
                { 'bg-yellow-400 hover:bg-yellow-300 text-white shadow-sm active:bg-yellow-500': color === 'yellow' && !props.outlined, },
                { 'bg-cyan-700 hover:bg-cyan-500 text-white shadow-sm active:bg-cyan-900': color === 'cyan' && !props.outlined, },
                { 'bg-gray-700 hover:bg-gray-500 text-white shadow-sm active:bg-gray-900': color === 'gray' && !props.outlined, },
                { 'bg-purple-700 hover:bg-purple-500 text-white shadow-sm active:bg-purple-900': color === 'purple' && !props.outlined, },
                { 'bg-color-2 hover:bg-color-5 text-white shadow-sm active:bg-color-6': color === 'bluedw' && !props.outlined, },
                { 'bg-teal-700 hover:bg-teal-600 text-white shadow-sm active:bg-teal-900': color === 'teal' && !props.outlined, },
                { 'border-red-500 hover:bg-red-700 hover:text-white rounded-md shadow-sm active:bg-red-900': color === 'red' && props.outlined, },
                { 'border-blue-500 hover:bg-blue-700 hover:text-white rounded-md shadow-sm active:bg-blue-900': color === 'blue' && props.outlined, },
                { 'border-green-500 hover:bg-green-700 hover:text-white rounded-md shadow-sm active:bg-green-900': color === 'green' && props.outlined, },
                { 'border-yellow-500 hover:bg-yellow-700 hover:text-white rounded-md shadow-sm active:bg-yellow-900': color === 'yellow' && props.outlined, },
                { 'border-cyan-500 hover:bg-cyan-700 hover:text-white rounded-md shadow-sm active:bg-cyan-900': color === 'cyan' && props.outlined, },
                { 'border-gray-500 hover:bg-gray-700 hover:text-white rounded-md shadow-sm active:bg-gray-900': color === 'gray' && props.outlined, },
                { 'border-purple-500 hover:bg-purple-700 hover:text-white rounded-md shadow-sm active:bg-purple-900': color === 'purple' && props.outlined, },
                { 'border-color-2 hover:bg-purple-700 hover:text-white rounded-md shadow-sm active:bg-purple-900': color === 'bluedw' && props.outlined, },
                { 'border-teal-500 hover:bg-teal-700 hover:text-white rounded-md shadow-sm active:bg-teal-900': color === 'teal' && props.outlined, },
                { 'rounded-md': !props.rounded },
                { 'rounded-3xl': props.rounded },
                styleClass
            ]">
        <a :href="href" target="_blank"  :disabled="props.disabled" class="flex flex-row items-center space-x-2">
            <i :class="[icon, { '': margin }, aClass]" v-if="iconPosition === 'left'"></i>
            <span v-if="text" :class="[{'hidden md:flex': textAutoHide===true}]">{{ text }}</span>
            <i :class="[icon, { '': margin }, aClass]" v-if="iconPosition === 'right'"></i>
        </a>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Props {
    icon: string;
    href?: string;
    iconPosition?: string;
    text?: string;
    margin?: boolean;
    outlined?: boolean;
    rounded?: boolean;
    disabled?: boolean;
    color?: string;
    styleClass?: string;
    aClass?: string;
    divClass?: string;
    textAutoHide?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    text: '',
    outlined: false,
    disabled: false,
    color: 'teal',
    margin: true,
    styleClass: 'p-2 border-2',
    aClass: '',
    iconPosition: 'left',
    textAutoHide: false
});
</script>
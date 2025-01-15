<template>
    <div :class="styleClass">
        <el-popconfirm :width="width" :icon="icon" :icon-color="iconColor" :title="title"
            @confirm="emit('confirm')">
            <template #reference>
                <div>
                    <IconButton :icon="buttonIcon" :disabled="buttonDisabled"
                    :text="buttonText" :color="buttonColor" :textAutoHide='tAutoHide'
                    :style-class="buttonStyle" :icon-position="buttonIconPosition"/>
                </div>
            </template>
            <template #actions="{ confirm, cancel }">
                <div class="flex justify-center">
                    <ButtonCli @click="confirm" :text="confirmText" teal/>
                    <ButtonCli @click="cancel" :text="cancelText" red/>
                </div>
            </template>
        </el-popconfirm>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { InfoFilled } from '@element-plus/icons-vue'
import IconButton from './IconButton.vue';
import ButtonCli from './ButtonCli.vue';

interface Props {
    width?: string;
    icon?: any;
    iconColor?: string;
    title?: string;
    buttonText?: string;
    buttonColor?: string;
    buttonStyle?: string;
    buttonIcon?: string;
    buttonDisabled?: boolean;
    buttonIconPosition?: string;
    cancelText?: string;
    confirmText?: string;
    styleClass?: string;
    tAutoHide?: boolean;
    //Colors
}

// Props
const props = withDefaults(defineProps<Props>(), {
    width: '200px',
    icon: InfoFilled,
    iconColor: '#0f766e',
    title: '¿Estas Seguro?',
    buttonText: 'Enviar',
    cancelText: 'Cancelar',
    confirmText: 'Confirmar',
    buttonColor: 'teal',
    buttonIconPosition: 'left',
    buttonIcon: 'pi pi-check',
    buttonDisabled: false,
    tAutoHide: false
});

// Emits
const emit = defineEmits(['confirm']);
</script>
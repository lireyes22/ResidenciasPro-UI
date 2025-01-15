<template>
    <div
      v-if="isVisible && observacion"
      class="informacion informacionExtensa text-xs lg:text-sm bg-yellow-50 text-blue-900 p-2 rounded-md">
      {{ observacion }}
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from "vue";
  
  // Propiedad para controlar visibilidad
  const props = defineProps({
    isVisible: {
      type: Boolean,
    },
    observacion: {
      type: String,
    },
  });
  </script>
  
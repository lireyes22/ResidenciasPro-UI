<template>
        <div class="w-screen h-screen flex flex-col bg-gray-100 overflow-auto relative">
                <router-view />
        </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';
useUserStore().loadData();
</script>

<style scoped></style>
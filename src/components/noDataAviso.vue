<template>
    <div class="contenedorAvisoTabla flex flex-col space-y-2">
    <div class="flex justify-center items-center flex-row space-x-4">
        <carpetaSVG class="h-20 w-20"/>
        <button class="p-2 btnReload mt-3" onclick="location.reload()">
            <recargarSVG/>
        </button>
    </div>
    <p class="text-lg font-bold text-center avisoTexto">{{ props.msg }}</p>
</div> 
</template>

<script setup lang="ts">
    import recargarSVG from '@/assets/svgs/recargarSVG.vue'
    import carpetaSVG from '@/assets/svgs/carpetaSVG.vue'

    const props = defineProps({
    msg: {
        type: String,
        default: 'No hay proyectos disponibles'
    }
});
</script>
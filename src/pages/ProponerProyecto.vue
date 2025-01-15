<template>
    
    <blockScaleSVG v-if="isLoading"/>
    <div class="contenedorFormulario" v-else>
        <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl">
            <div
                class="flex items-center bg-color-1 justify-center w-full min-h-10 3xl:min-h-12 max-h-10 3xl:max-h-12 z-10 shadow-md sm:rounded-t-xl relative">
                <h1 class="text-lg 3xl:text-xl font-semibold text-white">Proponer Proyecto</h1>
            </div>
            <div class="w-full h-full overflow-x-auto scroll-tabla">
                <div class="w-full h-full overflow-y-auto scroll-tabla">
                    <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl">
                        <div class="flex w-full flex-grow flex-col bg-color-3 overflow-y-auto scroll-1">
                            <FormProyecto v-model:proyecto="proyecto" from="ProponerProyecto" />
                        </div>
                    </div>
                </div>
            </div>
            <div class=" w-full flex flex-row justify-center items-end rounded-b-2xl bg-color-3 py-2 gap-x-4">
                <ConfirmButton @confirm="saveProyecto()">

                </ConfirmButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useProponerProyecto from '@/composables/useProponerProyecto';
import FormProyecto from '@/components/FormProyecto.vue';




const { 
    proyecto, 
    isLoading,
    saveProyecto,
    } = useProponerProyecto();

// SVGS
import ConfirmButton from '@/components/ConfirmButton.vue';
import palomitaSVG from '@/assets/svgs/palomitaSVG.vue';
import blockScaleSVG from '@/assets/svgs/block-scaleSVG.vue';
</script>

<style>
/* .MultiSelect {
    @apply border-black;
}

.p-multiselect-overlay p-component{
    @apply border-black;
} */
</style>
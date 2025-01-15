<template>
  <blockScaleSVG v-if="isLoading" />
  <div class="contenedorFormulario" v-else>
    <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl">
      <div
        class="flex items-center bg-color-1 justify-center w-full min-h-10 3xl:min-h-12 max-h-10 3xl:max-h-12 z-10 shadow-md sm:rounded-t-xl relative">
        <h1 class="text-lg 3xl:text-xl font-semibold text-white">Actualizar Proyecto</h1>
      </div>
      <div class="w-full h-full overflow-x-auto scroll-tabla">
        <div class="w-full h-full overflow-y-auto scroll-tabla">
          <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl">
            <div class="flex w-full flex-grow flex-col bg-color-3 overflow-y-auto scroll-1">
              <FormProyecto v-model:proyecto="proyecto" from="ActualizarProyecto" v-model:is-observaciones-visible="isObservacionesVisible" :observaciones="observaciones"/>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-row justify-center items-center rounded-b-2xl bg-color-3 pb-6 gap-x-4">
        <!-- Tambien necesita confirmacion, pero el color (purple)... No quiero chingar el boton xd -->
        <ConfirmButton buttonText="Actualizar" @click="updateProyecto()" style-class="m-4"></ConfirmButton>
        <IconButton icon="pi pi-eye" text="Observaciones" @click="isObservacionesVisible = !isObservacionesVisible"
        color='cyan' />
        <IconButton icon="pi pi-times" text="Cancelar" @click="goTo()" color='red' />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useActualizarProyecto from "@/composables/useActualizarProyecto";
import FormProyecto from '@/components/FormProyecto.vue';
import IconButton from '@/components/IconButton.vue';
import ConfirmButton from '@/components/ConfirmButton.vue';
import blockScaleSVG from '@/assets/svgs/block-scaleSVG.vue';

interface Props {
  id: string;
}
const props = defineProps<Props>();


const {
  proyecto,
  isObservacionesVisible,
  isLoading,
  updateProyecto,
  observaciones,
  goTo
} = useActualizarProyecto(props.id);

</script>


<style scoped></style>
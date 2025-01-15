<template>
    <Dialog v-model:visible="dialogVisible" :style="{ width: '75vw' }" maximizable modal
        :contentStyle="{ height: '300px' }">
        <template #header>
            <div class="w-full flex flex-col md:flex-row items-center justify-end md:space-x-8 space-y-2 md:space-y-0">
                <div
                    class="w-full h-10 md:w-auto flex flex-row justify-between md:justify-center items-center space-x-8">
                    <div class="flex items-center justify-start min-h-10 h-full space-x-3">
                        <h1 class="text-left font-semibold text-lg">
                            Proyectos:
                        </h1>
                        <span class="font-bold text-color-5 text-2xl text-center">{{ props.cupos.length }}</span>
                    </div>
                </div>

                <input type="text" placeholder="Buscar Alumno..." class="tablaBuscador h-full bg-transparent">
            </div>
        </template>
        <div class="size-full relative overflow-hidden">
            <div class="size-full rounded-lg">
                <DataTable removableSort scrollable scrollHeight="100%"
                    tableStyle="min-width: 70rem; width: 100%; height: 100%;" class="tablaPrimeVue">

                    <Column sortable field="residentes.Proyecto_Nombre" header="Nombre del Proyecto"
                        class="text-center font-semibold">
                    </Column>
                    <Column sortable field="residentes.Alumno_NumeroControl" header="Número de Control"
                        class="text-center">
                    </Column>
                    <Column sortable field="residentes.Alumno_Nombre" header="Nombre del Estudiante"
                        class="text-center">
                    </Column>
                    <Column sortable field="residentes.Alumno_Carrera" header="Carrera" class="text-center">
                    </Column>
                    <Column sortable field="residentes.Alumno_Correo" header="Correo Institucional" class="text-center">
                    </Column>
                    <Column header="Evaluaciones" class="staticColum">
                        <template #body="slotProps">
                            <div
                                class="size-full flex items-center justify-center flex-col space-y-1 2xl:flex-row 2xl:space-y-0 2xl:space-x-1">
                                <button class="px-2 py-1 btnTablaDetallesInfoP">
                                    <p>Seguimiento</p>
                                </button>
                                <button class="px-2 py-1 btnMorado">
                                    <p>Reporte Final</p>
                                </button>
                            </div>
                        </template>
                    </Column>
                </DataTable>

            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import type { CuposFBP } from '@/interfaces/FormatBancoProyecto';
import Dialog from 'primevue/dialog';
import { computed, ref, watch } from 'vue';

interface Props {
    cupos: CuposFBP[],
    header?: string
}
const props = defineProps<Props>();
const dialogVisible = ref(false);

const visible = defineModel('visible', {
    type: Boolean,
    default: false
});

/* watch(() => visible.value, (value) => {
    dialogVisible.value = value;
}, { immediate: true }); */

watch(() => dialogVisible.value, (value) => {
    visible.value = value;
}, { immediate: true });

</script>
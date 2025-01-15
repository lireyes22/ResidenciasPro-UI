<template>
    <div class="size-full xl:p-8 flex flex-col w-full h-full space-y-2 p-4">
        <div class="flex flex-col w-full h-full space-y-2 overflow-hidden">
            <div
                class="w-full flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 p-4 bg-white shadow rounded-md">
                <div class="flex items-center space-x-2">
                    <h1 class="text-left font-semibold text-lg">Alumnos:</h1>
                    <span class="font-bold text-color-5 text-xl text-center">{{ }}</span>
                </div>
                <div class="w-full flex items-center min-h-10 h-10">
                    <input type="text" placeholder="Buscar Alumno..." class="tablaBuscador h-full">
                </div>
            </div>
            <div class="size-full relative overflow-hidden bg-white shadow rounded-lg">
                <DataTable :value="dataAlumnos" scrollable scrollHeight="100%"
                    tableStyle="min-width: 70rem; width: 100%; height: 100%;" class="tablaPrimeVue">
                    <Column sortable field="Alumno_Nombre" header="Nombre del Alumno" style="width: 15%;"
                        class="text-center font-semibold">
                        <template #body="slotProps">
                            <span>{{ slotProps.data.Alumno_NombreCompleto }}</span>
                        </template>
                    </Column>
                    <Column sortable field="Alumno_Correo" header="Correo" style="width: 15%;" class="text-center">
                    </Column>
                    <Column sortable field="Alumno_Estatus.Estatus_CumpleServicioSocial" header="Servicio Social"
                        style="width: 10%;" class="text-center">
                        <template #body="slotProps">
                            <span v-if="slotProps.data.Alumno_Estatus.Estatus_CumpleServicioSocial"
                                class="text-2xl font-bold text-color-5">✓</span>
                        </template>
                    </Column>
                    <Column sortable field="Alumno_Estatus.Estatus_CumpleCreditos" header="Act. Complementarias"
                        style="width: 14%;" class="text-center">
                        <template #body="slotProps">
                            <span v-if="slotProps.data.Alumno_Estatus.Estatus_CumpleCreditos"
                                class="text-2xl font-bold text-color-5">✓</span>
                        </template>
                    </Column>
                    <Column sortable field="Alumno_Estatus.Estatus_CumpleNoEspeciales" header="No en Curso Especial"
                        style="width: 12%;" class="text-center">
                        <template #body="slotProps">
                            <span v-if="slotProps.data.Alumno_Estatus.Estatus_CumpleNoEspeciales"
                                class="text-2xl font-bold text-color-5">✓</span>
                        </template>
                    </Column>
                    <Column sortable field="Alumno_Estatus.Estatus_CumplePorcentaje" header="80% Plan de Estudios"
                        style="width: 12%;" class="text-center">
                        <template #body="slotProps">
                            <span v-if="slotProps.data.Alumno_Estatus.Estatus_CumplePorcentaje"
                                class="text-2xl font-bold text-color-5">✓</span>
                        </template>
                    </Column>
                    <Column header="Residencia" style="width: 12%;" class="staticColum">
                        <template #body="slotProps">
                            <div class="size-full flex items-center justify-center"
                                v-if="alumnosLoading.includes(slotProps.data.Alumno_Id)">
                                <i class="pi pi-spin pi-spinner-dotted" style="font-size: 2rem"></i>
                            </div>
                            <div v-else>
                                <IconButton icon="pi pi-check" text="Activar"
                                    styleClass="pl-2 py-1 w-full max-w-30 h-8 btnConfirm"
                                    v-if="!slotProps.data.Alumno_Estatus.Estatus_ActivacionResidencias"
                                    @click="handleUpdate(slotProps.data, true)">
                                </IconButton>
                                <IconButton icon="pi pi-times" text="Desactivar" color="red" v-else
                                    styleClass="pl-2 py-1 w-full max-w-30 h-8 btnConfirm"
                                    @click="handleUpdate(slotProps.data, false)">
                                </IconButton>
                            </div>
                        </template>
                    </Column>
                    <Column header="Solicitud Residencia" style="width: 12%;" v-if="false">
                        <template #body="slotProps">
                            <div class="size-full flex items-center justify-center">
                                <button class="space-x-1 px-3 py-1 btnTablaDetallesInfoP">
                                    <p>Actualizar</p>
                                </button>
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAlumnos } from '@/services/alumnosService';
import { useQuery } from '@tanstack/vue-query';
import IconButton from '@/components/IconButton.vue';
import DataTable from 'primevue/datatable';
import useAlumno from '@/composables/useAlumno';
import Column from 'primevue/column';
import type { Alumno } from '@/interfaces/Alumnos';

const { updateAlumno, alumnosLoading } = useAlumno({ fn: () => refetchAlumnos() });

const { data: dataAlumnos, refetch: refetchAlumnos } = useQuery({
    queryKey: ['alumnos'],
    queryFn: getAlumnos
});

function handleUpdate(alumno: Alumno, permiso: boolean) {
    const alumnoUpdate: Alumno = JSON.parse(JSON.stringify(alumno));
    alumnoUpdate.Alumno_Estatus.Estatus_ActivacionResidencias = permiso;
    updateAlumno(alumnoUpdate);
}

</script>

<style scoped></style>
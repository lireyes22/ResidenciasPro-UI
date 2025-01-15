<template>
    <blockScaleSVG v-if="isLoading"></blockScaleSVG>
    <div class="size-full xl:p-8 flex flex-col w-full h-full space-y-2 p-4" v-else>

        <div
            class="w-full flex flex-col md:flex-row items-center justify-end md:space-x-8 space-y-2 md:space-y-0 bg-white shadow rounded-md p-4">
            <!--Div 1-->

            <div class="w-full h-10 md:w-auto flex flex-row justify-between md:justify-center items-center space-x-8">
                <div class="flex items-center justify-start min-h-10 h-full space-x-3">
                    <h1 class="text-left font-semibold text-lg">
                        Proyectos:
                    </h1>
                    <span class="font-bold text-color-5 text-2xl text-center">{{ }}</span>
                </div>
            </div>

            <input type="text" placeholder="Buscar Alumno..." class="tablaBuscador h-full bg-transparent">

        </div>

        <div class="size-full relative overflow-hidden bg-white shadow rounded-lg">
            <div class="size-full rounded-lg">
                <NoDataAviso msg="No Hay Residencias a Evaluar" v-if="dataResidencias?.length == 0" />
                <DataTable v-if="dataResidencias?.length != 0" removableSort scrollable scrollHeight="100%"
                    :value="dataResidencias" tableStyle="min-width: 70rem; width: 100%; height: 100%;"
                    class="tablaPrimeVue">

                    <Column sortable field="Proyecto.Proyecto_Nombre" header="Nombre del Proyecto"
                        class="text-center font-semibold" v-if="isActive('Proyecto_Nombre')">
                    </Column>
                    <Column sortable field="Alumno.Alumno_NumeroControl" header="Numero de Control" class="text-center"
                        v-if="isActive('Alumno_NumeroControl')">
                    </Column>
                    <Column sortable field="FormatValues.Alumno_NombreCompleto" header="Estudiante" class="text-center"
                        v-if="isActive('Alumno_NombreCompleto')">
                    </Column>
                    <Column sortable field="Alumno.Alumno_Carrera" header="Carrera" class="text-center"
                        v-if="isActive('Alumno_Carrera')">
                    </Column>
                    <Column sortable field="Alumno.Alumno_Correo" header="Correo Institucional" class="text-center"
                        v-if="isActive('Alumno_Correo')">
                    </Column>
                    <Column sortable field="Proyecto.Proyecto_Tipo" header="Tipo Proyecto" class="text-center"
                        v-if="isActive('Proyecto_Tipo')">
                    </Column>
                    <Column sortable field="Residencia.SolicitudResidencia_Estatus" header="Estatus" class="text-center"
                        v-if="isActive('SolicitudResidencia_Estatus')">
                    </Column>
                    <Column sortable field="Residencia.SolicitudResidencia_Estatus" header="Dictamen"
                        class="text-center" v-if="isActive('SolicitudResidencia_Estatus_Dictamen')">
                    </Column>
                    <Column sortable field="Residencia.SolicitudResidencia_Anteproyecto" header="Anteproyecto"
                        class="text-center font-semibold" v-if="isActive('SolicitudResidencia_Anteproyecto')">
                        <template #body="slotProps">
                            <IconButtonRef icon="pi pi-download"
                                :href="slotProps.data.Residencia.SolicitudResidencia_Anteproyecto"
                                styleClass="flex items-center justify-center w-8 h-8" aClass="" :margin="false">
                            </IconButtonRef>
                        </template>
                    </Column>
                    <Column sortable field="Residencia.SolicitudResidencia_FechaEvaluacion" header="Fecha Dictamen"
                        class="text-center" v-if="isActive('SolicitudResidencia_FechaEvaluacion')">
                        <template #body="slotProps">
                            <template v-if="!slotProps.data.Residencia.SolicitudResidencia_FechaEvaluacion">
                                <span class="text-gray-400 font-semibold">Pendiente de Dictaminar</span>
                            </template>
                            <template v-else>
                                <span>{{ formatFecha(slotProps.data.Residencia.SolicitudResidencia_FechaEvaluacion)
                                    }}</span>
                            </template>
                        </template>
                    </Column>
                    <Column header="Parciales" style="width: 5%;" v-if="isActive('Parciales_Btn')">
                        <template #body="slotProps">
                            <div class="size-full flex items-center justify-center">
                                <IconButton icon="" icon-position="none" text="Evaluar"
                                    @click="goTo(residenciaEvaluacionSeguimiento, { id: slotProps.data.Residencia.SolicitudResidencia_Id, type: 'parcial' })"
                                    v-if="slotProps.data.Residencia.SolicitudResidencia_Estatus == 'ACEPTADO'">
                                </IconButton>
                                <span class="text-gray-400 font-semibold" v-else>
                                    {{ slotProps.data.Residencia.SolicitudResidencia_Estatus }}
                                </span>
                            </div>
                        </template>
                    </Column>
                    <Column header="Reporte Final" style="width: 5%;" v-if="isActive('ReporteFinal_Btn')">
                        <template #body="slotProps">
                            <div class="size-full flex items-center justify-center">
                                <IconButton icon="" icon-position="none" text="Evaluar"
                                    @click="goTo(residenciaEvaluacionSeguimiento, { id: slotProps.data.Residencia.SolicitudResidencia_Id, type: 'reporte-final' })"
                                    v-if="slotProps.data.Residencia.SolicitudResidencia_Estatus == 'ACEPTADO'">
                                </IconButton>
                                <span class="text-gray-400 font-semibold" v-else>
                                    {{ slotProps.data.Residencia.SolicitudResidencia_Estatus }}
                                </span>
                            </div>
                        </template>
                    </Column>
                    <Column header="Evaluaciones" style="width: 5%;"
                        :class="[{ 'staticColum': props.type !== 'residencias' }]" v-if="isActive('Solicitud_Btn')">
                        <template #body="slotProps">
                            <div class="size-full flex items-center justify-center">
                                <IconButton icon="" icon-position="none" text="Evaluar"
                                    @click="goTo(residenciaSolicitud, { id: slotProps.data.Residencia.SolicitudResidencia_Id })"
                                    v-if="slotProps.data.Residencia.SolicitudResidencia_Estatus == 'PENDIENTE'">
                                </IconButton>
                                <span class="text-gray-400 font-semibold" v-else>
                                    {{ slotProps.data.Residencia.SolicitudResidencia_Estatus }}
                                </span>
                            </div>
                        </template>
                    </Column>
                </DataTable>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//SIN ENVIAR	PENDIENTE
import blockScaleSVG from '@/assets/svgs/block-scaleSVG.vue';
import formatFecha from '@/utils/formatFecha';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import IconButtonRef from '@/components/IconButtonRef.vue';
import useResidencias from '@/composables/useResidencias';
import IconButton from '@/components/IconButton.vue';
import { useRouter } from 'vue-router';
import { residenciaEvaluacionSeguimiento } from '@/router/home';
import { useNavStore } from '@/stores/navStore';
import type { RouterLink } from '@/interfaces';
import { residenciaSolicitud } from '@/router/home'
import NoDataAviso from '@/components/noDataAviso.vue';
import { tr } from 'element-plus/es/locale/index.mjs';

interface Props {
    from: string,
    type: string
}

const props = defineProps<Props>();

const { dataResidencias, isLoading } = useResidencias(props.type);
const router = useRouter();

function goTo(route: RouterLink, params?: any) {
    useNavStore().changeRoute(route);
    router.push({ name: route.name, params: params });
}

console.log(props.type);

const header = () => {
    switch (props.type) {
        case 'evaluacion': case 'solicitudes':
            return 'Evaluaciones';
        default:
            return 'Acciones';
    }
}

function isActive(column: string) {
    switch (props.type) {
        case 'evaluacion':
            return [
                'Proyecto_Nombre',
                'Alumno_NumeroControl',
                'Alumno_NombreCompleto',
                'Alumno_Carrera',
                'Alumno_Correo',
                'Proyecto_Tipo',
                'SolicitudResidencia_Estatus',
                'SolicitudResidencia_FechaEvaluacion',
                'Parciales_Btn',
                'ReporteFinal_Btn'
            ].includes(column);
        case 'solicitudes':
            return [
                'Proyecto_Nombre',
                'Alumno_NumeroControl',
                'Alumno_NombreCompleto',
                'Alumno_Carrera',
                'Alumno_Correo',
                'Solicitud_Btn'
            ].includes(column);
        case 'dictamenes':
            return [
                'Proyecto_Nombre',
                'Alumno_NumeroControl',
                'Alumno_NombreCompleto',
                'Alumno_Carrera',
                'Alumno_Correo',
                'SolicitudResidencia_Anteproyecto',
                'SolicitudResidencia_Estatus_Dictamen',
                'SolicitudResidencia_FechaEvaluacion'
            ].includes(column);
        case 'residencias':
            return true;
        default:
            return false;
    }
}

</script>

<style scoped></style>
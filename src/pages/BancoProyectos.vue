<template>
    <blockScaleSVG v-if="isLoading" />
    <!-- bg-gray-50 md:rounded-lg  quite esto xD-->
    <div class="size-full xl:p-8 flex flex-col w-full h-full space-y-2 p-4" v-else>
        <div class="flex flex-col xl:flex-row items-center justify-between p-4 bg-white shadow rounded-md">
            <!-- Buscar Proyecto -->
            <div class="flex flex-col w-full p-2">
                <h3 class="text-lg font-semibold text-gray-700 mb-2">Buscar Proyecto ({{ items }})</h3>
                <div class="flex space-x-2">
                    <InputText type="text" v-model="columnFilterValue" @input="aplicarFiltro()"
                        :placeholder="`Buscar Proyecto`" class="w-full" />
                    <!-- <Select  :options="filterOptions"
                        optionGroupLabel="label" optionGroupChildren="items" optionValue="value" optionLabel="label"
                        optionDisabled="disabled" class="w-full">
                        <template #optiongroup="slotProps">
                            <div>{{ slotProps.option.label }}</div>
                        </template>
</Select> -->
                    <Select v-model="selectedFilter" @change="aplicarFiltro()" :options="filterOptions"
                        optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                        placeholder="Select filter">
                        <template #optiongroup="slotProps">
                            <div class="flex items-center">
                                <div>{{ slotProps.option.label }}</div>
                            </div>
                        </template>
                    </Select>
                </div>
            </div>

            <!-- Asignar Revisores -->
            <div class="flex flex-col w-full p-2" v-if="['asignar-revisores', 'banco'].includes(props.type ?? '')">
                <h3 class="text-lg font-semibold text-gray-700 mb-2">Asignar Revisores</h3>
                <div class="flex space-x-2">
                    <DatePicker dateFormat="dd/mm/yy" showIcon fluid :showOnFocus="false" variant="filled"
                        v-model="dateModel" :min-date="new Date(new Date().setDate(new Date().getDate() + 2))"
                        placeholder="Fecha máxima" class="flex min-w-36 w-full bg-gray-100 border border-gray-300 rounded-md" />
                    <Select :options="dataProfesores" filter optionLabel="FormatValues.Profesor_NombreCompleto"
                        optionValue="Profesor.Profesor_Id" placeholder="Selecciona el revisor" class="flex min-w-36 w-full"
                        v-model="revisorSelected"></Select>
                    <Button  @click="notificar = !notificar" v-tooltip.top="'Notificar Asesor'" icon="pi pi-bell" :class="[
                        'p-2 min-w-10 w-10 h-auto text-white shadow-md active:brightness-110 transition-all duration-300 hover:scale-105',
                        notificar ? 'bg-green-500' : 'bg-gray-300 '
                    ]" ></Button>
                    <Button v-tooltip.top="'Recargar'" icon="pi pi-undo"
                        class="p-2 min-w-10 w-10 h-auto shadow-md bg-gray-50 active:bg-color-1 active:text-white transition-all duration-300 hover:scale-105" />
                </div>
            </div>
        </div>


        <div class="size-full relative overflow-hidden bg-white shadow rounded-lg">
            <!-- Div de la parte que contiene la tabla -->
            <div class="size-full rounded-lg" v-if="dataBancoProyectos">
                <NoDataAviso v-if="dataBancoProyectos.length == 0" />
                <DataTable v-if="dataBancoProyectos.length != 0" :value="dataBancoProyectos" v-model:filters="filters"
                    removableSort scrollable scrollHeight="100%" v-on:filter="onTableFilter"
                    tableStyle="min-width: 70rem; width: 100%; height: 100%;" class="tablaPrimeVue">
                    <Column field="Proyecto.Proyecto_Nombre" header="Nombre del Proyecto" :sortable="true"
                        class="text-center" />
                    <Column field="FormatValues.Proyecto_EstudiantesRequeridosInscritos" header="Alumnos Requeridos"
                        :sortable="true" class="text-center"
                        v-if="isActive('Proyecto_EstudiantesRequeridosInscritos')" />
                    <Column field="Proyecto.Proyecto_Tipo" header="Tipo Proyecto" :sortable="true" class="text-center"
                        v-if="isActive('Proyecto_Tipo')" />
                    <Column field="Profesor_Asesor.Profesor_Nombre" header="Asesor" :sortable="true" class="text-center"
                        v-if="isActive('Profesor_Asesor')" />
                    <Column field="Profesor_Responsable.Profesor_Nombre" header="Responsable" :sortable="true"
                        class="text-center" v-if="isActive('Profesor_Responsable')" />
                    <Column field="Profesor_Revisor.Profesor_Nombre" header="Asignado" :sortable="true"
                        class="text-center" v-if="isActive('Profesor_Revisor')" />
                    <Column field="Empresa.Empresa_Nombre" header="Nombre de la Empresa" :sortable="true"
                        class="text-center" v-if="isActive('Empresa_Nombre')" />
                    <Column field="FormatValues.Carreras_Nombres" header="Carreras" :sortable="true" class="text-center"
                        v-if="isActive('Carreras_Nombres')" />
                    <Column field="FormatValues.Cupos_NPendientes" header="Solicitudes de Postulación" :sortable="true"
                        v-if="isActive('Solicitudes_Postulacion')">
                        <template #body="slotProps">
                            <div class="size-full flex items-center justify-center">
                                <IconButton icon="pi pi-eye"
                                    @click="goCuposEstatus({ proyectoid: slotProps.data.Proyecto.Proyecto_Id, estatus: 'pendiente' })"
                                    :text="slotProps.data.FormatValues.Cupos_NPendientes.toString()" color='bluedw'
                                    :disabled="!(slotProps.data.FormatValues.Cupos_NPendientes > 0)" />
                            </div>
                        </template>
                    </Column>
                    <Column sortable field="Proyecto.Proyecto_EstudiantesInscritos" header="Alumnos Inscritos"
                        class="text-center" v-if="isActive('Estudiantes_Inscritos')">
                        <template #body="slotProps">
                            <div class="size-full flex items-center justify-center">
                                <IconButton icon="pi pi-eye"
                                    @click="goCuposEstatus({ proyectoid: slotProps.data.Proyecto.Proyecto_Id, estatus: 'aceptado' })"
                                    :text="slotProps.data.Proyecto.Proyecto_EstudiantesInscritos.toString()"
                                    color='bluedw'
                                    :disabled="!(slotProps.data.Proyecto.Proyecto_EstudiantesInscritos > 0)" />
                            </div>
                        </template>
                    </Column>
                    <Column header="Asignar Revisor" style="width: 10%;" v-if="isActive('Asignar_Revisor')">
                        <template #body="slotProps">
                            <div v-if="!proyectosLoading.includes(slotProps.data.Proyecto.Proyecto_Id)"
                                class="size-full flex items-center justify-center flex-col-reverse md:flex-row md:space-x-2">
                                <ConfirmButton
                                    :buttonText="slotProps.data.Profesor_Revisor.Profesor_Nombre ? 'Reasignar' : 'Asignar'"
                                    @confirm="asignarRevisor({ proyectoId: slotProps.data.Proyecto.Proyecto_Id, profesorId: revisorSelected, fechaMaxima: dateMax, profesorResponsableId: slotProps.data.Profesor_Responsable.Profesor_Id })"
                                    buttonColor="bluedw" buttonIcon="pi pi-user-plus" styleClass="btnConfirm" />
                            </div>
                            <div class="size-full flex items-center justify-center" v-else>
                                <i class="pi pi-spin pi-spinner-dotted" style="font-size: 2rem"></i>
                            </div>
                        </template>
                    </Column>
                    <Column header="Reasignar Asesor" class="staticColum" v-if="isActive('Asignar_Asesor')">
                        <template #body="slotProps">
                            <div class="size-full flex items-center justify-center"
                                @mouseenter="prefetchProyecto(slotProps.data.Proyecto.Proyecto_Id)">
                                <IconButton icon="pi pi-user-plus" text="Reasignar" color='bluedw'
                                    @click="goAsignarAsesor(slotProps.data.Proyecto.Proyecto_Id)" />
                            </div>
                        </template>
                    </Column>
                    <Column header="Evaluar Proyecto" class="staticColum" v-if="isActive('Evaluar_Proyecto')">
                        <template #body="slotProps">
                            <div class="size-full flex items-center justify-center"
                                @mouseenter="prefetchProyecto(slotProps.data.Proyecto.Proyecto_Id)"
                                v-if="slotProps.data.Profesor_Revisor.isOnDate">
                                <IconButton icon="pi pi-eye" text="Evaluar" color='bluedw'
                                    @click="goDetalles(slotProps.data.Proyecto.Proyecto_Id)" />
                            </div>
                            <div class="size-full flex items-center justify-center" v-else>
                                <IconButton icon="pi pi-eye" text="Vencida" color='bluedw' @click="" disabled />
                            </div>
                        </template>
                    </Column>
                    <Column header="Detalles Proyecto" class="staticColum" v-if="isActive('Detalles_Proyecto')">
                        <template #body="slotProps">
                            <div class="size-full flex items-center justify-center"
                                @mouseenter="prefetchProyecto(slotProps.data.Proyecto.Proyecto_Id)">
                                <IconButton icon="pi pi-eye" text="Detalles" color='bluedw'
                                    @click="goDetalles(slotProps.data.Proyecto.Proyecto_Id)" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import useBancoProyectos from '@/composables/useBancoProyectos';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ConfirmButton from '@/components/ConfirmButton.vue';
import Select from 'primevue/select';
import IconButton from '@/components/IconButton.vue';
import blockScaleSVG from '@/assets/svgs/block-scaleSVG.vue';
import DatePicker from 'primevue/datepicker';
import helperBanco from '@/utils/helperBanco';
import InputText from 'primevue/inputtext';
import NoDataAviso from '@/components/noDataAviso.vue';
import { useUserStore } from '@/stores/userStore';
import usePersonalDetalles from '@/composables/usePersonalDetalles';
import transformDate from '@/utils/transformDate';
import useProyecto from '@/composables/useProyecto';
interface Props {
    from: string;
    type?: string;
}
const props = defineProps<Props>();
const {
    dataBancoProyectos, isLoading,
    prefetchProyecto, refetchBancoProyectos
} = useBancoProyectos(props.type);

const {
    filters, selectedFilter, columnFilterValue,
    filterOptions, items, onTableFilter, aplicarFiltro,
    goDetalles, goCuposEstatus, goAsignarAsesor, isActive
} = helperBanco(props.type);

const { asignarRevisor, proyectosLoading } = useProyecto({fn: () => refetchBancoProyectos()});

const { dataProfesores, profesorSelected:revisorSelected } = usePersonalDetalles({});

const dateModel = ref<Date>(new Date(new Date().setDate(new Date().getDate() + 2)));
const dateMax = computed(() => transformDate(dateModel.value).toString());

const notificar = ref(true);


</script>
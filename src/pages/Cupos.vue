<template>
    <blockScaleSVG v-if="isLoading" />
    <div class="size-full xl:p-8 flex flex-col w-full h-full space-y-2 p-4 bg-gray-50 md:rounded-lg" v-else>
        <div class="w-full flex flex-col md:flex-row items-center justify-end md:space-x-8 space-y-2 md:space-y-0">
            <div class="w-full h-10 md:w-auto flex flex-row justify-between md:justify-center items-center space-x-8">
                <div class="flex items-center justify-start min-h-10 h-full space-x-3">
                    <div class="w-48 h-full flex items-center"><!-- Si no se usara se quita este div -->
                        <IconButton divClass="btnConfirm" icon="pi pi-arrow-left" text="Regresar" @click="goBack()" />
                    </div>
                    <h1 class="text-left font-semibold text-lg">
                        Solicitudes:
                    </h1>
                    <span class="font-bold text-color-5 text-2xl text-center">
                        {{ dataCupos?.length ?? 0 }}
                    </span>
                </div>
            </div>

            <input type="text" placeholder="Buscar Alumno..." class="tablaBuscador h-full bg-transparent">
        </div>
        <div class="size-full relative overflow-hidden">
            <div class="size-full rounded-lg" v-if="dataCupos">
                <DataTable removableSort scrollable scrollHeight="100%" :value="dataCupos"
                    tableStyle="min-width: 70rem; width: 100%; height: 100%;" class="tablaPrimeVue">
                    <Column sortable field="Alumno.Alumno_NumeroControl" header="Número de Control" style="width: 15%;"
                        class="text-center font-semibold"></Column>
                    <Column sortable field="FormatValues.Alumno_NombreCompleto" header="Nombre del Estudiante"
                        style="width: 30%;" class="text-center"></Column>
                    <Column sortable field="Alumno.Alumno_CarreraNombre" header="Carrera" style="width: 30%;"
                        class="text-center"></Column>

                    <Column :header="header()" style="width: 25%" class="staticColum" v-if="useNavStore().isRouteSelected === bancoResidencias.name">
                        <template #body="slotProps">
                            <div v-if="!cuposLoading.includes(slotProps.data.Cupo.Cupo_Id)">
                                <div class="size-full flex items-center justify-center"
                                    v-if="slotProps.data.Cupo.Cupo_Estatus === 'PENDIENTE'">
                                    <ConfirmButton buttonText="Aceptar" styleClass="btnConfirm"
                                        @confirm="updateCupoEstatus({ cupoId: slotProps.data.Cupo.Cupo_Id, cupoEstatus: true })" />
                                    <ConfirmButton buttonText="Rechazar" buttonColor="red" buttonIconPosition="right"
                                        buttonIcon="pi pi-times" styleClass="btnConfirm"
                                        @confirm="updateCupoEstatus({ cupoId: slotProps.data.Cupo.Cupo_Id, cupoEstatus: false })" />
                                </div>
                                <div class="size-full flex items-center justify-center"
                                    v-if="slotProps.data.Cupo.Cupo_Estatus === 'ACEPTADO'">
                                    <ConfirmButton buttonText="Retirar" buttonColor="red" buttonIconPosition="right"
                                        buttonIcon="pi pi-times" styleClass="btnConfirm"
                                        @confirm="anularCupo({ cupoId: slotProps.data.Cupo.Cupo_Id })" />
                                </div>
                            </div>
                            <div class="size-full flex items-center justify-center" v-else>
                                <i class="pi pi-spin pi-spinner-dotted" style="font-size: 2rem"></i>
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ConfirmButton from '@/components/ConfirmButton.vue';
import IconButton from '@/components/IconButton.vue';
import blockScaleSVG from '@/assets/svgs/block-scaleSVG.vue';
import useCupos from '@/composables/useCupos';
import { useNavStore } from '@/stores/navStore';
import { useRouter } from 'vue-router';
import {bancoResidencias} from '@/router/home/';

const router = useRouter();
interface Props {
    proyectoId: string,
    cupoEstatus: string | undefined,
    from: string
}
const props = defineProps<Props>();
const goBack = () => {
    router.go(-1);
};
const { dataCupos, updateCupoEstatus, anularCupo, isLoading, cuposLoading } = useCupos(props.proyectoId, props.cupoEstatus);

const header = () => {
    switch (props.cupoEstatus) {
        case 'PENDIENTE':
            return 'Evaluar Solicitud de Cupo';
        case 'ACEPTADO':
            return '¿Anular Cupo?';
        default:
            return 'Acciones';
    }
}

</script>
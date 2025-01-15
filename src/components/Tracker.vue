<template>
    <div :class="{
        'z-0 flex p-4 flex-col items-center w-full min-w-96 rounded-lg shadow-md border-2 relative border-gray-50 md:flex-row md:justify-between transition-all hover:scale-[1.007] duration-100 bg-white active:brightness-95 tutorial-div-detalles': true, // Clases comunes en ambos casos
        'brightness-100': proyectoEstatus !== 'OCULTO',
        'brightness-75': proyectoEstatus === 'OCULTO'
    }">
        <div class="flex flex-col w-full min-h-52   md:w-3/4 lg:w-3/4 xl:w-3/4 3xl:w-10/12 md:h-full">
            <div class="h-20 w-full flex items-center justify-center">
                <div class="w-full flex justify-center items-center">
                    <h2 class="text-sm text-center font-bold sm:text-base 3xl:text-lg line-clamp-3">Proyecto Propuesto:
                        {{ proyecto.Proyecto.Proyecto_Nombre }}</h2>
                </div>
            </div>
            <div class="flex justify-center items-center min-h-18 w-full">
                <div v-for="(step, index) in steps" :key="index" :class="['step-item-PP', getItemClass()]">
                    <div class="step-pp">{{ getStepSymbol(index) }}</div>
                    <div class="status-name-PP">{{ getStepLabel(index) }}</div>
                </div>
            </div>
        </div>
        <div class="flex w-full h-10 justify-center items-center      md:w-1/4 lg:w-1/4 xl:w-1/4 3xl:w-2/12 md:h-full">
            <div
                class="flex flex-row-reverse  w-full h-full justify-center px-2   md:flex-col md:space-y-2 md:py-4 md: items-center">
                <div class="flex items-center justify-center w-1/3 pl-2    md:pl-0  md:w-full md:h-1/6 md:items-end">
                    <p class="text-sm md:text-base font-bold text-gray-600 text-center">Fecha:
                        <span class="text-sm md:text-base font-light text-gray-600">{{
                            formatFecha(proyecto.Proyecto.Proyecto_FechaRegistro)
                        }}</span>
                    </p>
                </div>
                <div
                    class="flex flex-row w-2/3 justify-start items-center h-full space-x-2 space-y-0   md:space-x-0 md:space-y-2 md:w-full md:flex-col md:justify-center md:items-center md:px-4 md:max-w-44 md:h-4/6 text-xs lg:text-sm">
                    <div @click="emit('goToUpdate', proyecto.Proyecto.Proyecto_Id)"
                        class="absolute top-0 left-0 size-full z-40 cursor-pointer ">
                    </div>
                    <!--que sea visible solo si esta en el estado de enviado-->
                    <IconButton @click="emit('goToUpdate', proyecto.Proyecto.Proyecto_Id)" icon="pi pi-eye"
                        text="Detalles" color="bluedw" icon-position="right" :textAutoHide='true'
                        div-class="z-50 whitespace-normal py-1 w-full max-w-30 h-8"
                        styleClass="py-1 w-full max-w-30 h-8 btnConfirm button-tutorial-actualizar ">
                    </IconButton>
                    <!--que sea visible solo si esta en el estado de enviado-->
                    <ConfirmButton @confirm="deleteProyecto(proyecto.Proyecto.Proyecto_Id)" :tAutoHide='true'
                        style-class="z-50 whitespace-normal py-1 w-full max-w-30 h-8"
                        button-style="py-1 w-full max-w-30 h-8 btnConfirm button-tutorial-eliminar " button-icon="pi pi-trash"
                        button-color="red" button-icon-position="right" button-text="Eliminar"></ConfirmButton>
                    <!-- Por terminar -->
                    <div class=" z-50 whitespace-normal py-1 w-full max-w-30 h-8">
                        <IconButton @click="handleUpdate('OCULTO')" icon="pi pi-eye" :textAutoHide='true'
                            v-if="proyectoEstatus === 'ACEPTADO'" text="Desactivar" color="gray" icon-position="right"
                            styleClass="py-1 w-full max-w-30 h-8 btnConfirm">
                        </IconButton>
                        <IconButton @click="handleUpdate('ACEPTADO')" icon="pi pi-eye" :textAutoHide='true'
                            v-if="proyectoEstatus === 'OCULTO'" text="Activar" color="green" icon-position="right"
                            styleClass="py-1 w-full max-w-30 h-8 btnConfirm">
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
//'ACEPTADO', 'OCULTO'
import { computed, type PropType } from 'vue';
import transformProyect from '@/utils/transformProyect';
import { DateTime } from 'luxon';
import type { ProyectoBancoCompleto } from '@/interfaces/Proyectos';
import useProyecto from '@/composables/useProyecto';
import ConfirmButton from './ConfirmButton.vue';
import IconButton from './IconButton.vue';
import jsonCopy from '@/utils/jsonCopy';


const props = defineProps({
    index: {
        type: Number,
        required: true
    },
    proyecto: {
        type: Object as PropType<ProyectoBancoCompleto>,
        required: true
    }
});

const emit = defineEmits(['refetchBancoProyectos', 'goToUpdate']);
const { deleteProyecto, updateProyecto } = useProyecto({
    proyecto: props.proyecto,
    fn: () => emit('refetchBancoProyectos')
});

const handleUpdate = (estatus: string) => {
    //console.log('estatus', estatus);
    const proyectoF = jsonCopy(props.proyecto);
    proyectoF.Proyecto.Proyecto_Estatus = estatus;
    updateProyecto({ proyectoId: props.proyecto.Proyecto.Proyecto_Id, proyecto: transformProyect(proyectoF).toTemplate() })
};


const proyectoEstatus = computed(() => props.proyecto.Proyecto.Proyecto_Estatus);

const formatFecha = (fechaElaboracion: string) => {
    const fecha = DateTime.fromISO(fechaElaboracion, { locale: 'es' });
    return fecha.toLocaleString(DateTime.DATE_FULL);
}

const steps = ['Enviado', 'Revisión', 'Aceptar'];
type ProyectoEstatus = 'ASIGNADO' | 'ACEPTADO' | 'RECHAZADO' | 'PENDIENTE' | 'EN CURSO' | 'OCULTO';

const getItemClass = () => {
    return {
        'enviado': proyectoEstatus.value === 'PENDIENTE',
        'revision': proyectoEstatus.value === 'ASIGNADO',
        'aceptar': proyectoEstatus.value === 'ACEPTADO',
        'encurso': proyectoEstatus.value === 'EN CURSO',
        'oculto': proyectoEstatus.value === 'OCULTO',
        'rechazado': proyectoEstatus.value === 'RECHAZADO'
    };
};

const getStepLabel = (index: number): string => {
    const labels = {
        'ASIGNADO': ['Enviado', 'En Revisión', 'Pendiente'],
        'ACEPTADO': ['Enviado', 'Revisado', 'Aceptado'],
        'OCULTO': ['Enviado', 'Revisado', 'Oculto'],
        'EN CURSO': ['Enviado', 'Revisado', 'En Curso'],
        'RECHAZADO': ['Enviado', 'Revisado', 'Corregir'],
        'PENDIENTE': ['Enviado', 'Por Revisar', 'Pendiente'],
    };
    const statusLabels = labels[proyectoEstatus.value as ProyectoEstatus];
    return statusLabels && statusLabels[index] ? statusLabels[index] : "!";
};

const getStepSymbol = (index: number) => {
    switch (proyectoEstatus.value) {
        case 'RECHAZADO':
            if (index == 2) return '✕';
            else return '✓';
        case 'ACEPTADO': case 'EN CURSO': case 'OCULTO':
            return '✓';
        case 'ASIGNADO':
            if (index <= 1) return '✓';
            break;
        case 'PENDIENTE':
            if (index == 0) return '✓';
            break;
        default:
            return '';
    }
};
</script>
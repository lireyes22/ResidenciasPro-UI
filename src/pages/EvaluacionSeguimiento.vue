<template>
    <blockScaleSVG v-if="isLoadingResidencia" />
    <div class="newContenedorForm" v-else>
        <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl" v-if="dataResidencia">
            <template v-if="type === 'parcial'">
                <div
                    class="w-full flex flex-row items-center justify-center space-x-2 py-4 text-base 3xl:text-xl relative">
                    <h1>Proyecto: <span class="font-semibold">Nombre del proyecto</span></h1>

                    <Select :options="asesores" class="w-40 h-10 absolute right-0 text-base" optionValue="value"
                        optionLabel="label" v-model="selectedAsesor"></Select>
                </div>
                <div class="flex flex-row w-full min-h-8 3xl:min-h-10">
                    <div :class="selected === 'parcial1' ? 'basis-1/2 bg-color-3 h-full flex justify-center items-center' :
                        'basis-1/2 bg-color-2 h-full flex justify-center items-center shadow-inner cursor-pointer'"
                        @click="selected = 'parcial1'">
                        <h2 :class="selected === 'parcial1' ? 'text-sm font-bold 3xl:text-lg text-black' :
                            'text-sm font-semibold 3xl:text-lg text-gray-300'">Primer Parcial</h2>
                    </div>
                    <div :class="selected === 'parcial2' ? 'basis-1/2 bg-color-3 h-full flex justify-center items-center' :
                        'basis-1/2 bg-color-2 h-full flex justify-center items-center shadow-inner cursor-pointer'"
                        @click="selected = 'parcial2'">
                        <h2 :class="selected === 'parcial2' ? 'text-sm font-bold 3xl:text-lg text-black' :
                            'text-sm font-semibold 3xl:text-lg text-gray-300'">Segundo Parcial</h2>
                    </div>
                </div>
                <div class="flex w-full flex-grow flex-col bg-color-3 overflow-y-auto scroll-1"
                    v-if="!isLoadingResidencia">
                    <Parcial v-show="selected === 'parcial1' && selectedAsesor === 'interno'" parcial="Primer"
                        v-model:evaluacion="evaluacion.Seguimiento_Interno[0]" v-if="evaluacion.Seguimiento_Interno"/>
                    <Parcial v-show="selected === 'parcial2' && selectedAsesor === 'interno'" parcial="Segundo"
                        v-model:evaluacion="evaluacion.Seguimiento_Interno[1]" v-if="evaluacion.Seguimiento_Interno"/>
                    <ParcialExterno v-show="selected == 'parcial1' && selectedAsesor === 'externo'" parcial="Primer"
                        v-model:evaluacion="evaluacion.Seguimiento_Externo[0]" v-if="evaluacion.Seguimiento_Externo"/>
                    <ParcialExterno v-show="selected === 'parcial2' && selectedAsesor === 'externo'" parcial="Segundo"
                        v-model:evaluacion="evaluacion.Seguimiento_Externo[1]" v-if="evaluacion.Seguimiento_Externo"/>
                    <div class="filaSeccion px-8 mt-4">
                        <div class="w-full divDatos">
                            <label for="descripcion" class="informacion">Observaciones:</label>
                            <textarea v-show="selectedAsesor === 'interno'" id="descripcion" name="descripcion"
                                class="inputFormPP informacionExtensa pr-2 scroll-whiteTracking" rows="3"
                                placeholder="Observaciones de la evaluación"
                                v-model="evaluacion.Seguimiento_InternoObservaciones"></textarea>
                            <textarea v-show="selectedAsesor === 'externo'" id="descripcion" name="descripcion"
                                class="inputFormPP informacionExtensa pr-2 scroll-whiteTracking" rows="3"
                                placeholder="Observaciones de la evaluación"></textarea>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center w-full pt-2 px-6 bg-color-3 text-center">
                    <div class="flex flex-col sm:flex-row items-center justify-center w-full">
                        <div class="w-full flex flex-row items-center justify-center space-x-2 text-base 3xl:text-xl">
                            <h1>Número de Control: <span class="font-semibold">{{
                                dataResidencia.Alumno.Alumno_NumeroControl
                                    }}</span></h1>
                        </div>
                        <div class="w-full flex flex-row  items-center justify-center space-x-2 text-base 3xl:text-xl">
                            <h1>Nombre:<span class="font-semibold">{{ dataResidencia.FormatValues?.Alumno_NombreCompleto
                                    }}</span></h1>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center justify-center w-full">
                        <div class="w-full flex flex-row items-center justify-center space-x-2 text-base 3xl:text-xl">
                            <h1>Periodo de Realización de la Residencia: <span class="font-semibold">{{
                                dataResidencia.Residencia.SolicitudResidencia_PeriodoProyectado }}</span></h1>
                        </div>
                        <div class="w-full flex flex-row  items-center justify-center space-x-2 text-base 3xl:text-xl">
                            <h1>Programa Educativo: <span class="font-semibold">{{ dataResidencia.Proyecto.Proyecto_Tipo
                                    }}</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="min-h-16 w-full flex flex-row justify-center items-center rounded-b-2xl bg-color-3 gap-x-4">
                    <ConfirmButton buttonText="Guardar Evaluación"
                        @confirm="evaluateSeguimientoParcial({ body: evaluacion })" v-if="!isLoadingSeguimiento">
                    </ConfirmButton>
                    <IconButton icon="pi pi-times" text="Cancelar" color="red" @click="goBack()"
                        v-if="!isLoadingSeguimiento" />
                    <i class="pi pi-spin pi-spinner-dotted" style="font-size: 2rem" v-if="isLoadingSeguimiento"></i>
                </div>
            </template>
            <template v-if="type === 'reporte-final'">
                <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl">
                    <div class="flex items-center justify-center w-full h-14 z-10 rounded-t-2xl shadow-md bg-white">
                        <h1 class="text-xl font-semibold 2xl:text-2xl">Evaluación de Reporte Final</h1>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center justify-center w-full py-3 px-6 bg-color-3">
                        <div class="w-full flex flex-row items-center justify-center space-x-2 text-base 3xl:text-xl">
                            <h1>Número de Control:</h1>
                            <h2 class="font-semibold">20390282</h2><!-- Aqui se agrega el N.C del estudiante -->
                        </div>
                        <div class="w-full flex flex-row  items-center justify-center space-x-2 text-base 3xl:text-xl">
                            <h1>Nombre:</h1>
                            <h2 class="font-semibold">Yadira Medina Medina</h2>
                            <!-- Aqui se agrega el nombre del estudiante -->
                        </div>
                    </div>
                    <EvaluacionReporteFinal></EvaluacionReporteFinal>
                    <div
                        class="min-h-16 w-full flex flex-row justify-center items-end rounded-b-2xl bg-color-3 pb-6 gap-x-4">
                        <!-- <button class="pl-3 pr-1 h-8 space-x-0.5 btnGreenEnviarAceptar">
                            <p>Calificar</p>
                            <palomitaSVG class="pt-0.5" />
                        </button>
                        <button class="px-3 h-8 btnRedCancel">
                            <p>Cancelar</p>
                        </button>
                        <button class="px-2 py-1 h-8 btnMorado controlBtnTabla">
                            <p class="hidden md:block">Reporte Final</p>
                            <DocumentoSVG />
                        </button>
                        <button class="px-2 py-1 h-8 btnTablaDetallesInfoP controlBtnTabla">
                            <p class="hidden md:block">Detalles Proyecto</p>
                            <LibroSVG />
                        </button> -->
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import ConfirmButton from '@/components/ConfirmButton.vue';
import IconButton from '@/components/IconButton.vue';
import Parcial from '@/components/Parcial.vue';
import ParcialExterno from '@/components/ParcialExterno.vue';
import EvaluacionReporteFinal from './EvaluacionReporteFinal.vue';
import { ref, watch } from 'vue';
import Select from 'primevue/select';
import blockScaleSVG from '@/assets/svgs/block-scaleSVG.vue';
import useResidencia from '@/composables/useResidencia';
import useSeguimiento from '@/composables/useSeguimiento';
import { useRouter } from 'vue-router';
import jsonCopy from '@/utils/jsonCopy';
import seguimientoUtil from '@/utils/seguimiento';

const selected = ref('parcial1');
const asesores = [
    { label: 'Interno', value: 'interno' },
    { label: 'Externo', value: 'externo' },
];
const selectedAsesor = ref("interno");
interface Props {
    id: string;
    type: string;
    from: string;
}

const props = defineProps<Props>();
const { dataSeguimiento, evaluacion, isLoading: isLoadingSeguimiento, evaluateSeguimientoParcial } = useSeguimiento({ residenciaId: props.id, fn: () => refetchResidencia() });
const { dataResidencia, isLoading: isLoadingResidencia, refetchResidencia } = useResidencia(props.id);

const seguimientoTools = seguimientoUtil(evaluacion.value);

watch(dataResidencia, () => {
    if (dataResidencia) {
        if (dataResidencia.value) {
            seguimientoTools.setDataResidencia(dataResidencia.value);
        }
    }
}, { immediate: true, deep: true });

watch(dataSeguimiento, () => {
    if (dataSeguimiento.value) {
        seguimientoTools.setDataSeguimiento(jsonCopy(dataSeguimiento.value));
    }
}, { immediate: true, deep: true });

watch(() => evaluacion.value.Seguimiento_Interno, () => {
    if (evaluacion.value) {
        seguimientoTools.toSumInterno();
    }
}, { immediate: true, deep: true });

watch(() => evaluacion.value.Seguimiento_Externo, () => {
    if (evaluacion.value) {
        seguimientoTools.toSumExterno();
    }
}, { immediate: true, deep: true });

const router = useRouter();
const goBack = () => {
    router.go(-1);
};

</script>
<template>
    <div class="flex flex-col gap-y-4 px-8 pt-4 flex-grow w-full">
        <div
            class="bg-color-2 rounded-md min-h-10 flex flex-row font-medium text-white items-center shadow-md space-x-2 text-xs md:text-base">
            <div class="py-2 text-center w-4/6">Criterios a Evaluar {{ parcial }} Parcial</div>
            <div class="py-2 text-center w-1/6">Puntos Máximos</div>
            <div class="py-2 text-center w-1/6">Obtenidos</div>
        </div>
        <div class="flex w-full flex-grow flex-col bg-color-3 space-y-2">
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Asistió puntualmente a las reuniones de asesoría
                    </h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center">10</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center " type="number" id="puntualidad1"
                            name="puntualidad1" placeholder="Valor" min="0" max="10"
                            v-model="evaluacion.Interno_Puntualidad">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Demuestra conocimiento en el área de su especialidad
                    </h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center">20</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center" type="number" id="conocimiento1"
                            name="conocimiento1" placeholder="Valor" min="0" max="20"
                            v-model="evaluacion.Interno_Conocimiento">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Trabaja en equipo y se comunica en forma efectiva
                        (oral y escrito)
                    </h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center">15</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center" type="number" id="equipo1" name="equipo1"
                            placeholder="Valor" min="0" max="15" v-model="evaluacion.Interno_TrabajoEquipo">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Es dedicado y proactivo en las actividades
                        encomendadas</h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center">20</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center" type="number" id="actividad1"
                            name="actividad1" placeholder="Valor" min="0" max="20"
                            v-model="evaluacion.Interno_Dedicado">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Es ordenado y cumple satisfactoriamente con las
                        actividades
                        encomendadas en los tiempos establecidos por el programa</h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center ">20</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center" type="number" id="ordenado1"
                            name="ordenado1" placeholder="Valor" min="0" max="20" v-model="evaluacion.Interno_Ordenado">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Propone mejoras al proyecto</h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center ">15</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center " type="number" id="propone1" name="propone1"
                            placeholder="Valor" min="0" max="15" v-model="evaluacion.Interno_Mejoras">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Total de puntos del {{ props.parcial.toLowerCase() }} parcial</h1>
                </div>
                <div class="w-2/6 divDatos2">
                    <h1 class="informacion text-center items-center">{{ evaluacion.Interno_CalificacionTotal }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SeguimientoInterno } from '@/interfaces/Seguimientos';
import parcialUtils from '@/utils/seguimiento';
import { computed } from 'vue';
interface Props {
    parcial: string;
}

const props = defineProps<Props>();

const evaluacion = defineModel<SeguimientoInterno>('evaluacion',
    { required: true }
);

/* const parcialTotal = computed(() => {
    return evaluacion.value.Interno_Mejoras +
        evaluacion.value.Interno_Ordenado +
        evaluacion.value.Interno_Dedicado +
        evaluacion.value.Interno_TrabajoEquipo +
        evaluacion.value.Interno_Conocimiento +
        evaluacion.value.Interno_Puntualidad;
}); */

</script>

<style scoped></style>
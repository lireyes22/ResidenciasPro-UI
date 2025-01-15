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
                    <h1 class="informacion text-center">Asistió puntualmente en el horario establecido
                    </h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center">5</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center " type="number" id="puntualidad1"
                            name="puntualidad1" placeholder="Valor" min="0" max="5"
                            v-model="evaluacion.Externo_Puntualidad">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Trabaja en equipo y se comunica en forma efectiva (oral y
                        escrita)
                    </h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center">10</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center" type="number" id="conocimiento1"
                            name="conocimiento1" placeholder="Valor" min="0" max="10"
                            v-model="evaluacion.Externo_TrabajoEquipo">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Tiene iniciativa para colaborar
                    </h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center">5</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center" type="number" id="equipo1" name="equipo1"
                            placeholder="Valor" min="0" max="5" v-model="evaluacion.Externo_Iniciativa">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Propone mejoras al proyecto</h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center">10</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center" type="number" id="actividad1"
                            name="actividad1" placeholder="Valor" min="0" max="10" v-model="evaluacion.Externo_Mejoras">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Cumple con los objetivos correspondientes al proyecto</h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center ">15</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center" type="number" id="ordenado1"
                            name="ordenado1" placeholder="Valor" min="0" max="15"
                            v-model="evaluacion.Externo_Objetivos">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Es ordenado y cumple satisfactoriamente con las actividades
                        encomendadas en los tiempos establecidos en el cronograma</h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center ">15</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center " type="number" id="propone1" name="propone1"
                            placeholder="Valor" min="0" max="15" v-model="evaluacion.Externo_Ordenado">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Demuestra liderazgo en su actuar</h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center ">10</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center " type="number" id="propone1" name="propone1"
                            placeholder="Valor" min="0" max="10" v-model="evaluacion.Externo_Liderazgo">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Demuestra conocimiento en el área de su Especialidad</h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center ">20</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center " type="number" id="propone1" name="propone1"
                            placeholder="Valor" min="0" max="20" v-model="evaluacion.Externo_Conocimiento">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Demuestra un comportamiento ético (es disciplinado, acata
                        órdenes, respeta a sus compañeros de trabajo, entre otros)</h1>
                </div>
                <div class="w-2/6 flex flex-row space-x-2 h-full">
                    <div class="w-1/2 divDatos2">
                        <h1 class="informacion text-center items-center ">10</h1>
                    </div>
                    <div class="w-1/2 divDatos2">
                        <input class="informacion text-center items-center " type="number" id="propone1" name="propone1"
                            placeholder="Valor" min="0" max="10" v-model="evaluacion.Externo_Etica">
                    </div>
                </div>
            </div>
            <div class="filaSeccion space-x-2">
                <div class="w-4/6 divDatos2">
                    <h1 class="informacion text-center">Total de puntos del {{ parcial }} parcial </h1>
                </div>
                <div class="w-2/6 divDatos2">
                    <h1 class="informacion text-center items-center">{{ evaluacion.Externo_CalificacionTotal }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SeguimientoExterno } from '@/interfaces/Seguimientos';
import { computed } from 'vue';
interface Props {
    parcial: string;
}

const props = defineProps<Props>();

const evaluacion = defineModel<SeguimientoExterno>('evaluacion',
    { required: true }
);
</script>

<style scoped></style>
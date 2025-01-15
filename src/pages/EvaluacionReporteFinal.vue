<template>
    <div class="w-full h-full overflow-x-auto scroll-tabla">
        <div class="w-full h-full overflow-y-auto scroll-tabla">
            <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl">
                <form class="flex w-full flex-grow flex-col bg-color-3 overflow-y-auto scroll-1">
                    <div class="w-full flex flex-col gap-y-4 px-8 pt-1 pb-4 flex-grow" v-show="selected === 'proyecto'">
                        <!-- Los títulos -->
                        <div
                            class="bg-color-2 rounded-md min-h-10 flex flex-row font-medium text-white items-center shadow-md space-x-2 text-xs lg:text-base">
                            <div class="py-2 text-center w-4/6">Criterios a Evaluar</div>
                            <div class="py-2 text-center w-1/6">Puntos Máximos</div>
                            <div class="py-2 text-center w-1/6">Obtenidos</div>
                        </div>
                        <div class="flex w-full flex-grow flex-col space-y-2">
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Portada</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">1</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number" id="portada"
                                            name="portada" placeholder="Valor" min="0" max="1">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Agradecimientos</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">0</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="agradecimientos" name="agradecimientos" placeholder="Valor" min="0"
                                            max="0">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Resumen</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">2</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number" id="resumen"
                                            name="resumen" placeholder="Valor" min="0" max="2">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Índice</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">2</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number" id="indice"
                                            name="indice" placeholder="Valor" min="0" max="2">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Introducción</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">5 </h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="introduccion" name="introduccion" placeholder="Valor" min="0" max="5">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Problemas a resolver, priorizándolos
                                    </h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">5</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number" id="problema"
                                            name="problema" placeholder="Valor" min="0" max="5">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Objetivos</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">10</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number" id="objetivo"
                                            name="objetivo" placeholder="Valor" min="0" max="10">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Justificación</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">5</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="justificacion" name="justificacion" placeholder="Valor" min="0" max="5">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Marco teórico </h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">5</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number" id="marco"
                                            name="marco" placeholder="Valor" min="0" max="5">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Procedimiento y descripción de las
                                        actividades realizadas</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">10</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="procedimiento" name="procedimiento" placeholder="Valor" min="0"
                                            max="10">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2 text-center">
                                    <h1 class="3xl:text-lg font-bold text-color-1 text-sm">Resultados,
                                        planos, gráficas, prototipos, manuales, programas, análisis
                                        estadísticos, modelos matemáticos, simulaciones, normatividades,
                                        regulaciones y
                                        restricciones, entre otros. Solo para proyectos que por su naturaleza lo
                                        requieran: estudio de mercado, estudio técnico y estudio económico.
                                    </h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">35</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="resultados" name="resultados" placeholder="Valor" min="0" max="35">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Conclusiones, recomendaciones y
                                        experiencia profesional adquirida.
                                    </h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">10</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="conclusiones" name="conclusiones" placeholder="Valor" min="0" max="10">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Competencias desarrolladas y/o aplicadas
                                    </h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">5</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="competencias" name="competencias" placeholder="Valor" min="0" max="5">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Fuentes de información</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">5</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number" id="fuentes"
                                            name="fuentes" placeholder="Valor" min="0" max="5">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Calificación Total</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">100</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center"></h1>
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Calificación Promedio</h1>
                                </div>
                                <div class="w-2/6 divDatos2">
                                    <h1 class="informacion items-center text-center"></h1>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Calificación Final de Residencia
                                        Profesional</h1>
                                </div>
                                <div class="w-2/6 divDatos2">
                                    <h1 class="informacion items-center text-center"></h1>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2 pt-4">
                                <div class="w-full divDatos">
                                    <h1 class="informacion">Observaciones:</h1>
                                    <textarea id="observaciones" name="observaciones"
                                        class="inputFormPP informacionExtensa pr-4" rows="2"
                                        placeholder="Las observaciones son:"></textarea>
                                </div>
                            </div>
                        </div>
                    </div> <!-- Hasta aqui -->
                    <div class="w-full flex flex-col gap-y-4 px-8 pt-1 pb-4 flex-grow"
                        v-show="selected === 'investigacion'">
                        <!-- Los títulos -->
                        <div
                            class="bg-color-2 rounded-md min-h-10 flex flex-row font-medium text-white items-center shadow-md space-x-2 text-xs md:text-base">
                            <div class="py-2 text-center w-4/6">Criterios a Evaluar</div>
                            <div class="py-2 text-center w-1/6">Puntos Máximos</div>
                            <div class="py-2 text-center w-1/6">Obtenidos</div>
                        </div>
                        <div class="flex w-full flex-grow flex-col bg-color-3 space-y-2">
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Portada
                                    </h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">1</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number" id="portada1"
                                            name="portada1" placeholder="Valor" min="0" max="1">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Agradecimientos</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">0</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="agradecimientos1" name="agradecimientos1" placeholder="Valor" min="0"
                                            max="0">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Resumen</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">2</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number" id="resumen1"
                                            name="resumen1" placeholder="Valor" min="0" max="2">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Índice</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">2</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number" id="indice1"
                                            name="indice1" placeholder="Valor" min="0" max="2">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Introducción</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">5</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="introduccion1" name="introduccion1" placeholder="Valor" min="0" max="5">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Antecedentes o marco teórico</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">5</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="antecedentes1" name="antecedentes1" placeholder="Valor" min="0" max="5">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Justificación</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">5</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="justificacion1" name="justificacion1" placeholder="Valor" min="0"
                                            max="5">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Objetivos</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">10</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number" id="objetivo1"
                                            name="objetivo1" placeholder="Valor" min="0" max="10">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Metodología</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">10</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="metodologia1" name="metodologia1" placeholder="Valor" min="0" max="10">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Resultados</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">15</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="resultados1" name="resultados1" placeholder="Valor" min="0" max="15">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Discusiones</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">25</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="discusiones1" name="discusiones1" placeholder="Valor" min="0" max="25">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Conclusiones</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">15</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number"
                                            id="conclusiones1" name="conclusiones1" placeholder="Valor" min="0"
                                            max="15">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Fuentes de información</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">5</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <input class="informacion items-center text-center" type="number" id="fuentes1"
                                            name="fuentes1" placeholder="Valor" min="0" max="5">
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Calificación Total</h1>
                                </div>
                                <div class="w-2/6 flex flex-row space-x-2 h-full">
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center">100</h1>
                                    </div>
                                    <div class="w-1/2 divDatos2">
                                        <h1 class="informacion items-center text-center"></h1>
                                    </div>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Calificación Promedio</h1>
                                </div>
                                <div class="w-2/6 divDatos2">
                                    <h1 class="informacion items-center text-center">
                                    </h1>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2">
                                <div class="w-4/6 divDatos2">
                                    <h1 class="informacion text-center">Calificación Final de Residencia
                                        Profesional</h1>
                                </div>
                                <div class="w-2/6 divDatos2">
                                    <h1 class="informacion items-center text-center"></h1>
                                </div>
                            </div>
                            <div class="filaSeccion space-x-2 pt-4">
                                <div class="w-full divDatos">
                                    <h1 class="informacion">Observaciones:</h1>
                                    <textarea id="observaciones1" name="observaciones1"
                                        class="inputFormPP informacionExtensa pr-4" rows="2"
                                        placeholder="Las observaciones son:"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const selected = ref('investigacion'); // El div que se muestra por defecto

</script>
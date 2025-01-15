<template>
    <div class="newContenedorForm ">

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
                    <h2 class="font-semibold">Yadira Medina Medina</h2><!-- Aqui se agrega el nombre del estudiante -->
                </div>

            </div>


            <div class="w-full h-full overflow-x-auto scroll-tabla">
                <div class="w-full h-full overflow-y-auto scroll-tabla">
                    <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl">

                        <div class="flex flex-row w-full  min-h-8 3xl:min-h-10">

                            <div :class="selected === 'proyecto' ? 'seccionSelected' :
                                'seccionNoSelected'" @click="selected = 'proyecto'">
                                <h2 :class="selected === 'proyecto' ? 'text-base font-bold 3xl:text-lg text-black text-center line-clamp-1' :
                                    'text-base font-semibold 3xl:text-lg text-gray-300 text-center line-clamp-1'">
                                    Proyecto</h2>
                            </div>

                            <div :class="selected === 'investigacion' ? 'seccionSelected' :
                                'seccionNoSelected'" @click="selected = 'investigacion'">
                                <h2 :class="selected === 'investigacion' ? 'text-base font-bold 3xl:text-lg text-black text-center line-clamp-1' :
                                    'text-base font-semibold 3xl:text-lg text-gray-300 text-center line-clamp-1'">
                                    Investigación</h2>
                            </div>

                        </div>

                        <form class="flex w-full flex-grow flex-col bg-color-3 overflow-y-auto scroll-1">

                            <div class="w-full flex flex-col gap-y-4 px-8 pt-1 pb-4 flex-grow"
                                v-show="selected === 'proyecto'">
                                <!-- Los títulos -->
                                <div
                                    class="bg-color-2 rounded-md min-h-10 flex flex-row font-medium text-white items-center shadow-md space-x-2 text-xs lg:text-base">
                                    <div class="py-2 text-center w-1/2">Criterios a Evaluar</div>
                                    <div class="py-2 text-center w-1/6">Puntos Máximos</div>
                                    <div class="py-2 text-center w-1/6">Asesor <span
                                            class="hidden md:inline-block">Interno</span></div>
                                    <div class="py-2 text-center w-1/6">Obtenido</div>

                                </div>

                                <div class="flex w-full flex-grow flex-col space-y-2">

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Portada</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">1</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="portada" name="portada" placeholder="Valor" min="0" max="1">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Agradecimientos</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">0</h1>
                                            </div>

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>

                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="agradecimientos" name="agradecimientos" placeholder="Valor"
                                                    min="0" max="0">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Resumen</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">2</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="resumen" name="resumen" placeholder="Valor" min="0" max="2">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Índice</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">2</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="indice" name="indice" placeholder="Valor" min="0" max="2">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Introducción</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">5</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="introduccion" name="introduccion" placeholder="Valor" min="0"
                                                    max="5">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Problemas a resolver, priorizándolos
                                            </h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">5</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="problema" name="problema" placeholder="Valor" min="0" max="5">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Objetivos</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">10</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="objetivo" name="objetivo" placeholder="Valor" min="0" max="10">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Justificación</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">5</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="justificacion" name="justificacion" placeholder="Valor" min="0"
                                                    max="5">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Marco teórico </h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">5</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="marco" name="marco" placeholder="Valor" min="0" max="5">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Procedimiento y descripción de las
                                                actividades realizadas</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">10</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="procedimiento" name="procedimiento" placeholder="Valor" min="0"
                                                    max="10">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2 text-center">
                                            <h1 class="3xl:text-lg font-bold text-color-1 text-sm">Resultados,
                                                planos, gráficas, prototipos, manuales, programas, análisis
                                                estadísticos, modelos matemáticos, simulaciones, normatividades,
                                                regulaciones y
                                                restricciones, entre otros. Solo para proyectos que por su naturaleza lo
                                                requieran: estudio de mercado, estudio técnico y estudio económico.
                                            </h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">35</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="resultados" name="resultados" placeholder="Valor" min="0"
                                                    max="35">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Conclusiones, recomendaciones y
                                                experiencia profesional adquirida.
                                            </h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">10</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="conclusiones" name="conclusiones" placeholder="Valor" min="0"
                                                    max="10">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Competencias desarrolladas y/o aplicadas
                                            </h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">5</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="competencias" name="competencias" placeholder="Valor" min="0"
                                                    max="5">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Fuentes de información</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">5</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="fuentes" name="fuentes" placeholder="Valor" min="0" max="5">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Calificación Total</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full justify-end ">
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">100</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Calificación Promedio</h1>
                                        </div>

                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion items-center text-center"></h1>
                                        </div>


                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Calificación Final de Residencia
                                                Profesional</h1>
                                        </div>
                                        <div class="w-1/2 divDatos2">
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
                                <!--parcial 2-->

                                <!-- Los títulos -->

                                <div
                                    class="bg-color-2 rounded-md min-h-10 flex flex-row font-medium text-white items-center shadow-md space-x-2 text-xs md:text-base">
                                    <div class="py-2 text-center w-1/2">Criterios a Evaluar</div>
                                    <div class="py-2 text-center w-1/6">Puntos Máximos</div>
                                    <div class="py-2 text-center w-1/6">Asesor <span
                                            class="hidden md:inline-block">Interno</span></div>
                                    <div class="py-2 text-center w-1/6">Obtenido</div>
                                </div>

                                <div class="flex w-full flex-grow flex-col bg-color-3 space-y-2">

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Portada
                                            </h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">1</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="portada1" name="portada1" placeholder="Valor" min="0" max="1">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Agradecimientos</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">0</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="agradecimientos1" name="agradecimientos1" placeholder="Valor"
                                                    min="0" max="0">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Resumen</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">2</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="resumen1" name="resumen1" placeholder="Valor" min="0" max="2">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Índice</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">2</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="indice1" name="indice1" placeholder="Valor" min="0" max="2">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Introducción</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">5</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="introduccion1" name="introduccion1" placeholder="Valor" min="0"
                                                    max="5">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Antecedentes o marco teórico</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">5</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="antecedentes1" name="antecedentes1" placeholder="Valor" min="0"
                                                    max="5">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Justificación</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">5</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="justificacion1" name="justificacion1" placeholder="Valor"
                                                    min="0" max="5">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Objetivos</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">10</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="objetivo1" name="objetivo1" placeholder="Valor" min="0"
                                                    max="10">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Metodología</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">10</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="metodologia1" name="metodologia1" placeholder="Valor" min="0"
                                                    max="10">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Resultados</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">15</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="resultados1" name="resultados1" placeholder="Valor" min="0"
                                                    max="15">
                                            </div>

                                        </div>
                                    </div>


                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Discusiones</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">25</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="discusiones1" name="discusiones1" placeholder="Valor" min="0"
                                                    max="25">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Conclusiones</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">15</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="conclusiones1" name="conclusiones1" placeholder="Valor" min="0"
                                                    max="15">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Fuentes de información</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">

                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">5</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <input class="informacion items-center text-center" type="number"
                                                    id="fuentes1" name="fuentes1" placeholder="Valor" min="0" max="5">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Calificación Total</h1>
                                        </div>
                                        <div class="w-1/2 flex flex-row space-x-2 h-full">
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center">100</h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                            <div class="w-1/3 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Calificación Promedio</h1>
                                        </div>
                                        
                                            <div class="w-1/2 divDatos2">
                                                <h1 class="informacion items-center text-center"></h1>
                                            </div>
                                           
                                      

                                    </div>

                                    <div class="filaSeccion space-x-2">
                                        <div class="w-1/2 divDatos2">
                                            <h1 class="informacion text-center">Calificación Final de Residencia
                                                Profesional</h1>
                                        </div>
                                        <div class="w-1/2 divDatos2">
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

            <div class="min-h-16 w-full flex flex-row justify-center items-end rounded-b-2xl bg-color-3 pb-6 gap-x-4">

                <button class="pl-3 pr-1 h-8 space-x-0.5 btnGreenEnviarAceptar">
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
                </button>

            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const selected = ref('proyecto'); // El div que se muestra por defecto

</script>
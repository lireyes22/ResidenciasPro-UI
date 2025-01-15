<template>
  <div class="contenedorFormulario">
    <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl">
      <div
        class="flex items-center bg-color-1 justify-center w-full min-h-10 3xl:min-h-12 max-h-10 3xl:max-h-12 z-10 shadow-md sm:rounded-t-xl relative">
        <h1 class="text-lg 3xl:text-xl font-semibold text-white">Proponer Proyecto</h1>
      </div>
      <div class="w-full h-full overflow-x-auto scroll-tabla">
        <div class="w-full h-full overflow-y-auto scroll-tabla">
          <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl">
            <div class="flex w-full flex-grow flex-col bg-color-3 overflow-y-auto scroll-1">
              <div class="w-full flex flex-col gap-y-4 p-8 flex-grow">
                <div class="filaSeccionResposive espacioDivDatosResponsive">
                  <div class="size-full md:w-3/5 3xl:w-4/5 relative">
                    <div class="divDatos w-full">
                      <label for="nombreProyecto" class="informacion">Nombre del
                        Proyecto:</label>
                      <input class="inputFormPP" type="text" id="nombreProyecto" name="nombreProyecto"
                        placeholder="Ingrese el nombre del proyecto" required>
                    </div>
                  </div>
                  <div class="size-full md:w-2/5 3xl:w-1/5 relative">
                    <div class="divDatos w-full ">
                      <label for="tipoProyecto" class="informacion">Opción Elegida:</label>
                      <el-select placeholder="Selecciona el tipo de proyecto" required style="z-index: 0;">
                        <el-option label="Propuesta del Alumno" value="Propuesta Propia"></el-option>
                        <el-option label="Empresa o Institución Externa" value="Trabajador"></el-option>
                        <el-option label="Propuesta del Maestro" value="Banco De Proyectos"></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
                <div class="filaSeccionResposive espacioDivDatosResponsive">
                  <div class="size-full relative">
                    <div class="w-full divDatos">
                      <label class="informacion">Tipo de Proyecto:</label>
                      <div class="w-full flex flex-row">
                        <div class="w-1/2 space-x-2">
                          <input type="radio" id="ciieSi" name="ciie" value="Interno">
                          <label class="dato" for="ciieSi">Interno</label><br>
                        </div>
                        <div class="w-1/2 space-x-2">
                          <input type="radio" id="ciieNo" name="ciie" value="Externo">
                          <label class="dato" for="ciieNo">Externo</label><br>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="size-full relative">
                    <div class="w-full divDatos">
                      <label class="informacion">Opciones de proyecto:</label>
                      <div class="w-full flex flex-row">
                        <div class="w-full space-x-1 md:space-x-3">
                          <input type="checkbox" id="ciie" name="ciie" value="CIIE">
                          <label for="ciie">CIIE</label><br>
                        </div>
                        <div class="w-full space-x-1 md:space-x-3">
                          <input type="checkbox" id="dual" name="dual" value="Dual">
                          <label for="dual">Dual</label>
                        </div>
                        <div class="w-full space-x-1 md:space-x-3">
                          <el-select required style="z-index: 0;" default-second-option>
                            <el-option label="Investigación"></el-option>
                            <el-option label="Profesionalizante"></el-option>
                          </el-select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filaSeccionResposive espacioDivDatosResponsive">
                  <div class="divDatos w-full">
                    <label for="nombreEmpresa" class="informacion">Nombre de la Empresa:</label>
                    <el-select filterable placeholder="Select">
                      <el-option>
                      </el-option>
                    </el-select>
                    <input class="inputFormPP bg-white" type="text" value="Instituto Tecnologico de Chetumal" disabled>
                  </div>
                </div>
                <div class="filaSeccion">
                  <div class="divDatos w-full">
                    <label for="nombreResponsable" class="informacion">Nombre del Responsable
                      del Proyecto:</label>
                    <label for="nombreResponsable" class="inputFormPP"></label>
                  </div>
                </div>
                <div class="filaSeccionResposive espacioDivDatosResponsive">
                  <div class="size-full w-full md:w-1/3 relative">
                    <div class="divDatos w-full">
                      <label for="lugar" class="informacion">Lugar:</label>
                      <input class="inputFormPP" type="text" id="lugar" name="lugar" placeholder="Ingrese un lugar"
                        required>
                    </div>
                  </div>
                  <div class="size-full md:w-1/3 relative">
                    <div class="divDatos w-full">
                      <label for="tiempoEstimado" class="informacion">Tiempo Estimado (Meses):</label>
                      <div class="flex items-center">
                        <input class="inputFormPP" type="number" id="tiempoEstimado" name="tiempoEstimado" min="4"
                          placeholder="Ingrese el tiempo estimado" required>
                      </div>
                    </div>
                  </div>
                  <div class="size-full md:w-1/3 relative">
                    <div class="divDatos w-full">
                      <label for="numEstudiantes" class="informacion">Estudiantes
                        Requeridos:</label>
                      <input class="inputFormPP" type="number" id="numEstudiantes" name="numEstudiantes" min="1"
                        placeholder="Ingrese un número de estudiantes" required>
                    </div>
                  </div>
                </div>
                <div class="filaSeccion">
                  <div class="size-full relative">
                    <div class="w-full divDatos">
                      <label for="descripcion" class="informacion">Descripción (Introducción y Antecedentes):</label>
                      <textarea id="descripcion" name="descripcion"
                        class="inputFormPP informacionExtensa pr-2 scroll-whiteTracking" rows="6"
                        placeholder="Ingrese la descripción del proyecto" required></textarea>
                    </div>
                  </div>
                </div>
                <div class="filaSeccion">
                  <div class="size-full relative">
                    <div class="w-full divDatos">
                      <label for="objetivo" class="informacion">Objetivos:</label>
                      <textarea id="objetivo" name="objetivo"
                        class="inputFormPP informacionExtensa pr-2 scroll-whiteTracking" rows="5"
                        placeholder="Ingrese el objetivo del proyecto" required></textarea>
                    </div>
                  </div>
                </div>
                <div class="filaSeccion">
                  <div class="size-full relative">
                    <div class="w-full divDatos">
                      <label for="impacto" class="informacion">Impacto:</label>
                      <textarea id="impacto" name="impacto"
                        class="inputFormPP informacionExtensa pr-2 scroll-whiteTracking" rows="4"
                        placeholder="Ingrese el impacto del proyecto" required></textarea>
                    </div>
                  </div>
                </div>
                <div class="filaSeccion">
                  <div class="size-full relative">
                    <div class="w-full divDatos">
                      <label for="impacto" class="informacion">Referencias:</label>
                      <textarea type="text" id="referencias" name="referencias"
                        class="inputFormPP informacionExtensa pr-2 scroll-whiteTracking"
                        placeholder="Ingrese las referencias del proyecto" required rows="5"></textarea>
                    </div>
                  </div>
                </div>
                <div class="filaSeccion">
                  <div class="size-full relative">
                    <div class="divDatos w-full">
                      <h2 class="informacion">Carreras Requeridas:</h2>
                      <el-tooltip class="box-item" effect="dark" content="Puedes Seleccionar más de una carrera"
                        placement="top">
                        <el-select style="z-index: 0;" multiple placeholder="Selecciona las carreras">
                          <el-option>
                          </el-option>
                        </el-select>
                      </el-tooltip>
                    </div>
                  </div>
                </div>
                <div class="filaSeccion">
                  <div class="size-full relative">
                    <div class="w-full divDatos">
                      <label for="lineaInvestigacion" class="informacion">Línea de Investigación
                        que beneficia:</label>
                      <el-select filterable placeholder="Selecciona la Linea de Investigación">
                        <el-option />
                      </el-select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="min-h-16 w-full flex flex-row justify-center items-end rounded-b-2xl bg-color-3 pb-6 gap-x-4">
        <button class="pl-3 pr-1 h-8 space-x-0.5 btnGreenEnviarAceptar">
          <p>Enviar</p>
          <palomitaSVG class="pt-0.5" />
        </button>
        <button class="pl-3 pr-1 h-8 btnYellowEditar">
          <p>Observaciones</p>
          <VerSvg class="pt-0.5" />
        </button>
        <el-popover placement="top" :width="340">
          <p class="font-semibold">Elige una opción</p>
          <div class="flex flex-row mt-2">
            <el-button size="small" type="danger">Ver</el-button>
            <el-button size="small" type="success">Guardar</el-button>
            <el-button size="small" type="primary">Actualizar</el-button>
            <el-button size="small" type="danger">Eliminar</el-button>
            <el-button size="small" type="info" text>Regresar</el-button>
          </div>
          <template #reference>
            <button class="pl-3 pr-1 h-8 space-x-0.5 btnMorado">
              <p>Borrador</p>
              <DocumentoSVG class="pt-0.5" />
            </button>
          </template>
        </el-popover>
        <button class="pl-3 pr-1 h-8 btnRedCancel">
          <p>Cancelar</p>
          <TachaSVG class="pt-0.5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SVGS
import palomitaSVG from '@/assets/svgs/palomitaSVG.vue';
import VerSvg from '@/assets/svgs/verSvg.vue';
import DocumentoSVG from '@/assets/svgs/documentoSVG.vue';
import TachaSVG from '@/assets/svgs/tachaSVG.vue';

</script>


<style scoped></style>
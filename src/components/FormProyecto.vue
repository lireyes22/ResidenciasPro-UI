<template>
    <div class="w-full flex flex-col gap-y-4 p-8 flex-grow">
        <div class="filaSeccionResposive espacioDivDatosResponsive">
            <div class="size-full md:w-3/5 3xl:w-4/5 relative">
                <div class="divDatos w-full">
                    <label for="nombreProyecto" class="informacion">Nombre del
                        Proyecto:</label>
                    <input class="inputFormPP" type="text" id="nombreProyecto" v-model="proyecto.Proyecto_Nombre"
                        name="nombreProyecto" placeholder="Ingrese el nombre del proyecto" required>
                    <DivObservaciones :isVisible="isObservacionesVisible"
                        :observacion="observaciones?.ProyectoNombre" />
                </div>
            </div>
            <div class="size-full md:w-2/5 3xl:w-1/5 relative">
                <div class="divDatos w-full ">
                    <label for="tipoProyecto" class="informacion">Opción Elegida:</label>
                    <el-select v-model="proyecto.Proyecto_TipoOpcion" placeholder="Selecciona el tipo de proyecto"
                        required style="z-index: 0;">
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
                            <input type="radio" id="ciieSi" name="ciie" value="Interno"
                                v-model="proyecto.Proyecto_Tipo">
                            <label class="dato" for="ciieSi">Interno</label><br>
                        </div>
                        <div class="w-1/2 space-x-2">
                            <input type="radio" id="ciieNo" name="ciie" value="Externo"
                                v-model="proyecto.Proyecto_Tipo">
                            <label class="dato" for="ciieNo">Externo</label><br>
                        </div>
                    </div>
                    <DivObservaciones :isVisible="isObservacionesVisible" :observacion="observaciones?.ProyectoTipo" />
                </div>
            </div>
            <div class="size-full relative">
                <div class="w-full divDatos">
                    <label class="informacion">Opciones de proyecto:</label>
                    <div class="w-full flex flex-row">
                        <div class="w-full mr-2">
                            <el-select required style="z-index: 0;" v-model="proyecto.Proyecto_TipoOptativa" clearable
                                value-on-clear="">
                                <el-option label="CIIE" value="CIIE"
                                    v-if="proyecto.Proyecto_Tipo === 'Interno'"></el-option>
                                <el-option label="Dual" value="Dual"
                                    v-if="proyecto.Proyecto_Tipo === 'Externo'"></el-option>
                            </el-select>
                        </div>
                        <div class="w-full space-x-1 md:space-x-3">
                            <el-select required style="z-index: 0;" v-model="proyecto.Proyecto_Investigacion">
                                <el-option label="Investigación" :value="true"></el-option>
                                <el-option label="Profesionalizante" :value="false"></el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="filaSeccionResposive espacioDivDatosResponsive">
            <div class="divDatos w-full">
                <label for="nombreEmpresa" class="informacion">Nombre de la Empresa:</label>
                <Select :options="empresas" v-model="proyecto.Empresa" v-if="proyecto.Proyecto_Tipo === 'Externo'"
                    filter optionLabel="Empresa_Nombre" optionValue="Empresa_Id"
                    placeholder="Selecciona la Empresa Requerida" :maxSelectedLabels="3" class="w-full"
                    :loading="isLoadingEmpresas"></Select>
                <input class="inputFormPP bg-white" type="text" v-else value="Instituto Tecnologico de Chetumal"
                    disabled>
            </div>
        </div>
        <div class="filaSeccion">
            <div class="divDatos w-full">
                <label for="nombreResponsable" class="informacion">Nombre del Responsable
                    del Proyecto:</label>
                <label for="nombreResponsable" class="inputFormPP">{{ useUserStore().userNombre }}</label>
            </div>
        </div>
        <div class="filaSeccionResposive espacioDivDatosResponsive">
            <div class="size-full w-full md:w-1/3 relative">
                <div class="divDatos w-full">
                    <label for="lugar" class="informacion">Lugar:</label>
                    <input class="inputFormPP" type="text" id="lugar" name="lugar" v-model="proyecto.Proyecto_Lugar"
                        placeholder="Ingrese un lugar" required>
                </div>
            </div>
            <div class="size-full md:w-1/3 relative">
                <div class="divDatos w-full">
                    <label for="tiempoEstimado" class="informacion">Tiempo Estimado
                        (Meses):</label>
                    <div class="flex items-center">
                        <input class="inputFormPP" type="number" id="tiempoEstimado" name="tiempoEstimado" min="4"
                            v-model="proyecto.Proyecto_TiempoEstimado" placeholder="Ingrese el tiempo estimado"
                            required>
                        <DivObservaciones :isVisible="isObservacionesVisible"
                            :observacion="observaciones?.ProyectoTiempoE" />
                    </div>
                </div>
            </div>
            <div class="size-full md:w-1/3 relative">
                <div class="divDatos w-full">
                    <label for="numEstudiantes" class="informacion">Estudiantes
                        Requeridos:</label>
                    <input class="inputFormPP" type="number" id="numEstudiantes" name="numEstudiantes" min="1"
                        v-model="proyecto.Proyecto_EstudiantesRequeridos" placeholder="Ingrese un número de estudiantes"
                        required>
                    <DivObservaciones :isVisible="isObservacionesVisible"
                        :observacion="observaciones?.ProyectoNumeroResidentes" />
                </div>
            </div>
        </div>
        <div class="filaSeccion">
            <div class="size-full relative">
                <div class="w-full divDatos">
                    <label for="descripcion" class="informacion">Descripción (Introducción y
                        Antecedentes):</label>
                    <textarea id="descripcion" name="descripcion"
                        class="inputFormPP informacionExtensa pr-2 scroll-whiteTracking" rows="6"
                        placeholder="Ingrese la descripción del proyecto" v-model="proyecto.Proyecto_Descripcion"
                        required></textarea>
                    <DivObservaciones :isVisible="isObservacionesVisible"
                        :observacion="observaciones?.ProyectoDescripcion" />
                </div>
            </div>
        </div>
        <div class="filaSeccion">
            <div class="size-full relative">
                <div class="w-full divDatos">
                    <label for="objetivo" class="informacion">Objetivos:</label>
                    <textarea id="objetivo" name="objetivo"
                        class="inputFormPP informacionExtensa pr-2 scroll-whiteTracking" rows="5"
                        placeholder="Ingrese el objetivo del proyecto" v-model="proyecto.Proyecto_Objetivo"
                        required></textarea>
                    <DivObservaciones :isVisible="isObservacionesVisible"
                        :observacion="observaciones?.ProyectoObjetivo" />
                </div>
            </div>
        </div>
        <div class="filaSeccion">
            <div class="size-full relative">
                <div class="w-full divDatos">
                    <label for="impacto" class="informacion">Impacto:</label>
                    <textarea id="impacto" name="impacto"
                        class="inputFormPP informacionExtensa pr-2 scroll-whiteTracking" rows="4"
                        placeholder="Ingrese el impacto del proyecto" v-model="proyecto.Proyecto_Impacto"
                        required></textarea>
                    <DivObservaciones :isVisible="isObservacionesVisible"
                        :observacion="observaciones?.ProyectoImpacto" />
                </div>
            </div>
        </div>
        <div class="filaSeccion">
            <div class="size-full relative">
                <div class="w-full divDatos">
                    <label for="impacto" class="informacion">Referencias:</label>
                    <textarea type="text" id="referencias" name="referencias"
                        class="inputFormPP informacionExtensa pr-2 scroll-whiteTracking"
                        placeholder="Ingrese las referencias del proyecto" required
                        v-model="proyecto.Proyecto_Referencias" rows="5"></textarea>
                    <DivObservaciones :isVisible="isObservacionesVisible"
                        :observacion="observaciones?.ProyectoReferencia" />
                </div>
            </div>
        </div>
        <div class="filaSeccion">
            <div class="size-full relative">
                <div class="divDatos w-full">
                    <h2 class="informacion">Carreras Requeridas:</h2>
                    <MultiSelect v-model="proyecto.Proyecto_Carreras" :options="carreras" filter
                        optionLabel="Carrera_Nombre" optionValue="Carrera_Id"
                        placeholder="Selecciona las Carreras Requeridas" :maxSelectedLabels="3" class="w-full"
                        :loading="isLoadingCarreras" />
                    <DivObservaciones :isVisible="isObservacionesVisible"
                        :observacion="observaciones?.ProyectoCarreraRequerida" />
                </div>
            </div>
        </div>
        <div class="filaSeccion">
            <div class="size-full relative">
                <div class="w-full divDatos">
                    <label for="lineaInvestigacion" class="informacion">Línea de Investigación
                        que beneficia:</label>
                    <Select v-model="proyecto.Proyecto_LineaInvestigacion" :options="lineasInvestigacion"
                        optionValue="LineaInvestigacion_Nombre" placeholder="Selecciona la Línea de Investigación"
                        optionLabel="LineaInvestigacion_Nombre" class="w-full"></Select>
                    <DivObservaciones :isVisible="isObservacionesVisible"
                        :observacion="observaciones?.ProyectoLineaInv" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getCarreras } from "@/services/carrerasService";
import { getEmpresas } from "@/services/empresasService";
import type { ProyectoObservaciones, ProyectoTemplate } from "@/interfaces/Proyectos";
import type { Carrera, LineaInvestigacion } from "@/interfaces/Carreras";
import { useUserStore } from "@/stores/userStore";
import { ref, warn, watch } from "vue";
import MultiSelect from 'primevue/multiselect';
import Select from 'primevue/select';
import DivObservaciones from "@/components/DivObservaciones.vue";
import type { Empresa } from "@/interfaces/Empresas";
import { ElNotification } from "element-plus";

interface Props {
    observaciones?: ProyectoObservaciones;
    from: string;//ProponerProyecto,ActualizarProyecto
}

const props = defineProps<Props>();
const isObservacionesVisible = defineModel<boolean>('isObservacionesVisible');

const proyecto = defineModel<ProyectoTemplate>('proyecto', {
    required: true,
});



const lineasInvestigacion = ref<LineaInvestigacion[]>([]);
const {
    data: carreras, isLoading: isLoadingCarreras, isError: isErrorCarreras,
    error: errorCarreras, failureCount: retriesCarreras } = useQuery({
        queryKey: ['carreras'],
        queryFn: () => getCarreras(),
        networkMode: 'always',
        retry: 1,
        retryDelay: 1000,
        initialData: () => {
            const storedData = localStorage.getItem(`carreras`);
            if (storedData !== undefined && storedData !== 'undefined') {
                return storedData ? JSON.parse(storedData) as Carrera[] : [];
            }
            return [];
        },
    });

const {
    data: empresas, isLoading: isLoadingEmpresas, isError: isErrorEmpresas,
    error: errorEmpresas, failureCount: retriesEmpresas } = useQuery({
        queryKey: ['empresas'],
        queryFn: () => getEmpresas({ excluded: import.meta.env.VITE_EMPRESA_ID }),
        networkMode: 'always',
        retry: 1,
        retryDelay: 1000,
        initialData: () => {
            const storedData = localStorage.getItem(`empresas`);
            if (storedData !== undefined && storedData !== 'undefined') {
                return storedData ? JSON.parse(storedData) as Empresa[] : [];
            }
            return [];
        },
    });

watch(isErrorEmpresas, (error) => {
    if (error) {
        ElNotification({
            title: 'Error',
            message: errorEmpresas.value?.message,
            type: 'error',
        });
    }
});

watch(isErrorCarreras, (error) => {
    if (error) {
        ElNotification({
            title: 'Error',
            message: errorCarreras.value?.message,
            type: 'error',
        });
    }
});


watch(() => empresas.value, () => {
    if (empresas.value) {
        localStorage.setItem('empresas', JSON.stringify(empresas.value));
    }
}, { immediate: true, deep: true });

watch(() => carreras, () => {
    if (carreras.value) {
        localStorage.setItem('carreras', JSON.stringify(carreras.value));
        if (carreras.value.length > 0) {
            carreras.value.map((carrera) => {
                if (proyecto.value.Proyecto_Carreras.includes(carrera.Carrera_Id)) {
                    lineasInvestigacion.value.push(...carrera.Carrera_LineasInvestigacion);
                }
            })
        } else {
            lineasInvestigacion.value = [];
        }
    }
}, { immediate: true, deep: true });

watch(() => proyecto.value.Proyecto_Carreras, (proyectoCarreras) => {
    lineasInvestigacion.value = [];
    if (proyectoCarreras.length > 0 && carreras.value) {
        carreras.value.map((carrera) => {
            if (proyectoCarreras.includes(carrera.Carrera_Id)) {
                lineasInvestigacion.value.push(...carrera.Carrera_LineasInvestigacion);
            }
        })
    }
}, { deep: true });



// Observar cambios en Proyecto_Tipo
watch(() => proyecto.value.Proyecto_Tipo, (proyectoTipo) => {
    if (proyectoTipo === 'Interno') {
        proyecto.value.Empresa = import.meta.env.VITE_EMPRESA_ID;
    } else if (proyecto.value.Empresa === import.meta.env.VITE_EMPRESA_ID) {
        proyecto.value.Empresa = '';
    }
}, { deep: true });

watch(() => proyecto.value.Proyecto_LineaInvestigacion, (proyectoTipo) => {
    if (proyectoTipo === 'Interno') {
        proyecto.value.Proyecto_TipoOptativa = 'CIIE';
    } else {
        proyecto.value.Proyecto_TipoOptativa = 'Dual';
    }
}, { deep: true });

</script>

<style lang="scss" scoped></style>
<template>
    <blockScaleSVG v-if="isLoading"></blockScaleSVG>
    <div class="size-full xl:p-8 flex flex-col w-full 2xl:w-11/12 2xl:h-7/8 h-full space-y-2 p-4 bg-white md:rounded-xl" v-else>
        <div class="flex min-w-80 flex-col w-full h-full shadow-xl rounded-xl bg-color-3">
            <div class="flex h-4 w-full">

            </div>
            <div class="flex w-full h-full overflow-hidden">

                <div class="flex w-full h-full overflow-y-auto scroll-tabla ">
                    <div class="flex flex-col w-full h-full shadow-xl">
                        <div class="flex w-full flex-grow sm:flex-row flex-col overflow-y-auto scroll-1">
                            <div class="seccionForm">
                                <div class="filaSeccion ">
                                    <div class="divSecciones w-full bg-color-2 border-none">
                                        <h1 class="titulosSecciones text-center">Datos del Proyecto</h1>
                                    </div>
                                </div>
                                <div class="filaSeccion">
                                    <div class="w-full divDatos relative">
                                        <h2 class="dato">Nombre del Proyecto:</h2>
                                        <h1 class="informacion">{{ proyecto?.Proyecto.Proyecto_Nombre }}</h1>
                                        <InputObservaciones v-if="props.from === 'proyecto-evaluar'">
                                        </InputObservaciones>
                                    </div>
                                </div>

                                <div class="filaSeccion">
                                    <div class="w-full divDatos relative">
                                        <h2 class="dato">Descripción:</h2>
                                        <h1 class="informacion informacionExtensa">{{
                                            proyecto?.Proyecto.Proyecto_Descripcion }}</h1>
                                        <InputObservaciones v-if="props.from === 'proyecto-evaluar'">
                                        </InputObservaciones>
                                    </div>
                                </div>

                                <div class="filaSeccion">
                                    <div class="w-full divDatos relative">
                                        <h2 class="dato">Objetivo:</h2>
                                        <h1 class="informacion informacionExtensa">{{
                                            proyecto?.Proyecto.Proyecto_Objetivo }}</h1>
                                        <InputObservaciones v-if="props.from === 'proyecto-evaluar'">
                                        </InputObservaciones>
                                    </div>
                                </div>

                                <div class="filaSeccion">
                                    <div class="w-full divDatos relative">
                                        <h2 class="dato">Impacto:</h2>
                                        <h1 class="informacion informacionExtensa">{{
                                            proyecto?.Proyecto.Proyecto_Impacto }}</h1>
                                        <InputObservaciones v-if="props.from === 'proyecto-evaluar'">
                                        </InputObservaciones>
                                    </div>
                                </div>

                                <div class="filaSeccion">
                                    <div class="w-full divDatos relative">
                                        <h2 class="dato">Líneas de Investigación que Beneficia:</h2>
                                        <h1 class="informacion informacionExtensa">{{
                                            proyecto?.Proyecto.Proyecto_LineaInvestigacion }}</h1>
                                        <InputObservaciones v-if="props.from === 'proyecto-evaluar'">{{
                                            proyecto?.Proyecto.Proyecto_Observaciones.ProyectoLineaInv }}
                                        </InputObservaciones>
                                    </div>
                                </div>

                                <div class="filaSeccion">
                                    <div class="w-full divDatos relative">
                                        <h2 class="dato">Referencias:</h2>
                                        <h1 class="informacion informacionExtensa">{{
                                            proyecto?.Proyecto.Proyecto_Referencias }}</h1>
                                        <InputObservaciones v-if="props.from === 'proyecto-evaluar'">
                                        </InputObservaciones>
                                    </div>
                                </div>

                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/3 divDatos relative">
                                        <h2 class="dato">Tipo de Proyecto:</h2>
                                        <h1 class="informacion">{{ proyecto?.Proyecto.Proyecto_Tipo }}</h1>
                                        <InputObservaciones v-if="props.from === 'proyecto-evaluar'">
                                        </InputObservaciones>
                                    </div>
                                    <div class="w-full md:w-1/3 divDatos relative">
                                        <h2 class="dato">Modalidad:</h2>
                                        <h1 class="informacion">
                                            <span v-if="proyecto?.Proyecto.Proyecto_TipoOptativa">
                                                {{ proyecto?.Proyecto.Proyecto_TipoOptativa }},
                                            </span>
                                            <span v-if="proyecto?.Proyecto.Proyecto_Investigacion">
                                                Investigación
                                            </span>
                                            <span v-else>
                                                Profesionalizante
                                            </span>
                                        </h1>
                                    </div>
                                    <div class="w-full md:w-1/3 divDatos relative">
                                        <h2 class="dato">Opción Elegida:</h2>
                                        <h1 class="informacion">{{ proyecto?.Proyecto.Proyecto_TipoOpcion }}</h1>
                                    </div>
                                </div>

                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/3 divDatos relative">
                                        <h2 class="dato">Fecha:</h2>
                                        <h1 class="informacion">{{ proyecto?.Proyecto.Proyecto_FechaRegistro }}</h1>
                                    </div>
                                    <div class="w-full md:w-1/3 divDatos relative">
                                        <h2 class="dato">Número de Residentes:</h2>
                                        <h1 class="informacion">{{ proyecto?.Proyecto.Proyecto_EstudiantesRequeridos }}
                                        </h1>
                                        <InputObservaciones v-if="props.from === 'proyecto-evaluar'">
                                        </InputObservaciones>
                                    </div>
                                    <div class="w-full md:w-1/3 divDatos relative">
                                        <h2 class="dato">Tiempo Estimado:</h2>
                                        <h1 class="informacion">{{ proyecto?.Proyecto.Proyecto_TiempoEstimado }} Meses
                                        </h1>
                                        <InputObservaciones v-if="props.from === 'proyecto-evaluar'">
                                        </InputObservaciones>
                                    </div>
                                </div>

                                <div class="filaSeccion">
                                    <div class="w-full divDatos relative">
                                        <h2 class="dato">Carrera Requerida de los Estudiantes:</h2>
                                        <h1 class="informacion">{{ proyecto?.FormatValues?.CarrerasNombres }}</h1>

                                    </div>
                                </div>
                                <div class="filaSeccion">
                                    <div class="w-full divDatos relative">
                                        <h2 class="dato">Docente Responsable:</h2>
                                        <h1 class="informacion">{{ proyecto?.FormatValues?.ProfesorResponsable }}</h1>
                                    </div>
                                </div>


                                <!-- OTRA SECCION (EMPRESA) -->
                                <div
                                    class="flex flex-row w-full bg-color-2 items-center justify-center rounded-md relative min-h-10 h-10 max-h-10">
                                    <button @click="verEmpresa = !verEmpresa"
                                        class="bg-color-1 hover:bg-slate-500 h-8 w-8 absolute top-0 right-0 translate-y-1 -translate-x-1 rounded-md flex items-center justify-center text-white">
                                        <i v-if="!verEmpresa" class="pi pi-eye"></i>
                                        <i v-if="verEmpresa" class="pi pi-eye-slash"></i>
                                    </button>

                                    <h1 class="titulosSecciones text-center">Datos de la Empresa</h1>

                                </div>

                                <div v-if="verEmpresa" class="w-full flex flex-col space-y-4">
                                    <div class="filaSeccion">
                                        <div class="w-full divDatos">
                                            <h2 class="dato">Nombre de la Empresa:</h2>
                                            <h1 class="informacion">{{ proyecto?.Included?.Empresa?.Empresa_Nombre }}
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="filaSeccion">
                                        <div class="w-full divDatos">
                                            <h2 class="dato">Actividad Principal de la Empresa:</h2>
                                            <h1 class="informacion">{{ proyecto?.Included?.Empresa?.Empresa_Actividad }}
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="filaSeccionResposive espacioDivDatosResponsive">
                                        <div class="w-full md:w-1/4 divDatos">
                                            <h2 class="dato">Ramo:</h2>
                                            <h1 class="informacion">{{ proyecto?.Included?.Empresa?.Empresa_Ramo }}</h1>
                                        </div>
                                        <div class="w-full md:w-1/4 divDatos">
                                            <h2 class="dato">Sector:</h2>
                                            <h1 class="informacion">{{ proyecto?.Included?.Empresa?.Empresa_Sector }}
                                            </h1>
                                        </div>
                                        <div class="w-full md:w-1/4 divDatos">
                                            <h2 class="dato">R.F.C:</h2>
                                            <h1 class="informacion">{{ proyecto?.Included?.Empresa?.Empresa_Rfc }}</h1>
                                        </div>
                                        <div class="w-full md:w-1/4 divDatos">
                                            <h2 class="dato">Fax:</h2>
                                            <h1 class="informacion">{{ proyecto?.Included?.Empresa?.Empresa_Fax }}</h1>
                                        </div>
                                    </div>

                                    <div class="filaSeccionResposive espacioDivDatosResponsive">
                                        <div class="w-full md:w-1/3 divDatos">
                                            <h2 class="dato">Ciudad:</h2>
                                            <h1 class="informacion">{{
                                                proyecto?.Included?.Empresa?.Empresa_Domicilio.Domicilio_Ciudad }}</h1>
                                        </div>
                                        <div class="w-full md:w-1/3 divDatos">
                                            <h2 class="dato">Colonia:</h2>
                                            <h1 class="informacion">{{
                                                proyecto?.Included?.Empresa?.Empresa_Domicilio.Domicilio_Colonia }}</h1>
                                        </div>
                                        <div class="w-full md:w-1/3 divDatos">
                                            <h2 class="dato">Teléfono(s):</h2>
                                            <h1 class="informacion">{{ proyecto?.Included?.Empresa?.Empresa_Telefono }}
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="filaSeccion">
                                        <div class="w-full divDatos">
                                            <h2 class="dato">Domicilio:</h2>
                                            <h1 class="informacion">
                                                {{ proyecto?.Included?.Empresa?.Empresa_Domicilio.Domicilio_Calle }} CP.
                                                {{ proyecto?.Included?.Empresa?.Empresa_Domicilio.Domicilio_CodigoPostal
                                                }} #
                                                {{ proyecto?.Included?.Empresa?.Empresa_Domicilio.Domicilio_NoInt }}
                                                Col.
                                                {{ proyecto?.Included?.Empresa?.Empresa_Domicilio.Domicilio_Colonia }}
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="filaSeccionResposive espacioDivDatosResponsive">
                                        <div class="w-full md:w-1/2 divDatos">
                                            <h2 class="dato">Nombre del Titular de la Empresa:</h2>
                                            <h1 class="informacion">{{ proyecto?.FormatValues?.EmpresaTitular }}</h1>
                                        </div>
                                        <div class="w-full md:w-1/2 divDatos">
                                            <h2 class="dato">Puesto:</h2>
                                            <h1 class="informacion">{{
                                                proyecto?.Included?.Empresa?.Empresa_Titular.Titular_Puesto }}</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="w-full flex flex-row justify-center items-center py-3 gap-x-4 ">
                <!-- <label for="sendmail" class="text-xs text-center cursor-pointer">¿Notificar por correo?</label>
                <input type="checkbox" id="sendmail" name="sendmail" checked v-model="sendmail" class="large-checkbox"> -->
                <ConfirmButton buttonText="Aceptar" styleClass="btnConfirm" v-if="props.from === 'proyecto-evaluar'"
                    @confirm="handleEvaluar(true)">
                </ConfirmButton>
                <!-- Tambien necesita confirmacion, pero el color y el icono (purple y pi pi-pen-to-square)... No quiero chingar el boton xd -->
                <ConfirmButton buttonText="A corrección" buttonColor="purple" buttonIcon="pi pi-pen-to-square"
                    styleClass="btnConfirm" v-if="props.from === 'proyecto-evaluar'" @confirm="handleEvaluar(false)">
                </ConfirmButton>
                <IconButton icon="pi pi-arrow-left" text="Regresar" color='cyan' divClass="btnConfirm"
                    @click="goBack()" />
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IconButton from '@/components/IconButton.vue';
import ConfirmButton from '@/components/ConfirmButton.vue';
import InputObservaciones from '@/components/InputObservaciones.vue';
import blockScaleSVG from '@/assets/svgs/block-scaleSVG.vue';
import useDetallesProyecto from '@/composables/useDetallesProyecto';
import useProyecto from '@/composables/useProyecto';

const verEmpresa = ref(false);
interface Props {
    id: string;
    from: string;
}
const router = useRouter();
const props = defineProps<Props>();

const observations = ref({
    ProyectoNombre: "",
    ProyectoDescripcion: "",
    ProyectoObjetivo: "",
    ProyectoImpacto: "",
    ProyectoLineaInvBene: "",
    ProyectoReferencia: "",
    ProyectoNumeroResidentes: "",
    ProyectoTipo: "",
    ProyectoTiempoE: "",
    ProyectoCarreraRequerida: "",
    ProyectoDocenteResponsable: "",
    ProyectoLineaInv: "",
    ProyectoGenerales: "",
});

const handleEvaluar = (estatus: boolean) => {
    evaluarProyecto({
        proyectoId: props.id,
        AsignacionPropuestas_Estatus: estatus,
        AsignacionPropuestas_Observaciones: JSON.stringify(observations.value),
    });
};

const { proyecto, isLoading } = useDetallesProyecto(props.id, { included: 'Empresa' });
const { evaluarProyecto } = useProyecto({ fn: () => goBack() });


const goBack = () => {
    router.go(-1);
};

</script>

<style>
.fillWhite path {
    fill: white;
}
</style>

<template>
    <blockScaleSVG v-if="isLoading"></blockScaleSVG>
    <div class="contenedorFormulario" v-else>
        <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl min-w-80 z-0">

            <div
                class="flex items-center justify-center w-full min-h-10 3xl:min-h-12 z-10 shadow-md bg-white rounded-t-2xl">
                <h1 class="text-base lg:text-lg 2xl:text-xl 3xl:text-2xl font-semibold">Evaluación Solicitud de
                    Residencia</h1>
            </div>

            <div class="w-full h-full overflow-x-auto scroll-tabla" v-if="dataResidencia">
                <div class="w-full h-full overflow-y-auto scroll-tabla">
                    <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl">

                        <div class="flex w-full flex-grow sm:flex-row flex-col bg-color-3 overflow-y-auto scroll-1">

                            <div class="seccionForm sm:w-4/6 sm:overflow-y-auto scroll scroll-1">
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Jefe(a) de la División de Estudios Profesionales:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Residencia.SolicitudResidencia_JefeEstudiosProfesionales }}
                                        </h1>
                                    </div>
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Fecha:</h2>
                                        <h1 class="informacion">{{ new Date().toLocaleDateString() }}</h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">AT'N:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Residencia.SolicitudResidencia_Coordinador }}</h1>
                                    </div>
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Coordinador de la Carrera de:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Alumno.Alumno_Carrera }}
                                        </h1>
                                    </div>
                                </div>
                                <!--Datos del Proyecto-->
                                <div class="filaSeccion">
                                    <div class="rounded-md p-2 w-full bg-color-1 shadow-md shadow-gray-500">
                                        <h1 class="titulosSecciones text-white text-center text-lg">Proyecto</h1>
                                    </div>
                                </div>
                                <div class="filaSeccion">
                                    <div class="w-full divDatos">
                                        <h2 class="dato">Nombre del Proyecto:</h2>
                                        <h1 class="informacion informacionExtensa">{{ dataResidencia.Proyecto.Proyecto_Nombre }}</h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Nombre del Asesor Interno:</h2>
                                        <h1 class="informacion informacionExtensa">
                                            {{ dataResidencia.FormatValues?.Profesor_AsesorNombreCompleto }}
                                        </h1>
                                    </div>
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Número de Residentes:</h2>
                                        <h1 class="informacion">
                                            {{ dataResidencia.Proyecto.Proyecto_EstudiantesRequeridos }}
                                        </h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/3 divDatos">
                                        <h2 class="dato">Tipo de Proyecto:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Proyecto.Proyecto_Tipo }}</h1>
                                    </div>
                                    <div class="w-full md:w-1/3 divDatos">
                                        <h2 class="dato">Opción Elegida:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Proyecto.Proyecto_TipoOpcion }}
                                        </h1>
                                    </div>
                                    <div class="w-full md:w-1/3 divDatos">
                                        <h2 class="dato">Periodo Proyectado:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Residencia.SolicitudResidencia_PeriodoProyectado }}</h1>
                                    </div>
                                </div>
                                <!--Datos del De la empresa-->
                                <div class="filaSeccion">
                                    <div class="rounded-md p-2 w-full bg-color-1 shadow-md shadow-gray-500">
                                        <h1 class="titulosSecciones text-white text-center text-lg">Empresa</h1>
                                    </div>
                                </div>
                                <div class="filaSeccion">
                                    <div class="w-full divDatos">
                                        <h2 class="dato">Nombre de la Empresa:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_Nombre }}
                                        </h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Ramo:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_Ramo }}</h1>
                                    </div>
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Sector:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_Sector }}</h1>
                                    </div>
                                </div>
                                <div class="filaSeccion">
                                    <div class="w-full divDatos">
                                        <h2 class="dato">Actividad Principal de la Empresa:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_Actividad }}</h1>
                                    </div>
                                </div>
                                <div class="filaSeccion">
                                    <div class="w-full divDatos">
                                        <h2 class="dato">Domicilio:</h2>
                                        <h1 class="informacion">{{ dataResidencia.FormatValues?.Empresa_DomicilioCompleto }}</h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/3 divDatos">
                                        <h2 class="dato">Ciudad:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_Domicilio.Empresa_Ciudad }}</h1>
                                    </div>
                                    <div class="w-full md:w-1/3 divDatos">
                                        <h2 class="dato">Colonia:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_Domicilio.Empresa_Colonia }}</h1>
                                    </div>
                                    <div class="w-full md:w-1/3 divDatos">
                                        <h2 class="dato">C.P:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_Domicilio.Empresa_CodigoPostal }}</h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/3 divDatos">
                                        <h2 class="dato">R.F.C:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_Rfc }}</h1>
                                    </div>
                                    <div class="w-full md:w-1/3 divDatos">
                                        <h2 class="dato">Fax:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_Fax }}</h1>
                                    </div>
                                    <div class="w-full md:w-1/3 divDatos">
                                        <h2 class="dato">Teléfono(s):</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_Telefono }}
                                        </h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Nombre del Titular de la Empresa:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_Titular.Titular_NombreCompleto }}
                                        </h1>
                                    </div>
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Puesto:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_Titular.Titular_Puesto }}</h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Nombre del Asesor Externo:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_AsesorExterno.AsesorExterno_NombreCompleto }}
                                        </h1>
                                    </div>
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Puesto:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_AsesorExterno.AsesorExterno_Puesto }}
                                        </h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Nombre de la Persona que Firmará el Acuerdo de Trabajo
                                            Estudiante-Escuela-Empresa:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_EncargadoAcuerdo.EncargadoAcuerdo_NombreCompleto }}
                                        </h1>
                                    </div>
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Puesto:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Empresa.Empresa_EncargadoAcuerdo.EncargadoAcuerdo_Puesto }}
                                        </h1>
                                    </div>
                                </div>
                                <!--Datos del Alumno-->
                                <div class="filaSeccion">
                                    <div class="rounded-md p-2 w-full bg-color-1 shadow-md shadow-gray-500">
                                        <h1 class="titulosSecciones text-white text-center text-lg">Alumno</h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-2/3 divDatos">
                                        <h2 class="dato">Nombre del Alumno:</h2>
                                        <h1 class="informacion">{{ dataResidencia.FormatValues?.Alumno_NombreCompleto }}</h1>
                                    </div>
                                    <div class="w-full md:w-1/3 divDatos">
                                        <h2 class="dato">Número de Control:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Alumno.Alumno_NumeroControl}}
                                        </h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Carrera:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Alumno.Alumno_Carrera }}
                                            </h1>
                                    </div>
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Semestre a Cursar:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Alumno.Alumno_Semestre }}
                                            </h1>
                                    </div>
                                </div>
                                <div class="filaSeccion">
                                    <div class="w-full divDatos">
                                        <h2 class="dato">Domicilio:</h2>
                                        <h1 class="informacion">{{ dataResidencia.FormatValues?.Alumno_DomicilioCompleto }}</h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Ciudad:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Alumno.Alumno_Domicilio.Domicilio_Ciudad }}
                                        </h1>
                                    </div>
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Teléfono(s):</h2>
                                        <h1 class="informacion">{{ dataResidencia.Alumno.Alumno_Telefono }}
                                            </h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Para Seguridad Social Acudir:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Alumno.Alumno_Seguro.Alumno_TipoSeguro }}
                                        </h1>
                                    </div>
                                    <div class="w-full md:w-1/2 divDatos">
                                        <h2 class="dato">Número de Seguridad Social:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Alumno.Alumno_Seguro.Alumno_Nss }}
                                        </h1>
                                    </div>
                                </div>
                                <div class="filaSeccion">
                                    <div class="w-full divDatos">
                                        <h2 class="dato">E-mail:</h2>
                                        <h1 class="informacion">{{ dataResidencia.Alumno.Alumno_Correo }}</h1>
                                    </div>
                                </div>
                            </div>

                            <!-- Sección de observaciones -->
                            <form class="w-full h-full sm:w-2/6">
                                <div class="seccionForm h-full">
                                    <div class="filaSeccion h-full">
                                        <div class="w-full h-full  divDatos">
                                            <label for="observaciones" class="dato">Observaciones:</label>
                                            <textarea id="observaciones" name="observaciones" class="inputFormPP h-full"
                                                rows="10" placeholder="Ingrese las Observaciones de la Solicitud"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <!-- Aqui termina -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="min-h-16 w-full flex flex-row justify-center items-center rounded-b-2xl bg-color-3 space-x-2 lg:space-x-4" v-if="dataResidencia">
                <IconButton icon="pi pi-arrow-left" text="Regresar" color='cyan' divClass="" @click="goBack()" :textAutoHide='true'/>
                <ConfirmButton buttonText="Aceptar" :tAutoHide='true' v-if="dataResidencia.Residencia.SolicitudResidencia_Estatus == 'PENDIENTE'" 
                    @confirm="evaluateResidencia({ residenciaId: dataResidencia.Residencia.SolicitudResidencia_Id, residenciaEstatus: 'aceptar', residenciaObservaciones:''})">
                </ConfirmButton>
                <ConfirmButton buttonIcon="pi pi-times" buttonColor="red" buttonText="Rechazar" :tAutoHide='true' v-if="dataResidencia.Residencia.SolicitudResidencia_Estatus == 'PENDIENTE'"
                    @confirm="evaluateResidencia({ residenciaId: dataResidencia.Residencia.SolicitudResidencia_Id, residenciaEstatus: 'rechazar', residenciaObservaciones:''})">
                </ConfirmButton>
                <IconButtonA icon="pi pi-file-pdf" color="purple" text="AnteProyecto" divClass="" :textAutoHide='true' :href="dataResidencia?.Residencia.SolicitudResidencia_Anteproyecto">
                </IconButtonA> 
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import blockScaleSVG from '@/assets/svgs/block-scaleSVG.vue';
import { useRouter } from 'vue-router';
import IconButton from '@/components/IconButton.vue';
import ConfirmButton from '@/components/ConfirmButton.vue';
import IconButtonA from '@/components/IconButtonRef.vue';
import useResidencia from '@/composables/useResidencia';

interface Props{
    from: string;
    id: string;
}
const props = defineProps<Props>();
const router = useRouter();
const { dataResidencia, evaluateResidencia, isLoading } = useResidencia(props.id);

const goBack = () => {
    router.go(-1);
};

</script>

<style scoped></style>
<template>
    <div class="contenedorFormulario">
        <div class="flex flex-col w-full h-full shadow-xl rounded-2xl">
            <div
                class="flex items-center bg-color-1 justify-center w-full min-h-10 3xl:min-h-12 max-h-10 3xl:max-h-12 z-10 shadow-md sm:rounded-t-xl relative">
                <h1 class="text-lg 3xl:text-xl font-semibold text-white">Reasignación de Asesor Interno</h1>
            </div>
            <div class="w-full h-full overflow-x-auto scroll-tabla">
                <div class="w-full h-full overflow-y-auto scroll-tabla">
                    <div class="flex flex-col w-full h-full shadow-xl rounded-b-2xl">
                        <div class="flex w-full flex-grow flex-col bg-color-3 overflow-y-auto scroll-1" v-if="proyecto">
                            <div class="seccionForm">
                                <div class="filaSeccion">
                                    <div class="w-full divDatos">
                                        <h2 class="dato">Nombre del Proyecto:</h2>
                                        <h1 class="informacion">{{ proyecto.Proyecto.Proyecto_Nombre }}</h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/3 divDatos">
                                        <label for="numeroOficio" class="dato">Número de Oficio:</label>
                                        <input class="inputFormPP" type="text" id="numeroOficio" name="numeroOficio"
                                            placeholder="Ingrese el número del oficio" v-model="model.AsignacionAsesor_NoOficio">
                                    </div>
                                    <div class="w-full md:w-2/3 divDatos">
                                        <h2 class="dato pr-16">Departamento:</h2>
                                        <h1 class="informacion">{{ proyecto.Departamento.Departamento_Nombre }}</h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/3 divDatos">
                                        <h2 class="dato">Periodo de Realización:</h2>
                                        <h1 class="informacion">{{ proyecto.Proyecto.Proyecto_Periodo }}</h1>
                                    </div>
                                    <div class="w-full md:w-2/3 divDatos">
                                        <h2 class="dato">Empresa:</h2>
                                        <h1 class="informacion">{{ proyecto.Empresa.Empresa_Nombre }}</h1>
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive">
                                    <div class="w-full md:w-1/3 divDatos">
                                        <h2 class="dato">Estudiantes Requeridos:</h2>
                                        <h1 class="informacion informacionExtensa">{{
                                            proyecto.Proyecto.Proyecto_EstudiantesRequeridos }}</h1>
                                    </div>
                                    <div class="w-full md:w-2/3 divDatos">
                                        <h2 class="dato">Asesor Actual:</h2>
                                        <h1 class="informacion">{{ proyecto.FormatValues?.ProfesorAsesor }}</h1>
                                    </div>
                                </div>
                                <div class="filaSeccion">
                                    <div class="w-full divDatos">
                                        <label for="numeroOficio" class="dato">Razón de la Reasignación:</label>
                                        <input class="inputFormPP" type="text" id="numeroOficio" name="numeroOficio"
                                            placeholder="Ingrese la razon de reasignación" v-model="model.AsignacionAsesor_Motivo">
                                    </div>
                                </div>
                                <div class="filaSeccionResposive espacioDivDatosResponsive max-h-28">
                                    <div class="w-full divDatos2 space-y-2">
                                        <div class="dato">Nuevo Asesor Interno:
                                        </div>
                                        <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                                            <div class="flex w-full md:w-1/3 xl:1/4 items-center text-sm space-x-2">
                                                <input type="checkbox" id="sendmail" name="sendmail" checked>
                                                <label for="sendmail">¿Enviar correo?</label>
                                            </div>
                                            <div class="flex w-full flex-row">
                                                <Select :options="dataProfesores" filter optionLabel="FormatValues.Profesor_NombreCompleto"
                                                    optionValue="Profesor.Profesor_Id" placeholder="Selecciona el revisor" class="w-full"
                                                    v-model="model.Profesor"></Select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="proyecto"
                class="min-h-16 w-full flex justify-center items-center flex-row rounded-b-2xl bg-color-3 pb-6 gap-x-4">
                <ConfirmButton buttonText="Reasignar" v-if="!isLoading"
                @confirm="asignarAsesor({body:model, validate:{profesorAsesorActual: proyecto.Profesor_Asesor.Profesor_Id}})"></ConfirmButton>
                <IconButton icon="pi pi-times" text="Cancelar" color="red" v-if="!isLoading" @click="goBack()"/>
                <i class="pi pi-spin pi-spinner-dotted" style="font-size: 2rem" v-if="isLoading"></i>
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">
import ConfirmButton from '@/components/ConfirmButton.vue';
import IconButton from '@/components/IconButton.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import type { AsesorServicePOST } from '@/interfaces/params/asesorServiceParams';
import Select from 'primevue/select';
import useDetallesProyecto from '@/composables/useDetallesProyecto';
import usePersonalDetalles from '@/composables/usePersonalDetalles';
import useProyecto from '@/composables/useProyecto';

interface Props {
    from: string;
    id: string;
}
const props = defineProps<Props>();

const { proyecto } = useDetallesProyecto(props.id);

const { dataProfesores } = usePersonalDetalles({deparamentoId: useUserStore().userDepartamento});

const { asignarAsesor, isLoading } = useProyecto({});

const model: AsesorServicePOST = {
    Proyecto: props.id,
    Profesor: '',
    AsignacionAsesor_Motivo: '',
    AsignacionAsesor_NoOficio: '',
};

const router = useRouter();
const goBack = () => {
    router.go(-1);
};

</script>


<style scoped></style>
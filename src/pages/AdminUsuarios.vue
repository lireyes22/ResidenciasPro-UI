<template>
    <div class="size-full xl:p-8 flex flex-col w-full h-full space-y-2 p-4">
        <div class="flex flex-col w-full p-2">
            <div class="flex space-x-2">
                <h3 class="text-lg font-semibold text-gray-700 mb-2">Profesores ({{ dataProfesores.length }})</h3>
                <IconButton icon="pi pi-question-circle" style-class="p-2 disabled:opacity-50" iconColor="white"
                    @click="startTutorial()"></IconButton>
            </div>
            <div class="flex space-x-2">
                <!--v-model="" @input="" -->
                <InputText type="text" :placeholder="`Buscar Proyecto`" class="w-1/2 tutorial-input-search-profesor"
                    v-model="searchProfesores" />
                <MultiSelect :options="dataPuestos" optionValue="Puesto_Id" optionLabel="Puesto_Nombre"
                    placeholder="Seleccione un puesto" v-model="puestoSelected" class="w-1/2 tutorial-select-puesto">
                </MultiSelect>
            </div>
        </div>
        <div class="size-full flex overflow-hidden">
            <DataView :value="dataProfesoresFiltered" dataKey="Profesor.Profesor_Id"
                style="width: 100%; height: 100%; overflow: auto; background-color: transparent;"
                class="dataviewComponent scroll-TablaAdmin">
                <template #list="slotProps">
                    <div class="block w-full size-full">
                        <div class="flex flex-col w-full">
                            <div v-for="(item, index) in slotProps.items" :key="index"
                                class="flex flex-col lg:flex-row p-6 w-full mb-2 bg-white rounded-lg">
                                <!-- :class="{ 'border-t-4 border-surface-200': index !== 0 }" -->

                                <div class="flex flex-row w-full space-x-2 items-start overflow-hidden">

                                    <img class="flex size-20 lg:size-24" src="../assets/images/profile.png"
                                        :alt="item.name" />

                                    <div class="flex flex-col items-start w-full">
                                        <div class="flex flex-col">
                                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                                                item.category }}</span>
                                            <div class="text-lg font-medium my-2">{{
                                                item.FormatValues.Profesor_NombreCompleto }}</div>
                                        </div>
                                        <div class="bg-surface-100 p-1 flex rounded-lg w-fit">
                                            <div
                                                class="flex overflow-x-auto max-w-72 md:max-w-120  xl:max-w-fit scroll-roles tutorial-tag-eliminar-puesto">
                                                <!-- tutorial-tag-eliminar-puesto  max-w-72 md:max-w-96 lg:max-w-120 xl:max-w-fit -->
                                                <div v-for="(puesto, i) in item.Puesto"
                                                    @click="updatePersonal({ personalId: item.Profesor.Profesor_Id, body: deleteData(item, puesto.Puesto_Id) })"
                                                    v-tooltip.top="'Eliminar'"
                                                    class="bg-surface-0 flex items-center justify-center py-1 px-2 rounded-lg cursor-pointer hover:bg-red-300"
                                                    :class="{ 'mr-1': i !== item.Puesto.length - 1 }">
                                                    <span
                                                        class="text-surface-900 font-medium text-xs lg:text-sm text-center w-full">{{
                                                            puesto.Puesto_Nombre }}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>



                                <div class="flex w-full lg:w-40 lg:items-center">
                                    <IconButton icon="pi pi-plus" text="Agregar" class="w-full disabled:opacity-50 pr-4"
                                        v-if="!loadingArray.includes(item.Profesor.Profesor_Id)"
                                        style-class="p-2 m-2 border-2 w-full disabled:opacity-50 tutorial-button-agregar-puesto"
                                        @click="updatePersonal({ personalId: item.Profesor.Profesor_Id, body: updateData(item) })">
                                    </IconButton>
                                    <div class="size-full flex items-center justify-center" v-else>
                                        <i class="pi pi-spin pi-spinner-dotted" style="font-size: 2rem"></i>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </template>
            </DataView>
        </div>
    </div>
</template>

<script setup lang="ts">
import DataView from 'primevue/dataview';
import IconButton from '@/components/IconButton.vue';
import usePersonalDetalles from '@/composables/usePersonalDetalles';
import MultiSelect from 'primevue/multiselect';
import usePuestosDetalles from '@/composables/usePuestos';
import InputText from 'primevue/inputtext';
import usePersonal from '@/composables/usePersonal';
import type { PersonalData, PersonalUpdate } from '@/interfaces/Personal';
import { nextTick, onMounted } from 'vue';
import adminUsuariosTutorial from '@/tutorials/adminUsuariosTutorial';

const { dataProfesores, dataProfesoresFiltered, searchProfesores, refetchProfesores } = usePersonalDetalles({});
const { dataPuestos, puestoSelected } = usePuestosDetalles({});
const { updatePersonal, loadingArray } = usePersonal({ fn: () => refetchProfesores() });

const tour = adminUsuariosTutorial();



onMounted(async () => {
    await nextTick(); // Espera a que el DOM se renderice completamente
    if (localStorage.getItem('adminUsuariosTutorial') !== 'true') {
        tour.start();
    }
});

const startTutorial = () => {
    tour.start();
};

const updateData = (data: PersonalData): PersonalUpdate => {
    const addPuestos = [
        ...data.Puesto.map(puesto => puesto.Puesto_Id),
        ...puestoSelected.value
    ];
    return {
        Profesor_Nombre: data.Profesor.Profesor_Nombre,
        Profesor_ApellidoUno: data.Profesor.Profesor_ApellidoUno,
        Profesor_ApellidoDos: data.Profesor.Profesor_ApellidoDos,
        Profesor_Correo: data.Profesor.Profesor_Correo,
        Departamento: data.Departamento.Departamento_Id,
        Profesor_Puesto: addPuestos,
    };
}

const deleteData = (data: PersonalData, puesto: string): PersonalUpdate => {
    const addPuestos = [
        ...data.Puesto.map(puesto => puesto.Puesto_Id).filter(p => p !== puesto),
    ];
    return {
        Profesor_Nombre: data.Profesor.Profesor_Nombre,
        Profesor_ApellidoUno: data.Profesor.Profesor_ApellidoUno,
        Profesor_ApellidoDos: data.Profesor.Profesor_ApellidoDos,
        Profesor_Correo: data.Profesor.Profesor_Correo,
        Departamento: data.Departamento.Departamento_Id,
        Profesor_Puesto: addPuestos,
    };
}
</script>

<style></style>
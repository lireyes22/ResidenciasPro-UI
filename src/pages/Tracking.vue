<template>
    <blockScaleSVG v-if="isLoading" />
    <div class="size-full xl:p-8 flex flex-col w-full h-full space-y-2 p-4 bg-white/75 rounded-md" v-else>
        <div v-if="!isLoading"
            class="min-h-12 md:min-h-14 flex w-full justify-start items-center flex-row rounded-lg bg-gray-50 border self-center shadow-lg overflow-x-auto overflow-y-hidden scroll-tracking">
            <div
                class="w-full h-full min-w-32 rounded-l-lg px-3 focus:outline-none bg-color-2 text-white flex flex-row items-center justify-between p-1 ">
                <div class="flex items-center justify-start space-x-2">
                    <h1 class="text-sm md:text-lg text-left font-medium">Proyectos Propuestos</h1>

                    <h1 class="text-base md:text-xl font-bold text-white bg-color-1 rounded-lg px-2 py-1">{{
                        dataBancoProyectos?.length
                        }} </h1>
                    <IconButton icon="pi pi-question-circle" styleClass="p-1.5  border-2 w-full disabled:opacity-50 border-transparent" iconColor="white" @click="startTutorial()"></IconButton>
                </div>
                <Select :options="options" class=" lg:min-w-64 rounded-lg " optionLabel="label" optionGroupChildren="items"
                    placeholder="Select filter">
                    <template #optiongroup="slotProps">
                        <div class="flex items-center">
                            <div>{{ slotProps.option.label }}</div>
                        </div>
                    </template>
                </Select>

            </div>
        </div>
        <div
            class="relative w-full scroll-whiteTracking flex flex-col flex-grow overflow-auto px-2 py-6 z-0 space-y-10">
            <Tracker v-for="(proyecto, index) in dataBancoProyectos" :key="proyecto.Proyecto.Proyecto_Id"
                @refetchBancoProyectos="refetchBancoProyectos" @goToUpdate="goToUpdate" :proyecto="proyecto"
                :index="index">
            </Tracker>
            <!-- Aquí se pueden agregar mas vistas -->
        </div>
    </div>
</template>

<script setup lang="ts">
import Tracker from '@/components/Tracker.vue';
import Select from 'primevue/select';
import IconButton from '@/components/IconButton.vue';
import useBancoProyectos from '@/composables/useBancoProyectos';
import blockScaleSVG from '@/assets/svgs/block-scaleSVG.vue';
import { proyectoActualizar } from '@/router/home/';
import { useRouter } from 'vue-router';
import { useNavStore } from '@/stores/navStore';
import { nextTick, onMounted, onUnmounted } from 'vue';
import trackingTutorial from '@/tutorials/trackingTutorial';
interface Props {
    from: string
}
const props = defineProps<Props>();
const router = useRouter();
const navStore = useNavStore();

function goToUpdate(id: string) {
    navStore.changeRoute(proyectoActualizar);
    router.push({ name: proyectoActualizar.name, params: { id: id } });
}

const { dataBancoProyectos, isLoading, refetchBancoProyectos } = useBancoProyectos(props.from);

const tour = trackingTutorial();

const options = [
    { value: '', label: 'Todos' },
    { value: 'ACEPTADO', label: 'Aceptados' },
    { value: 'PENDIENTE', label: 'Enviados' },
    { value: 'ASIGNADO', label: 'Revisión' },
    { value: 'RECHAZADO', label: 'Corrección' }
];

onMounted(async () => {
    await nextTick(); // Espera a que el DOM se renderice completamente
    if (localStorage.getItem('trackingTutorial') !== 'true') {
        tour.start();
    }
});

const startTutorial = () => {
    tour.start();
};

onUnmounted(() => {
    tour.complete();
});

</script>

<style>
/* Estilos adicionales opcionales */
</style>
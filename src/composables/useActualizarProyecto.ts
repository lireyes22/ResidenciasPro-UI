//Interfaces
import type { LineaInvestigacion } from "@/interfaces/Carreras";
import type { ProyectoTemplate } from "@/interfaces/Proyectos";
//Services
import { getCarreras } from "@/services/carrerasService";
import { getEmpresas } from "@/services/empresasService";
import { getProyecto, updateProyecto } from "@/services/proyectosService";
//Stores
import { useUserStore } from "@/stores/userStore";
import { useNavStore } from '@/stores/navStore';
//Vue
import { computed, ref, watch } from "vue";
//Vue Router
import { useRouter } from 'vue-router';
import { tracking } from '@/router/home/';
//Vue Dependencies
import { useMutation, useQuery } from "@tanstack/vue-query";
import { ElNotification } from 'element-plus'
import { useConfirm } from "primevue/useconfirm";
import transformProyect from "@/utils/transformProyect";

export default function useActualizarProyecto(proyectoId: string) {

    const VITE_EMPRESA_ID = import.meta.env.VITE_EMPRESA_ID;
    const storeUser = useUserStore();
    const isObservacionesVisible = ref(false);
    const router = useRouter();
    const navStore = useNavStore();

    const proyecto = ref<ProyectoTemplate>({
        Proyecto_Nombre: '',
        Proyecto_Tipo: 'Interno',
        Proyecto_Descripcion: '',
        Proyecto_Objetivo: '',
        Proyecto_TipoOptativa: '',
        Proyecto_TipoOpcion: 'Banco De Proyectos',
        Proyecto_Impacto: '',
        Proyecto_Referencias: '',
        Profesor_Responsable: storeUser.userId,
        Empresa: VITE_EMPRESA_ID,
        Proyecto_LineaInvestigacion: '',
        Proyecto_Lugar: '',
        Proyecto_TiempoEstimado: 4,
        Proyecto_EstudiantesRequeridos: 1,
        Proyecto_Carreras: [],
        Departamento: storeUser.userDepartamento,
        Profesor_Asesor: storeUser.userId,
        Proyecto_Investigacion: false,
        Proyecto_Estatus: '',
    });

    
    const updateProyectoMutation = useMutation({
        mutationFn: () => updateProyecto({proyectoId: proyectoId, proyecto: proyecto.value}),
        onSuccess: () => {
            ElNotification({
                title: 'Proyecto Actualizado Correctamente',
                message: `El proyecto "${proyecto.value.Proyecto_Nombre}" ha sido actualizado correctamente`,
                position: 'bottom-right',
                type: 'success',
            });
            goTo();
        },
        onError: (er) => {
            ElNotification({
                title: 'Ah ocurrido un error',
                message: er.message,
                position: 'bottom-right',
                type: 'error',
            });
        }
    });

    const { data: dataProyecto, isLoading:isLoadingDataProyecto } = useQuery({
        queryKey: ['proyecto', proyectoId],
        queryFn: () => getProyecto(proyectoId),
        retry: 2,
        retryDelay: 2000
    });

    watch(dataProyecto, () => {
        if (dataProyecto.value) {
            proyecto.value = transformProyect(dataProyecto.value).toTemplate();
        }
    }, { immediate: true, deep: true });

    function goTo(route = tracking) {
        navStore.changeRoute(route);
        router.push({ name: route.name });
    }


    return {
        proyecto,
        isLoading: computed(() => isLoadingDataProyecto.value || updateProyectoMutation.isPending.value),
        isObservacionesVisible,
        updateProyecto: updateProyectoMutation.mutate,
        observaciones: computed(() => dataProyecto.value?.Proyecto.Proyecto_Observaciones),
        goTo,
    };
};

//Interfaces
import type { LineaInvestigacion } from "@/interfaces/Carreras";
import type { ProyectoTemplate } from "@/interfaces/Proyectos";
//Services
import { getCarreras } from "@/services/carrerasService";
import { getEmpresas } from "@/services/empresasService";
import { saveProyecto } from "@/services/proyectosService";
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

export default function useProponerProyecto() {

    const VITE_EMPRESA_ID = import.meta.env.VITE_EMPRESA_ID;
    const storeUser = useUserStore();
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
        Proyecto_Estatus: 'PENDIENTE',
    });

    const saveProyectoMutation = useMutation({
        mutationFn: () => saveProyecto(proyecto.value),
        onSuccess: () => {
            ElNotification({
                title: 'Proyecto Guardado Correctamente',
                message: `El proyecto "${proyecto.value.Proyecto_Nombre}" ha sido guardado correctamente`,
                position: 'bottom-right',
                type: 'success',
            });
            navStore.changeRoute(tracking);
            router.push({ name: tracking.name });
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
    
    return {
        proyecto,
        isLoading: computed(() => saveProyectoMutation.isPending.value),
        saveProyecto: saveProyectoMutation.mutate,
    };
};

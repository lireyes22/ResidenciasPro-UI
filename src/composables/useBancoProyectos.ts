//Services
import type { ProyectoBancoCompleto } from "@/interfaces/Proyectos";
import { getBancoProyectos } from "@/services/bancoService";
import { getProyecto } from "@/services/proyectosService";
//Utils
import getFiltersBancoProyectos from "@/utils/getFiltrosBancoProyectos";
//Vue Query
import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { ElNotification } from "element-plus";
//Vue
import { computed, ref, warn, watch } from "vue";

export default function useBancoProyectos(type?: string) {

    const queryClient = useQueryClient();
    const { data: dataBancoProyectos, isLoading: isLoadingBanco, refetch: refetchBancoProyectos, isError, error } = useQuery({
        queryKey: ['bancoProyectos', type],
        queryFn: () => getBancoProyectos(getFiltersBancoProyectos(type)),
        initialData: () => {
            const storedData = localStorage.getItem(`bancoProyectos-${type}`);
            if (storedData !== undefined && storedData !== 'undefined') {
                return storedData ? JSON.parse(storedData) as ProyectoBancoCompleto[] : [];
            } 
            return [];
        },
    });

    watch(dataBancoProyectos, (newValue) => {
        localStorage.setItem(`bancoProyectos-${type}`, JSON.stringify(newValue));
    }, { immediate: true, deep: true });

    const prefetchProyecto = (proyectoId: string) => {
        if (proyectoId !== null) {
            queryClient.prefetchQuery({
                queryKey: ['proyecto', proyectoId],
                queryFn: () => getProyecto(proyectoId),
            });
        }
    }

    watch(isError, (newValue) => {
        if (newValue) {
            ElNotification({
                title: "Error",
                message: error.value?.message,
                type: "error",
            });
        }
    });

    return {
        dataBancoProyectos,
        isLoading: computed(() => isLoadingBanco.value),
        refetchBancoProyectos,
        prefetchProyecto,
    };
};

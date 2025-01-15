//Interfaces
import type { ProyectoBancoCompleto, ProyectoCompleto } from "@/interfaces/Proyectos";
import { assignAsesor } from "@/services/asesoresServices";
//Services
import { deleteProyecto, updateProyecto } from "@/services/proyectosService";
import { assignRevisor, evaluarProyecto } from "@/services/revisionesService";
//Vue Dependencies
import { useMutation } from "@tanstack/vue-query";
import type { AxiosError } from "axios";
import { ElNotification } from 'element-plus'
import { computed, ref } from "vue";

export default function useProyecto(params: { proyecto?: ProyectoBancoCompleto | ProyectoCompleto, fn?: () => void }) {

    const proyectosLoading = ref<string[]>([]);

    const deleteProyectoMutation = useMutation({
        mutationFn: deleteProyecto,
        onSuccess: () => {
            if (params.fn !== undefined) {
                params.fn();
            }
            ElNotification({
                title: 'Proyecto Eliminado Correctamente',
                message: `El proyecto ${params.proyecto?.Proyecto.Proyecto_Nombre} ha sido eliminado correctamente`,
                position: 'bottom-right',
                type: 'success',
            });
        },
        onError: (er) => {
            ElNotification({
                title: 'Ah ocurrido un error',
                message: 'Hubo un error al eliminar el proyecto, por favor intenta de nuevo',
                position: 'bottom-right',
                type: 'error',
            });
        }
    });

    const updateProyectoMutation = useMutation({
        mutationFn: updateProyecto,
        onSuccess: (data) => {
            if (params.fn !== undefined) {
                params.fn();
            }
            ElNotification({
                title: 'Proyecto Actualizado Correctamente',
                message: `El proyecto "${data.Proyecto.Proyecto_Nombre}" ha sido actualizado correctamente`,
                position: 'bottom-right',
                type: 'success',
            });
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

    const evaluarProyectoMutation = useMutation({
        mutationFn: evaluarProyecto,
        onSuccess: (data) => {
            if (params.fn !== undefined) {
                params.fn();
            }
            ElNotification({
                title: 'Proyecto Actualizado Correctamente',
                message: `El proyecto ha sido evaluado correctamente`,
                position: 'bottom-right',
                type: 'success',
            });
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

    const asignarAsesorMutation = useMutation({
        mutationFn: assignAsesor,
        onSuccess: (data) => {
            if (params.fn !== undefined) {
                params.fn();
            }
            ElNotification({
                title: 'Asesor Asignado Correctamente',
                message: `El asesor ha sido asignado correctamente`,
                position: 'bottom-right',
                type: 'success',
            });
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

    
    const asignarRevisorMutation = useMutation({
        mutationFn: assignRevisor,
        onMutate: (data) => {
            proyectosLoading.value.push(data.proyectoId);
        },
        onSuccess: () => {
            ElNotification({
                title: 'Asignación de revisor',
                message: `Se ha asignado el revisor correctamente`,
                position: 'bottom-right',
                type: 'success',
            });
            if (params.fn !== undefined) {
                params.fn();
            }
        },
        onError: (error) => {
            ElNotification({
                title: 'Asignación de revisor',
                message: error.message,
                position: 'bottom-right',
                type: 'error',
            });
        },
        onSettled: (data, error, vars) => {
            proyectosLoading.value = proyectosLoading.value.filter((id) => id !== vars.proyectoId);
        },
    });

    return {
        deleteProyecto: deleteProyectoMutation.mutate,
        updateProyecto: updateProyectoMutation.mutate,
        evaluarProyecto: evaluarProyectoMutation.mutate,
        asignarAsesor: asignarAsesorMutation.mutate,
        asignarRevisor: asignarRevisorMutation.mutate,
        proyectosLoading,
        isLoading: computed(() =>
            deleteProyectoMutation.isPending.value ||
            updateProyectoMutation.isPending.value ||
            evaluarProyectoMutation.isPending.value ||
            asignarAsesorMutation.isPending.value),
    };
};

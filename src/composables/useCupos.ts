import { anularCupo, getCupos, updateCupoEstatus } from "@/services/cuposService";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { ElNotification } from "element-plus";
import { computed, ref, watch } from "vue";

export default function useCupos(proyectoId: string, cupoEstatus?: string) {

    const { data: dataCupos, isLoading: isLoadingCupos, refetch: refetchCupos } = useQuery({
        queryKey: ['cupos', `${proyectoId}-${cupoEstatus}`],
        queryFn: () => getCupos({ params: { 'filter[Proyecto]': proyectoId, 'filter[Cupo_Estatus]': cupoEstatus } }),
    });

    const cuposLoading = ref<string[]>([]);

    const updateCupoEstatusMutation = useMutation({
        mutationFn: updateCupoEstatus,
        onMutate: ({ cupoId: cupoId, cupoEstatus: cupoEstatus }) => {
            cuposLoading.value.push(cupoId);
        },
        onSuccess: (data) => {
            refetchCupos();
            ElNotification({
                title: 'Postulacion Evaluada Exitosamente',
                message: `El alumno "${data.FormatValues?.Alumno_NombreCompleto}" ha sido ${data.Cupo.Cupo_Estatus.toLowerCase()} correctamente`,
                position: 'bottom-right',
                type: 'success',
            });
        },
        onError: (error: any) => {
            console.log(error);
        }
    });

    const anularCupoMutation = useMutation({
        mutationFn: anularCupo,
        onMutate: ({ cupoId: cupoId }) => {
            cuposLoading.value.push(cupoId);
        },
        onSuccess: (data) => {
            refetchCupos();
            cuposLoading.value = cuposLoading.value.filter(id => id !== data.cupoId);
            ElNotification({
                title: 'Postulacion Evaluada Exitosamente',
                message: data.message,
                position: 'bottom-right',
                type: 'success',
            });
        },
        onError: (error: any) => {
            console.log(error);
        }
    });


    return {
        updateCupoEstatus: updateCupoEstatusMutation.mutate,
        anularCupo: anularCupoMutation.mutate,
        refetchCupos,
        dataCupos,
        cuposLoading,
        isLoading: computed(() => isLoadingCupos.value),
        isLoadingUpdateCupo: computed(() => updateCupoEstatusMutation.isPending.value)
    };
};

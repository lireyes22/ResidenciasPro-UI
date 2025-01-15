
import { evaluateSeguimientoParcial, getSeguimiento } from "@/services/seguimientosService";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { computed, ref } from "vue";
import { initEvaluacion } from "@/utils/init";
import type { Seguimiento } from "@/interfaces/Seguimientos";
import { ElNotification } from "element-plus";

export default function useSeguimiento(params: {residenciaId: string, fn?: () => void }) {

    const evaluacion = ref<Seguimiento>(initEvaluacion());

    const { data: dataSeguimiento, refetch:refetchSeguimiento, isLoading:isLoadingSeguimiento } = useQuery({
        queryKey: ['seguimiento', params.residenciaId],
        queryFn: () => getSeguimiento({ residenciaId: params.residenciaId }),
        retry: false,
    });

    const evaluateSeguimientoParcialMutation = useMutation({
        mutationFn: evaluateSeguimientoParcial,
        onSuccess: (data) => {
            ElNotification({
                title: `Evaluación enviada`,
                message: `La evaluación se ha enviado correctamente`,
                position: 'bottom-right',
                type: 'success',
            });
            if(params.fn) params.fn();
            refetchSeguimiento();
        },
        onError: (error) => {
            ElNotification({
                title: `Error al enviar la evaluación`,
                message: `Ocurrió un error al enviar la evaluación: ${error.message}`,
                position: 'bottom-right',
                type: 'error',
            });
        }
    });


    return {
        dataSeguimiento,
        evaluacion,
        evaluateSeguimientoParcial: evaluateSeguimientoParcialMutation.mutate,
        isLoading: computed(() => evaluateSeguimientoParcialMutation.isPending.value || isLoadingSeguimiento.value),
    };
};

import { evaluateResidencia, getResidencia } from "@/services/residenciasService";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { ElNotification } from "element-plus";
import { computed } from "vue";


export default function useResidencia(id: string) {

    const { data: dataResidencia, isLoading:isLoadingResidencia, refetch: refetchResidencia } = useQuery({
        queryKey: ['residencia', id],
        queryFn: () => getResidencia({ id: id })
    });

    const evaluarResidenciaMutation = useMutation({
        mutationFn: evaluateResidencia,
        onSuccess: (data) => {
            ElNotification({
                title: `La solicitud de residencia fue ${data.Residencia.SolicitudResidencia_Estatus} correctamente`,
                message: `Solicitud de: ${data.FormatValues?.Alumno_NombreCompleto}`,
                position: 'bottom-right',
                type: 'success',
            });
            refetchResidencia();
        },
    });

    return {
        dataResidencia,
        refetchResidencia,
        evaluateResidencia: evaluarResidenciaMutation.mutate,
        isLoading: computed(() => isLoadingResidencia.value || evaluarResidenciaMutation.isPending.value),
    };
};

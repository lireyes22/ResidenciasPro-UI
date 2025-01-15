import { getResidencias } from "@/services/residenciasService";
import getFiltrosResidencias from "@/utils/getFiltrosResidencias";
import { useQuery } from "@tanstack/vue-query";
import { computed, watch } from "vue";




export default function useResidencias(type: string) {
    
    const { data:dataResidencias, isLoading:isLoadingResidencias } = useQuery({
        queryKey: ['residencias', type],
        queryFn: () => getResidencias(getFiltrosResidencias(type)),
    });

    return {
        dataResidencias,
        isLoading: computed(() => isLoadingResidencias.value),
    };
};

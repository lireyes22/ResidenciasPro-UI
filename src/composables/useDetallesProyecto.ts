import type { ProyectoServiceParams } from "@/interfaces/params/proyectoServiceParams";
import { getProyecto } from "@/services/proyectosService";
import { useQuery } from "@tanstack/vue-query";
import { computed, watch } from "vue";

export default function useDetallesProyecto(proyectoId: string, params?: ProyectoServiceParams) {
    

    const {data:proyecto, isLoading:isLoadingProyecto} = useQuery({
        queryKey: ["detallesProyecto", proyectoId, params],
        queryFn: ()=> getProyecto(proyectoId, params),
    });

    watch(proyecto, () => {
        //console.log("Proyecto actualizado", proyecto.value);
    }, {immediate: true,deep: true});

    return {
        proyecto,
        isLoading: computed(()=>isLoadingProyecto.value),
    };
};

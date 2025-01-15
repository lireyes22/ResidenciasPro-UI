import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";
import { getPuestos } from "@/services/puestosService";

export default function usePuestosDetalles(params: {fn?: () => void}){

    const puestoSelected = ref();
    const { data: dataPuestos } = useQuery({
        queryKey: ['puestos'],
        queryFn: () => getPuestos(),
    });
    

    return {
        dataPuestos,
        puestoSelected
    };
};

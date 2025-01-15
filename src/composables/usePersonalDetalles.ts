import { getPersonal } from "@/services/personalService";
import { useQuery } from "@tanstack/vue-query";
import { computed, ref, watch } from "vue";
import type { PersonalData } from "@/interfaces/Personal";

export default function usePersonalDetalles(params: {deparamentoId?: string, fn?: () => void}){
    const profesorSelected = ref<string>('');
    const searchProfesores = ref<string>('');
    const dataProfesoresFiltered = computed(() => {
        if (searchProfesores.value) {
            return dataProfesores.value.filter((item) => {
                return item.FormatValues?.Profesor_NombreCompleto?.toLowerCase().includes(searchProfesores.value.toLowerCase());
            });
        }
        return dataProfesores.value;
    });

    const { data: dataProfesores, refetch:refetchProfesores } = useQuery({
        queryKey: ['profesores', params.deparamentoId],
        queryFn: () => getPersonal({ "filter[Departamento]": params.deparamentoId }),
        initialData: () => {
            const storedData = localStorage.getItem(`personal-profesores-${params.deparamentoId}`);
            if (storedData !== undefined && storedData !== 'undefined') {
                return storedData ? JSON.parse(storedData) as PersonalData[] : [];
            }
            return [];
        },
    });
    
    watch(() => dataProfesores.value, () => {
        if (dataProfesores.value && dataProfesores.value.length > 0) {
            profesorSelected.value = dataProfesores.value[0].Profesor.Profesor_Id;
            localStorage.setItem(`personal-profesores-${params.deparamentoId}`, JSON.stringify(dataProfesores.value));
        }
    }, { immediate: true, deep: true });

    return {
        profesorSelected,
        refetchProfesores,
        dataProfesores,
        searchProfesores,
        dataProfesoresFiltered,
    };
};

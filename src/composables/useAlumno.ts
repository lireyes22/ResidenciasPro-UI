import { updateAlumno } from "@/services/alumnosService";
import { useMutation } from "@tanstack/vue-query";
import { ElNotification } from "element-plus";
import { ref } from "vue";

export default function useAlumno(params: {fn?: () => any }){
    
    const alumnosLoading = ref<string[]>([]);
    const updateAlumnoMutation = useMutation({
        mutationFn: updateAlumno,
        onMutate: (vars) => {
            alumnosLoading.value.push(vars.Alumno_Id);
        },
        onSuccess: (data, vars) => {
            ElNotification({
                title: 'Estatus de Residencia Actualizada Correctamente',
                message: 'Residencia ' + (vars.Alumno_Estatus.Estatus_ActivacionResidencias ? 'Activada' : 'Desactivada') + ' Correctamente',
                type: 'success'
            });
        },
        onError: (error) => {
            ElNotification({
                title: 'Error',
                message: error.message,
                type: 'error'
            });
        },
        onSettled: (data, error, vars) => {
            console.log('onSettled', data, error, vars);
            if(params.fn) params.fn().then(() => alumnosLoading.value = alumnosLoading.value.filter((id) => id !== vars.Alumno_Id));
        }
    });

    return {
        updateAlumno: updateAlumnoMutation.mutate,
        alumnosLoading
    };
};

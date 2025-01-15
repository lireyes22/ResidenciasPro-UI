import { updatePersonal } from "@/services/personalService";
import { useMutation } from "@tanstack/vue-query";
import { ElNotification } from "element-plus";
import { ref } from "vue";


export default function usePersonal(params: {fn?: () => void}){
    

    const loadingArray = ref<string[]>([]);
    const updatePersonalMutation = useMutation({
        mutationFn: updatePersonal,
        onMutate: (vars) => {
            loadingArray.value.push(vars.personalId);
        },
        onSuccess: () => {
            if(params.fn){
                params.fn();
            }
            ElNotification({
                title: "Actualización exitosa",
                message: "Puesto Agregado/Eliminado Exitosamente",
                type: "success"
            });
        },
        onError: (error) => {
            ElNotification({
                title: "Error",
                message: error.message,
                type: "error"
            });
        },
        onSettled: (data, error, vars) => {
            loadingArray.value = loadingArray.value.filter((item) => item !== vars.personalId);
        },
    });


    return {
        updatePersonal: updatePersonalMutation.mutate,
        loadingArray,
    }
}
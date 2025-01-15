import type { ResidenciasServiceParams } from "@/interfaces/params/residenciasServiceParams";
import { useUserStore } from '@/stores/userStore';

export default function getFiltrosResidencias(type: string): ResidenciasServiceParams {
    const user = useUserStore().user;
    if (user) {
        switch (type) {
            case 'evaluacion':
                return {
                    'filter[SolicitudResidencia_Estatus]': 'ACEPTADO',
                    'filter[Proyecto.Profesor_Asesor]': user.id
                }
            case 'solicitudes':
                return {
                    'filter[SolicitudResidencia_Estatus]': 'PENDIENTE',
                    'filter[Proyecto.Profesor_Asesor]': user.id,
                    'filter[Alumno.Alumno_Estatus.Estatus_ActivacionResidencias]': true
                }
            case 'dictamenes':
                return {
                    'filter[SolicitudResidencia_Estatus]': 'ACEPTADO',
                }
        }
    }
    return {}
}

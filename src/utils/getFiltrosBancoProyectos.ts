import type { BancoServiceParams } from "@/interfaces/params/bancoServiceParams";
import { useUserStore } from '@/stores/userStore';

export default function getFiltersBancoProyectos(type = ""): BancoServiceParams {
    const user = useUserStore().user;
    if (user) {
        switch (type) {
            case "proyectos":
                return {
                    "filter[Proyecto_Estatus]": "ACEPTADO",
                    "filter[Departamento]": user.attributes.user_departamento.Departamento_Id.$oid,
                }
            case "propuestas":
                return {
                    "filter[Proyecto_Estatus]": "ASIGNADO",
                    "filter[Profesor_Revisor.Profesor]": user.id
                }
            case "residencias":
                return {
                    "filter[Proyecto_Estatus]": "ACEPTADO",
                    "filter[Profesor_Asesor]": user.id
                }
            case "tracking":
                return {
                    "filter[Profesor_Responsable]": user.id,
                    "sort": "-"
                }
            case "asignar-revisores":
                return {
                    "filter[Proyecto_Estatus]": "PENDIENTE,ASIGNADO",
                    "filter[Departamento]": user.attributes.user_departamento.Departamento_Id.$oid,
                }
            case "asignar-asesores":
                return {
                    "filter[Proyecto_Estatus]": "ACEPTADO,EN+CURSO",
                    "filter[Departamento]": user.attributes.user_departamento.Departamento_Id.$oid,
                }
        }
    }

//{ Profesor_Responsable: profesorSesionStore().getProfesorID(), Sort: { Proyecto_FechaRegistro: '-' } }
    return {}
}

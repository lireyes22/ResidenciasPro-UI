import type { CupoData } from "@/interfaces/Cupos";


export function cuposCollection(cupos: any[]): CupoData[] {
    return cupos.map((cupo: any) => {
        return cupoResource(cupo);
    });
}

export function cupoResource(cupo: any): CupoData {
    return {
        Cupo: {
            Cupo_Id: cupo.id,
            Cupo_Fecha: cupo.attributes.Cupo_Fecha,
            Cupo_Estatus: cupo.attributes.Cupo_Estatus,
        },
        Proyecto: {
            Proyecto_Id: cupo.relationships.Proyecto.data.id,
            ...cupo.relationships.Proyecto.data.attributes
        },
        Alumno: {
            Alumno_Id: cupo.relationships.Alumno.data.id,
            ...cupo.relationships.Alumno.data.attributes
        },
        FormatValues: {
            Alumno_NombreCompleto: `${cupo.relationships.Alumno.data.attributes.Alumno_Nombre} ${cupo.relationships.Alumno.data.attributes.Alumno_ApellidoUno} ${cupo.relationships.Alumno.data.attributes.Alumno_ApellidoDos}`
        }
    };
}
import type { RevisionData } from "@/interfaces/Revisiones";


export function revisionesCollection(revisiones: any[]): RevisionData[] {
    return revisiones.map((revision: any) => {
        return revisionResource(revision);
    });
}

export function revisionResource(revision: any): RevisionData {
    return {
        Revision: {
            AsignacionPropuestas_Id: revision.id,
            AsignacionPropuestas_FechaElaboracion: revision.attributes.AsignacionPropuestas_FechaElaboracion,
            AsignacionPropuestas_FechaLimite: revision.attributes.AsignacionPropuestas_FechaLimite,
            AsignacionPropuestas_Observaciones: revision.attributes.AsignacionPropuestas_Observaciones,
            AsignacionPropuestas_Estatus: revision.attributes.AsignacionPropuestas_Estatus,
        },
        Proyecto: {
            Proyecto_Id: revision.relationships.Proyecto.data.id,
            Proyecto_Nombre: revision.relationships.Proyecto.data.attributes.Proyecto_Nombre,
        },
        Profesor: {
            Profesor_Id: revision.relationships.Profesor.data.id,
            Profesor_Nombre: revision.relationships.Profesor.data.attributes.Profesor_Nombre,
        }
    };
}
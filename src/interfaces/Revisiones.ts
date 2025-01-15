

export interface RevisionData {
    Revision: Revision;
    Proyecto: ProyectoRevision;
    Profesor: ProfesorRevision;
}

export interface ProfesorRevision {
    Profesor_Id:     string;
    Profesor_Nombre: string;
}

export interface ProyectoRevision {
    Proyecto_Id:     string;
    Proyecto_Nombre: string;
}

export interface Revision {
    AsignacionPropuestas_Id:               string;
    AsignacionPropuestas_FechaElaboracion: string;
    AsignacionPropuestas_FechaLimite:      string;
    AsignacionPropuestas_Observaciones:    string;
    AsignacionPropuestas_Estatus:          string;
}

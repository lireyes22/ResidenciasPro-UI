export interface AsesorServiceParams {
    
}


export interface AsesorServicePOST{
    Proyecto: string;
    Profesor: string;
    AsignacionAsesor_Motivo: string;
    AsignacionAsesor_NoOficio: string;
}

export interface validatePOST{
    profesorAsesorActual: string;
}
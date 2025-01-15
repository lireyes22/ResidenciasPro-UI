export interface ResidenciasServiceParams {
    "filter[SolicitudResidencia_Estatus]"?: string;
    "filter[Alumno_ID]"?: string;
    "filter[Proyecto.Profesor_Asesor]"?: string;
    "filter[Alumno.Alumno_Estatus.Estatus_ActivacionResidencias]"?: boolean;

}
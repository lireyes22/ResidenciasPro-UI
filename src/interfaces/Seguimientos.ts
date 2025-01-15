
export interface Seguimiento {
    SolicitudResidencia:                string;
    Seguimiento_Id:                     string;
    Seguimiento_Externo:                SeguimientoExterno[] | null;
    Seguimiento_ExternoObservaciones:   string | null;
    Seguimiento_Interno:                SeguimientoInterno[] | null;
    Seguimiento_InternoObservaciones:   string | null;
    Seguimiento_PromedioPrimerParcial:  number | null;
    Seguimiento_PromedioSegundoParcial: number | null;
    Seguimiento_PromedioTotal:          number | null;
    Seguimiento_ReporteFinal:           SeguimientoReporteFinal | null;
    DatosPersonales:                    DatosPersonales;
}

/* export interface Seguimiento {
    SolicitudResidencia: string;
    Seguimiento_Id: string;
    Seguimiento_Interno: SeguimientoInterno[];
    Seguimiento_InternoObservaciones: string;
    DatosPersonales: DatosPersonales;
} */

export interface DatosPersonales {
    Nombre:               string;
    Alumno_NumeroControl: string;
    Carrera_Nombre:       string;
    Proyecto_Nombre:      string;
    Periodo:              string;
}

export interface SeguimientoInterno {
    Interno_NoParcial:         number;
    Interno_Puntualidad:       number;
    Interno_Conocimiento:      number;
    Interno_TrabajoEquipo:     number;
    Interno_Dedicado:          number;
    Interno_Ordenado:          number;
    Interno_Mejoras:           number;
    Interno_CalificacionTotal: number;
    Interno_Fecha:             string;
}

export interface SeguimientoExterno{
    Externo_NoParcial:      number;
    Externo_Puntualidad:    number;
    Externo_TrabajoEquipo:  number;
    Externo_Iniciativa:     number;
    Externo_Mejoras:        number;
    Externo_Objetivos:      number;
    Externo_Ordenado:       number;
    Externo_Liderazgo:      number;
    Externo_Conocimiento:   number;
    Externo_Etica:          number;
    Externo_CalificacionTotal:  number;
    Externo_Fecha:              string;
}

export interface SeguimientoReporteFinal {
    ReporteFinal_Interno: ReporteFinal;
    ReporteFinal_Externo: ReporteFinal;
}

export interface ReporteFinal {
    ReporteFinal_Portada:           number;
    ReporteFinal_Agradecimientos:   number;
    ReporteFinal_Resumen:           number;
    ReporteFinal_Indice:            number;
    ReporteFinal_Introduccion:      number;
    ReporteFinal_Antecedentes:      number;
    ReporteFinal_Justificacion:     number;
    ReporteFinal_Objetivos:         number;
    ReporteFinal_Metodologia:       number;
    ReporteFinal_Resultados:        number;
    ReporteFinal_Discusiones:       number;
    ReporteFinal_Conclusiones:      number;
    ReporteFinal_Bibliografia:      number;
    ReporteFinal_Problematica:      number;
    ReporteFinal_MarcoTeorico:      number;
    ReporteFinal_Procedimiento:     number;
    ReporteFinal_Competencias:      number;
}

import type { Seguimiento } from "@/interfaces/Seguimientos";

export const initEvaluacion: () => Seguimiento = () => {
    return {
        SolicitudResidencia: "",
        Seguimiento_Id: "",
        Seguimiento_Interno: [
            {
                Interno_NoParcial: 1,
                Interno_Puntualidad: 0,
                Interno_Conocimiento: 0,
                Interno_TrabajoEquipo: 0,
                Interno_Dedicado: 0,
                Interno_Ordenado: 0,
                Interno_Mejoras: 0,
                Interno_CalificacionTotal: 0,
                Interno_Fecha: new Date().toISOString()
            },
            {
                Interno_NoParcial: 2,
                Interno_Puntualidad: 0,
                Interno_Conocimiento: 0,
                Interno_TrabajoEquipo: 0,
                Interno_Dedicado: 0,
                Interno_Ordenado: 0,
                Interno_Mejoras: 0,
                Interno_CalificacionTotal: 0,
                Interno_Fecha: new Date().toISOString()
            },
        ],
        Seguimiento_Externo: [
            {
                Externo_NoParcial: 1,
                Externo_Puntualidad: 0,
                Externo_TrabajoEquipo: 0,
                Externo_Iniciativa: 0,
                Externo_Mejoras: 0,
                Externo_Objetivos: 0,
                Externo_Ordenado: 0,
                Externo_Liderazgo: 0,
                Externo_Conocimiento: 0,
                Externo_Etica: 0,
                Externo_CalificacionTotal: 0,
                Externo_Fecha: new Date().toISOString()
            },
            {
                Externo_NoParcial: 2,
                Externo_Puntualidad: 0,
                Externo_TrabajoEquipo: 0,
                Externo_Iniciativa: 0,
                Externo_Mejoras: 0,
                Externo_Objetivos: 0,
                Externo_Ordenado: 0,
                Externo_Liderazgo: 0,
                Externo_Conocimiento: 0,
                Externo_Etica: 0,
                Externo_CalificacionTotal: 0,
                Externo_Fecha: new Date().toISOString()
            },
        ],
        DatosPersonales: {
            Nombre: "",
            Alumno_NumeroControl: "",
            Carrera_Nombre: "",
            Proyecto_Nombre: "",
            Periodo: ""
        },
        Seguimiento_InternoObservaciones: '',
        Seguimiento_ExternoObservaciones: '',
        Seguimiento_PromedioPrimerParcial: 0,
        Seguimiento_PromedioSegundoParcial: 0,
        Seguimiento_PromedioTotal: 0
    };
};

import type { Seguimiento } from "@/interfaces/Seguimientos";
import jsonCopy from "./jsonCopy";

export default function seguimiento(seguimiento: Seguimiento) {

    function toSumInterno() {
        if(seguimiento.Seguimiento_Interno)
        seguimiento.Seguimiento_Interno.map((parcial) => parcial.Interno_CalificacionTotal = parcial.Interno_Mejoras +
            parcial.Interno_Ordenado +
            parcial.Interno_Dedicado +
            parcial.Interno_TrabajoEquipo +
            parcial.Interno_Conocimiento +
            parcial.Interno_Puntualidad);
    }

    function toSumExterno() {
        if(seguimiento.Seguimiento_Externo)
        seguimiento.Seguimiento_Externo.map((parcial) => parcial.Externo_CalificacionTotal = parcial.Externo_Puntualidad +
            parcial.Externo_TrabajoEquipo +
            parcial.Externo_Iniciativa +
            parcial.Externo_Mejoras +
            parcial.Externo_Objetivos +
            parcial.Externo_Ordenado +
            parcial.Externo_Liderazgo +
            parcial.Externo_Conocimiento +
            parcial.Externo_Etica);
    }

    function setDataSeguimiento(dataSeguimiento: any) {
        seguimiento.Seguimiento_InternoObservaciones = jsonCopy(dataSeguimiento.Seguimiento_InternoObservaciones);
        seguimiento.Seguimiento_Interno = jsonCopy(dataSeguimiento.Seguimiento_Interno);
        seguimiento.Seguimiento_Externo = jsonCopy(dataSeguimiento.Seguimiento_Externo);
        return seguimiento;
    }
    function setDataResidencia(dataResidencia: any) {
        seguimiento.SolicitudResidencia = dataResidencia.Residencia.SolicitudResidencia_Id;
        seguimiento.DatosPersonales = {
            Nombre: `${dataResidencia.Alumno.Alumno_Nombre} ${dataResidencia.Alumno.Alumno_ApellidoUno} ${dataResidencia.Alumno.Alumno_ApellidoDos}`,
            Alumno_NumeroControl: dataResidencia.Alumno.Alumno_NumeroControl,
            Carrera_Nombre: dataResidencia.Alumno.Alumno_Carrera,
            Proyecto_Nombre: dataResidencia.Proyecto.Proyecto_Nombre,
            Periodo: dataResidencia.Residencia.SolicitudResidencia_PeriodoProyectado,
        }
        return seguimiento;
    }

    return {
        toSumInterno,
        toSumExterno,
        setDataSeguimiento,
        setDataResidencia,
    };
}
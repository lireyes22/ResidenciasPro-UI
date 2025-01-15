import type { ProyectoBancoCompleto, ProyectoCompleto, ProyectoTemplate } from "@/interfaces/Proyectos";


export default function transformProyect(dataProyecto: ProyectoCompleto | ProyectoBancoCompleto) {

    function toTemplate():ProyectoTemplate{
        return {
            Proyecto_Nombre: dataProyecto.Proyecto.Proyecto_Nombre,
            Proyecto_Tipo: dataProyecto.Proyecto.Proyecto_Tipo,
            Proyecto_Descripcion: dataProyecto.Proyecto.Proyecto_Descripcion,
            Proyecto_Objetivo: dataProyecto.Proyecto.Proyecto_Objetivo,
            Proyecto_TipoOptativa: dataProyecto.Proyecto.Proyecto_TipoOptativa,
            Proyecto_TipoOpcion: dataProyecto.Proyecto.Proyecto_TipoOpcion,
            Proyecto_Impacto: dataProyecto.Proyecto.Proyecto_Impacto,
            Proyecto_Referencias: dataProyecto.Proyecto.Proyecto_Referencias,
            Proyecto_LineaInvestigacion: dataProyecto.Proyecto.Proyecto_LineaInvestigacion,
            Proyecto_Lugar: dataProyecto.Proyecto.Proyecto_Lugar,
            Proyecto_TiempoEstimado: dataProyecto.Proyecto.Proyecto_TiempoEstimado,
            Proyecto_EstudiantesRequeridos: dataProyecto.Proyecto.Proyecto_EstudiantesRequeridos,
            Empresa: dataProyecto.Empresa.Empresa_Id,
            Profesor_Responsable: dataProyecto.Profesor_Responsable.Profesor_Id,
            Proyecto_Carreras: dataProyecto.Carreras.map(carrera => carrera.Carrera_Id),
            Departamento: dataProyecto.Departamento.Departamento_Id,
            Proyecto_Investigacion: dataProyecto.Proyecto.Proyecto_Investigacion,
            Profesor_Asesor: dataProyecto.Profesor_Asesor.Profesor_Id,
            Proyecto_Estatus: dataProyecto.Proyecto.Proyecto_Estatus,
        }
    }
    return{
        toTemplate
    }

    
    
}
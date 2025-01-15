import type { ProyectoBancoCompleto } from "@/interfaces/Proyectos";
import isDateOnOrAfterToday from "@/utils/isDateOnOrAfterToday";

export function BancoProyectosCollection(proyectos: any[], sort = true): ProyectoBancoCompleto[] {

    let collection = proyectos.map((proyecto: any) => {
        return BancoProyectoResource(proyecto);
    });

    if(sort){
        return collection.sort((a: any, b: any) => {
            const fechaA = new Date(a.Proyecto.Proyecto_FechaRegistro).getTime();
            const fechaB = new Date(b.Proyecto.Proyecto_FechaRegistro).getTime();
            return fechaB - fechaA;
        });
    }
    return collection;
};


export function BancoProyectoResource(proyecto: any): ProyectoBancoCompleto {
    const responsable = proyecto.relationships.Profesor_Responsable;
    const asesor = proyecto.relationships.Profesor_Asesor;
    let revisor = proyecto.relationships.Profesor_Revisor;
    if (revisor === null) {
        revisor = {
            id: "null",
            attributes: {
                Profesor_Nombre: "Sin revisor asignado",
                Profesor_Puesto: "Sin revisor asignado"
            }
        };
    }
    const departamento = proyecto.relationships.Departamento;
    const empresa = proyecto.relationships.Empresa;
    const resource = {
        ////////////// PROYECTO
        Proyecto: {
            ...proyecto.attributes,
            Proyecto_Id: proyecto.id,
        },
        ////////////// PROFESOR RESPONSABLE
        Profesor_Responsable: {
            Profesor_Id: responsable.id,
            Profesor_Nombre: responsable.attributes.Profesor_Nombre,
            Profesor_Correo: responsable.attributes.Profesor_Correo,
        },
        ////////////// PROFESOR ASESOR
        Profesor_Asesor: {
            Profesor_Id: asesor.id,
            Profesor_Nombre: asesor.attributes.Profesor_Nombre,
            Profesor_Correo: asesor.attributes.Profesor_Correo,
        },
        ////////////// PROFESOR REVISOR
        Profesor_Revisor: {
            Profesor_Id: revisor.id,
            Profesor_Nombre: revisor.attributes.Profesor_Nombre,
            AsignacionPropuestas_FechaElaboracion: revisor.attributes.AsignacionPropuestas_FechaElaboracion,
            AsignacionPropuestas_FechaLimite: revisor.attributes.AsignacionPropuestas_FechaLimite,
            AsignacionPropuestas_Id: revisor.attributes.AsignacionPropuestas_Id,
            isOnDate: isDateOnOrAfterToday(revisor.attributes.AsignacionPropuestas_FechaLimite)
        },
        ////////////// CARRERAS
        Carreras: proyecto.relationships.Carreras.map((carrera: any) => {
            return {
                Carrera_Id: carrera.id,
                Carrera_Nombre: carrera.attributes.Carrera_Nombre,
            }
        }),
        ////////////// DEPARTAMENTO
        Departamento: {
            Departamento_Id: departamento.id,
            Departamento_Nombre: departamento.attributes.Departamento_Nombre,
        },
        ////////////// EMPRESA
        Empresa: {
            ...empresa.attributes,
            Empresa_Id: empresa.id,
        },
        ////////////// CUPOS
        Cupos: proyecto.relationships.Cupos.map((cupo: any) => {
            return {
                Cupo_Id: cupo.id,
                Cupo_Alumno: cupo.attributes.Cupo_Alumno,
                Cupo_Alumno_NumeroControl: cupo.attributes.Cupo_Alumno_NumeroControl,
                Cupo_Alumno_Id: cupo.attributes.Cupo_Alumno_Id,
                Cupo_Alumno_CarreraNombre: cupo.attributes.Cupo_Alumno_CarreraNombre,
                Cupo_Alumno_Correo: cupo.attributes.Cupo_Alumno_Correo,
                Cupo_Fecha: cupo.attributes.Cupo_Fecha,
                Cupo_Estatus: cupo.attributes.Cupo_Estatus.toUpperCase(),
            }
        }),
        ////////////// FORMATVALUES
        FormatValues: {
            Proyecto_EstudiantesRequeridosInscritos: `${proyecto.attributes.Proyecto_EstudiantesInscritos}/${proyecto.attributes.Proyecto_EstudiantesRequeridos}`,
            Carreras_Nombres: proyecto.relationships.Carreras.map((carrera: any) => {
                return carrera.attributes.Carrera_Nombre;
            }).join(', '),
            Cupos_NPendientes: proyecto.relationships.Cupos.filter((cupo: any) => {
                return cupo.attributes.Cupo_Estatus === "PENDIENTE";
            }).length || 0
        }
    };

    

    return resource;
}
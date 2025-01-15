import type { ProyectoServiceParams } from "@/interfaces/params/proyectoServiceParams";
import type { ProyectoCompleto } from "@/interfaces/Proyectos";
import { empresaResource } from "./EmpresasResource";


export function ProyectoResource(proyecto: any, params?: ProyectoServiceParams): ProyectoCompleto {
    const empresa = proyecto.relationships.Empresa.data;
    const responsable = proyecto.relationships.Profesor_Responsable.data;
    const asesor = proyecto.relationships.Proyecto_Asesor.data;
    const departamento = proyecto.relationships.Departamentos.data;
    const resource = {
        ////////////// PROYECTO
        Proyecto: {
            ...proyecto.attributes,
            Proyecto_Id: proyecto.id,
        },
        ////////////// EMPRESA
        Empresa: {
            Empresa_Id: empresa.id,
            ...empresa.attributes,
        },
        ////////////// PROFESOR RESPONSABLE
        Profesor_Responsable: {
            Profesor_Id: responsable.id,
            ...responsable.attributes

        },
        ////////////// PROFESOR ASESOR
        Profesor_Asesor: {
            Profesor_Id: asesor.id,
            ...asesor.attributes
        },
        ////////////// CARRERAS
        Carreras: proyecto.relationships.Proyecto_Carreras.map((carrera: any) => {
            return {
                Carrera_Id: carrera.id,
                ...carrera.attributes
            }
        }),
        ////////////// DEPARTAMENTO
        Departamento: {
            Departamento_Id: departamento.id,
            ...departamento.attributes
        },
        ////////////// FORMAT VALUES
        FormatValues: {
            ProfesorResponsable: `${responsable.attributes.Profesor_Nombre} ${responsable.attributes.Profesor_ApellidoUno} ${responsable.attributes.Profesor_ApellidoDos}`,
            CarrerasNombres: proyecto.relationships.Proyecto_Carreras.map((carrera: any) => {
                return carrera.attributes.Carrera_Nombre
            }).join(', '),
            EmpresaTitular: '',
            ProfesorAsesor: `${asesor.attributes.Profesor_Nombre} ${asesor.attributes.Profesor_ApellidoUno} ${asesor.attributes.Profesor_ApellidoDos}`,
        },
        ///////////// INFORMACION ADICIONAL
        Included: {},
    };

    if (params?.included === 'Empresa') {
        const empresaInclude = empresaResource(proyecto.included[0]);
        resource.Included = {
            Empresa: empresaInclude
        }
        resource.FormatValues.EmpresaTitular = `${empresaInclude.Empresa_Titular.Titular_Nombre} ${empresaInclude.Empresa_Titular.Titular_ApellidoUno} ${empresaInclude.Empresa_Titular.Titular_ApellidoDos}`;
    }

    return resource;
}
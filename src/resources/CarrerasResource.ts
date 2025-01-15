import type { Carrera } from "@/interfaces/Carreras";


export function carrerasCollection(carreras: any[]): Carrera[] {
    return carreras.map((carrera: any) => {
        return carreraResource(carrera);
    });
}

export function carreraResource(carrera: any): Carrera {
    return {
        Carrera_Id: carrera.id,
        Carrera_Nombre: carrera.attributes.Carrera_Nombre,
        Carrera_LineasInvestigacion: carrera.attributes.Carrera_LineasInvestigacion,
        Coordinador: {
            Coordinador_ID: carrera.relationships.Coordinador.id,
            Coordinador_NombreCompleto: carrera.relationships.Coordinador.Profesor_NombreCompleto,
        },
        Departamento: {
            Departamento_ID: carrera.relationships.Departamento.id,
            Departamento_Nombre: carrera.relationships.Departamento.Departamento_Nombre,
        }
    };
}
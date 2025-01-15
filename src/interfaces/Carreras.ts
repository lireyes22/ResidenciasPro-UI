export interface Carrera {
    Carrera_Id: string;
    Carrera_Nombre: string,
    Carrera_LineasInvestigacion: LineaInvestigacion[],
    Coordinador: {
        Coordinador_ID: string,
        Coordinador_NombreCompleto: string,
    },
    Departamento: {
        Departamento_ID: string,
        Departamento_Nombre: string,
    }
}

export interface LineaInvestigacion {
    LineaInvestigacion_Nombre: string,
    LineaInvestigacion_Clave: string,
}

export interface Carrera_LineasInvestigacion {
    Carrera_LineasInvestigacion: LineaInvestigacion[]
}

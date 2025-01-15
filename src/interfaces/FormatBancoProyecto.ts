export interface EmpresasFBP {
    Empresa_Id: string;
    Empresa_Nombre: string;
    Empresa_Actividad: string;
    Empresa_Ramo: string;
    Empresa_Sector: string;
    Empresa_Rfc: string;
    Empresa_Fax: string;
    Empresa_Telefono: string;
    Empresa_Domicilio: {
        Domicilio_Ciudad: string;
        Domicilio_Calle: string;
        Domicilio_Colonia: string;
        Domicilio_NoExt: string;
        Domicilio_NoInt: string;
        Domicilio_CodigoPostal: number;
    },
    Empresa_Titular: {
        Titular_Nombre: string;
        Titular_ApellidoUno: string;
        Titular_ApellidoDos: string;
        Titular_Puesto: string;
    };
    Empresa_AsesorExterno: {
        AsesorExterno_Nombre: string;
        AsesorExterno_ApellidoUno: string;
        AsesorExterno_ApellidoDos: string;
        AsesorExterno_Puesto: string;
    }[];
    Empresa_EncargadoAcuerdo: {
        EncargadoAcuerdo_Nombre: string;
        EncargadoAcuerdo_ApellidoUno: string;
        EncargadoAcuerdo_ApellidoDos: string;
        EncargadoAcuerdo_Puesto: string;
    }[];
}
export interface ProfesorFBP {
    Profesor_Id: string;
    Profesor_Nombre: string;
    Profesor_Correo: string;
};
export interface CarreraFBP {
    Carrera_Id: string;
    Carrera_Nombre: string;
};
export interface CuposFBP {
    Cupo_Id: string;
    Cupo_Alumno: string;
    Cupo_Alumno_NumeroControl: string;
    Cupo_Alumno_Id: string;
    Cupo_Alumno_CarreraNombre: string;
    Cupo_Alumno_Correo: string;
    Cupo_Fecha: string;
    Cupo_Estatus: string;
}[];
export interface ProfesorRevisorFBP {
    Profesor_Id: string;
    Profesor_Nombre: string;
    AsignacionPropuestas_FechaElaboracion: string;
    AsignacionPropuestas_FechaLimite: string;
    AsignacionPropuestas_Id: string;
    isOnDate: boolean;
}

export interface DepartamentoFBP {
    Departamento_Id: string;
    Departamento_Nombre: string;
};

export interface FormatValuesFBP {
    Proyecto_EstudiantesRequeridosInscritos?: string;
    Carreras_Nombres?: string;
    Cupos_NPendientes?: number;
}
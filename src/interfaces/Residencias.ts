export interface ResidenciaData{
    Residencia: Residencia;
    Alumno: AlumnoResidencia;
    Empresa: EmpresaResidencia;
    Proyecto: ProyectoResidencia;
    FormatValues?: FormatValues;
}


export interface Residencia{
    SolicitudResidencia_Id: string;
    SolicitudResidencia_Anteproyecto: string;
    SolicitudResidencia_Coordinador: string;
    SolicitudResidencia_Estatus: string;
    SolicitudResidencia_FechaEvaluacion: string;
    SolicitudResidencia_FechaRegistro: string;
    SolicitudResidencia_JefeEstudiosProfesionales: string;
    SolicitudResidencia_Observaciones: string;
    SolicitudResidencia_PeriodoProyectado: string;
}

export interface AlumnoResidencia {
    Alumno_Id: string;
    Alumno_NumeroControl: string;
    Alumno_Nombre: string;
    Alumno_ApellidoUno: string;
    Alumno_ApellidoDos: string;
    Alumno_Semestre: number;
    Alumno_Correo: string;
    Alumno_Telefono: string;
    Alumno_Sexo: string;
    Alumno_Carrera: string;
    Alumno_Seguro: {
        Alumno_Nss: string;
        Alumno_TipoSeguro: string;
    };
    Alumno_Domicilio: {
        Domicilio_Ciudad: string;
        Domicilio_Calle: string;
        Domicilio_Colonia: string;
        Domicilio_NoExt: string;
        Domicilio_NoInt: string;
        Domicilio_CodigoPostal: number;
    };
    Alumno_Estatus: {
        Estatus_CumpleCreditos: boolean;
        Estatus_CumpleServicioSocial: boolean;
        Estatus_CumpleNoEspeciales: boolean;
        Estatus_CumplePorcentaje: boolean;
        Estatus_PermisoAcademia: boolean;
        Estatus_Situacion: boolean;
        Estatus_Residencia: boolean;
        Estatus_ResidenciaGlobal: boolean;
        Estatus_DatosPersonales: boolean;
        Estatus_ActivacionResidencias: boolean;
    };
}

export interface EmpresaResidencia{
    Empresa_Id: string;
    Empresa_Nombre: string;
    Empresa_Actividad: string;
    Empresa_Ramo: string;
    Empresa_Sector: string;
    Empresa_Rfc: string;
    Empresa_Fax: string;
    Empresa_Telefono: string;
    Empresa_Domicilio: {
        Empresa_Ciudad: string;
        Empresa_Calle: string;
        Empresa_Colonia: string;
        Empresa_NoExt: string;
        Empresa_NoInt: string;
        Empresa_CodigoPostal: number;
    };
    Empresa_Titular: {
        Titular_NombreCompleto: string;
        Titular_Puesto: string;
    };
    Empresa_AsesorExterno: {
        AsesorExterno_NombreCompleto: string;
        AsesorExterno_Puesto: string;
    };
    Empresa_EncargadoAcuerdo: {
        EncargadoAcuerdo_NombreCompleto: string;
        EncargadoAcuerdo_Puesto: string;
    };
}

export interface ProyectoResidencia {
    Proyecto_Id: string;
    Proyecto_Nombre: string;
    Proyecto_Tipo: string;
    Proyecto_TipoOptativa?: string;
    Proyecto_TipoOpcion: string;
    Proyecto_Investigacion: boolean;
    Proyecto_EstudiantesRequeridos: number;
    Proyecto_TiempoEstimado: number;
    Profesor_Asesor: {
        Asesor_Id: string;
        Asesor_Nombre: string;
        Asesor_ApellidoUno: string;
        Asesor_ApellidoDos: string;
    };
}

export interface FormatValues{
    Alumno_NombreCompleto?: string;
    Profesor_AsesorNombreCompleto?: string;
    Alumno_DomicilioCompleto?: string;
    Empresa_DomicilioCompleto?: string;
}
export interface Alumno {
    Alumno_Id:                string;
    Alumno_Nombre:            string;
    Alumno_ApellidoUno:       string;
    Alumno_ApellidoDos:       string;
    Alumno_NombreCompleto:    string;
    Alumno_NumeroControl:     string;
    Alumno_Correo:            string;
    Alumno_CorreoPersonal:    string;
    Alumno_Semestre:          number;
    Alumno_Telefono:          string;
    Alumno_Sexo:              string;
    Alumno_Seguro:            AlumnoSeguro;
    Alumno_SeguroEmpresarial: AlumnoSeguroEmpresarial;
    Alumno_Domicilio:         AlumnoDomicilio;
    Alumno_Estatus:           AlumnoEstatus;
    Alumno_Carrera:           AlumnoCarrera;
    Alumno_Departamento:      AlumnoDepartamento;
}

export interface AlumnoDomicilio {
    Domicilio_Ciudad:       string;
    Domicilio_Calle:        string;
    Domicilio_Colonia:      string;
    Domicilio_NoExt:        string;
    Domicilio_NoInt:        string;
    Domicilio_CodigoPostal: number;
}

export interface AlumnoEstatus {
    Estatus_CumpleCreditos:        boolean;
    Estatus_CumpleServicioSocial:  boolean;
    Estatus_CumpleNoEspeciales:    boolean;
    Estatus_CumplePorcentaje:      boolean;
    Estatus_PermisoAcademia:       boolean;
    Estatus_Situacion:             boolean;
    Estatus_Residencia:            boolean;
    Estatus_ResidenciaGlobal:      boolean;
    Estatus_DatosPersonales:       boolean;
    Estatus_ActivacionResidencias: boolean;
}

export interface AlumnoSeguro {
    Seguro_Nss:        string;
    Seguro_TipoSeguro: string;
}

export interface AlumnoSeguroEmpresarial {
    SeguroEmpresarial_Numero:        string;
    SeguroEmpresarial_NombreEmpresa: string;
}

export interface AlumnoCarrera {
    Carrera_Id:     string;
    Carrera_Nombre: string;
}

export interface AlumnoDepartamento {
    Departamento_Id:     string;
    Departamento_Nombre: string;
}

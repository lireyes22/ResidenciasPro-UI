
export interface CupoData{
    Cupo: Cupo;
    Proyecto: CupoProyecto;
    Alumno: CupoAlumno;
    FormatValues?: FormatValues
}

export interface Cupo{
    Cupo_Id: string;
    Cupo_Fecha: string;
    Cupo_Estatus: string;
}

export interface CupoProyecto{
    Proyecto_Id: string;
    Proyecto_Nombre: string;
    Proyecto_EstudiantesRequeridos: number;
}

export interface CupoAlumno{
    Alumno_Id: string;
    Alumno_Nombre: string;
    Alumno_ApellidoUno: string;
    Alumno_ApellidoDos: string;
    Alumno_Correo: string;
    Alumno_Telefono: string;
    Alumno_Semestre: number;
    Alumno_NumeroControl: string;
    Alumno_CarreraNombre: string;
}

export interface FormatValues{
    Alumno_NombreCompleto?: string;
}
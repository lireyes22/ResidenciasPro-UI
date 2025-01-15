export interface PersonalData {
    Profesor: Personal;
    Puesto: PuestoProfesor[];
    Departamento: DepartamentoProfesor;
    FormatValues?: FormatValues;
}

export interface Personal {
    Profesor_Id: string;
    Profesor_Nombre: string;
    Profesor_ApellidoUno: string;
    Profesor_ApellidoDos: string;
    Profesor_Correo: string;
}

export interface PuestoProfesor {
    Puesto_Id: string;
    Puesto_Nombre: string;
}

export interface DepartamentoProfesor {
    Departamento_Id: string;
    Departamento_Nombre: string;
}

export interface FormatValues {
    Profesor_NombreCompleto?: string;
}

export interface PersonalUpdate{
    Profesor_Nombre: string;
    Profesor_ApellidoUno: string;
    Profesor_ApellidoDos: string;
    Profesor_Correo: string;
    Departamento: string;
    Profesor_Puesto: string[];
}

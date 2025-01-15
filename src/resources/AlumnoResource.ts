import type { Alumno } from "@/interfaces/Alumnos";


export function alumnosCollection(alumnos: any[]): Alumno[] {
    return alumnos.map((alumno: any) => {
        return alumnoResource(alumno);
    });
}

export function alumnoResource(alumno: any): Alumno {
    return {
        Alumno_Id: alumno.id,
        Alumno_Nombre: alumno.attributes.Alumno_Nombre,
        Alumno_ApellidoUno: alumno.attributes.Alumno_ApellidoUno,
        Alumno_ApellidoDos: alumno.attributes.Alumno_ApellidoDos,
        Alumno_NombreCompleto: alumno.attributes.Alumno_Nombre + ' ' + alumno.attributes.Alumno_ApellidoUno + ' ' + alumno.attributes.Alumno_ApellidoDos,
        Alumno_NumeroControl: alumno.attributes.Alumno_NumeroControl,
        Alumno_Correo: alumno.attributes.Alumno_Correo,
        Alumno_CorreoPersonal: alumno.attributes.Alumno_CorreoPersonal,
        Alumno_Sexo: alumno.attributes.Alumno_Sexo,
        Alumno_Semestre: alumno.attributes.Alumno_Semestre,
        Alumno_Telefono: alumno.attributes.Alumno_Telefono,
        Alumno_Seguro: alumno.attributes.Alumno_Seguro,
        Alumno_SeguroEmpresarial: alumno.attributes.Alumno_SeguroEmpresarial,
        Alumno_Domicilio: alumno.attributes.Alumno_Domicilio,
        Alumno_Estatus: alumno.attributes.Alumno_Estatus,
        Alumno_Carrera: {
            Carrera_Id: alumno.relationships.carrera.data.id,
            Carrera_Nombre: alumno.relationships.carrera.data.attributes.Carrera_Nombre
        },
        Alumno_Departamento: {
            Departamento_Id: alumno.relationships.departamento.data.id,
            Departamento_Nombre: alumno.relationships.departamento.data.attributes.Departamento_Nombre
        },
    };
}

import type { PersonalData } from "@/interfaces/Personal";


export function personalCollection(personals: any[]): PersonalData[] {
    return personals.map((personal: any) => {
        return personalResource(personal);
    });
}

export function personalResource(personal: any): PersonalData {

    return {
        Profesor: {
            Profesor_Id: personal.id,
            Profesor_Nombre: personal.attributes.Profesor_Nombre,
            Profesor_ApellidoUno: personal.attributes.Profesor_ApellidoUno,
            Profesor_ApellidoDos: personal.attributes.Profesor_ApellidoDos,
            Profesor_Correo: personal.attributes.Profesor_Correo,
        },
        Puesto: personal.relationships.Profesor_Puesto.data.map((puesto: any) => {
            return {
                Puesto_Id: puesto.id,
                Puesto_Nombre: puesto.attributes.Puesto_Nombre,
            };
        }),
        Departamento: {
            Departamento_Id: personal.relationships.Departamento.data.id,
            Departamento_Nombre: personal.relationships.Departamento.data.attributes.Departamento_Nombre,
        },
        FormatValues:{
            Profesor_NombreCompleto: `${personal.attributes.Profesor_Nombre} ${personal.attributes.Profesor_ApellidoUno} ${personal.attributes.Profesor_ApellidoDos}`,
        }
    };
}
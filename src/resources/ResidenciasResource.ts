
import type { ResidenciaData } from "@/interfaces/Residencias";


export function residenciasCollection(residencias: any[]): ResidenciaData[] {
    return residencias.map((residencia: any) => {
        return residenciaResource(residencia);
    });
}

export function residenciaResource(residencia: any): ResidenciaData {

    return {
        Residencia: {
            SolicitudResidencia_Id: residencia.id,
            ...residencia.attributes
        },
        Proyecto: {
            Proyecto_Id: residencia.relationships.Proyecto.id,
            ...residencia.relationships.Proyecto.attributes
        },
        Empresa: {
            Empresa_Id: residencia.relationships.Empresa.id,
            ...residencia.relationships.Empresa
        },
        Alumno: {
            Alumno_Id: residencia.relationships.Alumno.id,
            ...residencia.relationships.Alumno.attributes
        },
        FormatValues: {
            Alumno_NombreCompleto: `${residencia.relationships.Alumno.attributes.Alumno_Nombre} ${residencia.relationships.Alumno.attributes.Alumno_ApellidoUno} ${residencia.relationships.Alumno.attributes.Alumno_ApellidoDos}`,
            Profesor_AsesorNombreCompleto: `${residencia.relationships.Proyecto.attributes.Profesor_Asesor.Asesor_Nombre} ${residencia.relationships.Proyecto.attributes.Profesor_Asesor.Asesor_ApellidoUno} ${residencia.relationships.Proyecto.attributes.Profesor_Asesor.Asesor_ApellidoDos}`,
            Alumno_DomicilioCompleto: `
                ${residencia.relationships.Alumno.attributes.Alumno_Domicilio.Domicilio_Calle}
                No. Int. ${residencia.relationships.Alumno.attributes.Alumno_Domicilio.Domicilio_NoInt}
                Col. ${residencia.relationships.Alumno.attributes.Alumno_Domicilio.Domicilio_Colonia}
                CP. ${residencia.relationships.Alumno.attributes.Alumno_Domicilio.Domicilio_CodigoPostal}`,
            Empresa_DomicilioCompleto: `
                ${residencia.relationships.Empresa.Empresa_Domicilio.Empresa_Calle}
                No. Int. ${residencia.relationships.Empresa.Empresa_Domicilio.Empresa_NoInt}
                Col. ${residencia.relationships.Empresa.Empresa_Domicilio.Empresa_Colonia}
                CP. ${residencia.relationships.Empresa.Empresa_Domicilio.Empresa_CodigoPostal}
            `,
        }
    };
}
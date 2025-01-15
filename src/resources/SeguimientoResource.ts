import type { Seguimiento } from "@/interfaces/Seguimientos";


export function seguimientosCollection(seguimientos: any[]): Seguimiento[] {
    return seguimientos.map((seguimiento: any) => {
        return seguimientoResource(seguimiento);
    });
}

export function seguimientoResource(seguimiento: any): Seguimiento {
    return {
        Seguimiento_Id: seguimiento.id,
        SolicitudResidencia: seguimiento.attributes.SolicitudResidencia,
        Seguimiento_Interno: seguimiento.attributes.Seguimiento_Interno,
        Seguimiento_InternoObservaciones: seguimiento.attributes.Seguimiento_InternoObservaciones,
        Seguimiento_Externo: seguimiento.attributes.Seguimiento_Externo,
        Seguimiento_ExternoObservaciones: seguimiento.attributes.Seguimiento_InternoObservaciones,
        Seguimiento_PromedioPrimerParcial: seguimiento.attributes.Seguimiento_PromedioPrimerParcial,
        Seguimiento_PromedioSegundoParcial: seguimiento.attributes.Seguimiento_PromedioSegundoParcial,
        Seguimiento_PromedioTotal: seguimiento.attributes.Seguimiento_PromedioTotal,
        DatosPersonales: seguimiento.attributes.DatosPersonales,
    };
}
import type { Puesto } from "@/interfaces/Puestos";


export function puestosCollection(puestos: any[]): Puesto[] {
    return puestos.map((puesto: any) => {
        return puestoResource(puesto);
    });
}

export function puestoResource(puesto: any): Puesto {
    return {
        Puesto_Id: puesto.id,
        Puesto_Nombre: puesto.attributes.Puesto_Nombre,
    };
}
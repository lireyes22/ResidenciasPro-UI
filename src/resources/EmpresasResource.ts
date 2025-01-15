import type { Empresa } from "@/interfaces/Empresas";


export function empresasCollection(empresas: any[]): Empresa[] {
    return empresas.map((empresa: any) => {
        return empresaResource(empresa);
    });
}

export function empresaResource(empresa: any): Empresa {
    return {
        Empresa_Id: empresa.id,
        Empresa_Nombre: empresa.attributes.Empresa_Nombre,
        Empresa_Sector: empresa.attributes.Empresa_Sector,
        Empresa_Actividad: empresa.attributes.Empresa_Actividad,
        Empresa_Telefono: empresa.attributes.Empresa_Telefono,
        Empresa_Ramo: empresa.attributes.Empresa_Ramo,
        Empresa_Rfc: empresa.attributes.Empresa_Rfc,
        Empresa_Fax: empresa.attributes.Empresa_Fax,
        Empresa_Domicilio: empresa.attributes.Empresa_Domicilio,
        Empresa_Titular: empresa.attributes.Empresa_Titular,
        Empresa_AsesorExterno: empresa.attributes.Empresa_AsesorExterno,
        Empresa_EncargadoAcuerdo: empresa.attributes.Empresa_EncargadoAcuerdo,
    };
}
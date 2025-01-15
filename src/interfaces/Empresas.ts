export interface Empresa {
    Empresa_Id: string;
    Empresa_Nombre: string;
    Empresa_Actividad: string;
    Empresa_Ramo: string;
    Empresa_Sector: string;
    Empresa_Rfc: string;
    Empresa_Fax: string;
    Empresa_Telefono: string;
    Empresa_Domicilio: {
        Domicilio_Ciudad: string;
        Domicilio_Calle: string;
        Domicilio_Colonia: string;
        Domicilio_NoExt: string;
        Domicilio_NoInt: string;
        Domicilio_CodigoPostal: number;
    },
    Empresa_Titular: {
        Titular_Nombre: string;
        Titular_ApellidoUno: string;
        Titular_ApellidoDos: string;
        Titular_Puesto: string;
    };
    Empresa_AsesorExterno: {
        AsesorExterno_Nombre: string;
        AsesorExterno_ApellidoUno: string;
        AsesorExterno_ApellidoDos: string;
        AsesorExterno_Puesto: string;
    }[];
    Empresa_EncargadoAcuerdo: {
        EncargadoAcuerdo_Nombre: string;
        EncargadoAcuerdo_ApellidoUno: string;
        EncargadoAcuerdo_ApellidoDos: string;
        EncargadoAcuerdo_Puesto: string;
    }[];
}
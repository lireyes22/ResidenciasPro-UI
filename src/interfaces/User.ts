export interface User {
    type:       string;
    id:         string;
    attributes: Attributes;
}

export interface Attributes {
    user_nombre:                 string;
    user_apellidos:              string;
    user_email:                  string;
    user_no_control:             null;
    user_carrera:                null;
    user_departamento:           UserDepartamento;
    user_estatus:                boolean;
    user_creditos:               null;
    user_servicio:               null;
    user_especiales:             null;
    user_porcentaje:             null;
    user_estatus_tracking:       null;
    user_residencia:             null;
    user_residencia_estatus:     null;
    user_residencia_postulacion: null;
    user_residencia_evaluacion:  null;
    user_residencia_reporte:     null;
    user_cupo:                   null;
    user_tipo:                   string[];
}

export interface UserDepartamento {
    Departamento_Id:     DepartamentoID;
    Departamento_Nombre: string;
}

export interface DepartamentoID {
    $oid: string;
}
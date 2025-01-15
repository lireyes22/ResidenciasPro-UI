import type { Empresa } from "./Empresas";
import type { EmpresasFBP, ProfesorFBP, CarreraFBP, CuposFBP, ProfesorRevisorFBP, DepartamentoFBP, FormatValuesFBP } from "./FormatBancoProyecto";

export interface ProyectoBancoCompleto {
    Proyecto:               Proyecto;
    Profesor_Responsable:   ProfesorFBP;
    Profesor_Asesor:        ProfesorFBP;
    Profesor_Revisor:       ProfesorRevisorFBP;
    Carreras:               CarreraFBP[];
    Departamento:           DepartamentoFBP;
    Empresa:                EmpresasFBP;
    Cupos:                  CuposFBP;
    FormatValues?:          FormatValuesFBP;
}
export interface Proyecto {
    Proyecto_Id:                    string;
    Proyecto_Nombre:                string;
    Proyecto_Tipo:                  string;
    Proyecto_TipoOptativa:          string;
    Proyecto_TipoOpcion:            string;
    Proyecto_Lugar:                 string;
    Proyecto_Investigacion:         boolean;
    Proyecto_Descripcion:           string;
    Proyecto_EstudiantesRequeridos: number;
    Proyecto_EstudiantesInscritos:  number;
    Proyecto_Periodo:               string;
    Proyecto_Objetivo:              string;
    Proyecto_Estatus:               string;
    Proyecto_Impacto:               string;
    Proyecto_Referencias:           string;
    Proyecto_FechaRegistro:         string;
    Proyecto_LineaInvestigacion:    string;
    Proyecto_TiempoEstimado:        number;
    Proyecto_Observaciones:         ProyectoObservaciones;
}


export interface ProyectoCompleto {
    Proyecto:               Proyecto;
    Empresa:                EmpresaProyecto;
    Profesor_Responsable:   ProfesorProyecto;
    Carreras:               CarreraProyecto[];
    Profesor_Asesor:        ProfesorProyecto;
    Departamento:           DepartamentoProyecto;
    Included?:              ProyectoIncluded;
    FormatValues?:          FormatValuesProyecto;
}

export interface ProyectoIncluded{
    Empresa?:           Empresa;
}

export interface ProyectoObservaciones {
    ProyectoNombre:             string;
    ProyectoDescripcion:        string;
    ProyectoObjetivo:           string;
    ProyectoImpacto:            string;
    ProyectoLineaInvBene:       string;
    ProyectoReferencia:         string;
    ProyectoNumeroResidentes:   string;
    ProyectoTipo:               string;
    ProyectoTiempoE:            string;
    ProyectoCarreraRequerida:   string;
    ProyectoDocenteResponsable: string;
    ProyectoLineaInv:           string;
    ProyectoGenerales:          string;
}

export interface EmpresaProyecto  {
    Empresa_Id: string;
    Empresa_Nombre: string;
}

export interface ProfesorProyecto  {
    Profesor_Id: string;
    Profesor_Nombre: string;
    Profesor_ApellidoUno: string;
    Profesor_ApellidoDos: string;
}

export interface CarreraProyecto  {
    Carrera_Id: string;
    Carrera_Nombre: string;
}

export interface DepartamentoProyecto  {
    Departamento_Id: string;
    Departamento_Nombre: string;
}

export interface ProyectoTemplate {
    Proyecto_Nombre: string;
    Proyecto_Tipo: string;
    Proyecto_TipoOptativa: string,
    Proyecto_TipoOpcion: string,
    Proyecto_Descripcion: string;
    Proyecto_Objetivo: string;
    Proyecto_Impacto: string;
    Proyecto_Referencias: string;
    Profesor_Responsable: string;
    Empresa: string;
    Proyecto_LineaInvestigacion: string;
    Proyecto_Lugar: string;
    Proyecto_TiempoEstimado: number;
    Proyecto_EstudiantesRequeridos: number;
    Proyecto_Carreras: String[];
    Departamento: string;
    Profesor_Asesor: string;
    Proyecto_Investigacion: boolean;
    Proyecto_Estatus: string;
}

export interface FormatValuesProyecto {
    ProfesorResponsable?:       string;
    CarrerasNombres?:           string;
    ProfesorAsesor?:            string;
    EmpresaTitular?:            string;
}
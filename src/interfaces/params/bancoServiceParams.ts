/**
 * @interface BancoServiceParams
 * Esta interfaz se utiliza para definir los parámetros del banco de proyectos en los query params.
 */
/**
 * Interfaz que define los parámetros para el servicio de Banco.
 * 
 * @interface BancoServiceParams
 * 
 * @property {string} [filter[Proyecto_Estatus]] - Filtro para el estatus del proyecto.
 * @property {string} [filter[Profesor_Revisor.Profesor]] - Filtro para el profesor revisor.
 * @property {string} [filter[Profesor_Responsable]] - Filtro para el profesor responsable.
 * @property {string} [filter[Profesor_Asesor]] - Filtro para el profesor asesor.
 * @property {string} [filter[Departamento]] - Filtro para el departamento.
 * @property {string} [filter[Proyecto_Carreras]] - Filtro para las carreras del proyecto.
 * @property {string} [filter[Solicitudes_Cupos.Alumno]] - Filtro para el alumno en las solicitudes de cupos.
 * @property {string} [filter[Solicitudes_Cupos.Cupo_Estatus]] - Filtro para el estatus del cupo en las solicitudes.
 * @property {"-" | ""} [sort] - Parámetro para ordenar los resultados.
 */
export interface BancoServiceParams {
    "filter[Proyecto_Estatus]"?:                string;
    "filter[Profesor_Revisor.Profesor]"?:       string;
    "filter[Profesor_Responsable]"?:            string;
    "filter[Profesor_Asesor]"?:                 string;
    "filter[Departamento]"?:                    string;
    "filter[Proyecto_Carreras]"?:               string;
    "filter[Solicitudes_Cupos.Alumno]"?:        string;
    "filter[Solicitudes_Cupos.Cupo_Estatus]"?:  string;
    "sort"?:                                    "-" | "";
}
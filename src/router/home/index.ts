import { adminUsuarios } from './routes-admin';
import { alumnosEstatus } from './routes-alumnos';
import { bancoProyectos, bancoPropuestas, bancoResidencias, bancoAsignarRevisores, bancoAsignarAsesores, bancoJefeDepartamento, bancoType } from './routes-banco';
import { cuposEstatus } from './routes-cupos'
import { tracking, pruebas, faq } from './routes-n';
import { proyectoProponer, proyectoActualizar, proyectoDetalles, proyectoEvaluar, proyectoAsignarAsesor } from './routes-proyecto';
import { residenciasEvaluacion, residenciasSolicitudes, residenciasDictamenes, residenciaDetalles, residenciaSolicitud, residenciaEvaluacionSeguimiento, residencias } from './routes-residencias';


import type { RouteRecordRaw } from "vue-router";

export const routesAdmin: RouteRecordRaw[] = [
    adminUsuarios
];

export const routesAlumnos: RouteRecordRaw[] = [
    alumnosEstatus
];

export const routesBanco: RouteRecordRaw[] = [
    bancoProyectos,
    bancoPropuestas,
    bancoResidencias,
    bancoJefeDepartamento,
    bancoAsignarRevisores,
    bancoAsignarAsesores,
    bancoType//Siempre va al final
];

export const routesCupo: RouteRecordRaw[] = [
    cuposEstatus
];

export const routesN: RouteRecordRaw[] = [
    tracking,
    pruebas,
    faq
];

export const routesProyecto: RouteRecordRaw[] = [
    proyectoProponer,
    proyectoActualizar,
    proyectoDetalles,
    proyectoEvaluar,
    proyectoAsignarAsesor,
];

export const routesResidencia: RouteRecordRaw[] = [
    residenciasEvaluacion,
    residenciasSolicitudes,
    residenciasDictamenes,
    residenciaDetalles,
    residenciaSolicitud,
    residenciaEvaluacionSeguimiento,
    residencias//Siempre va al final
];

export const routes: RouteRecordRaw[] = [
    ...routesAdmin,
    ...routesAlumnos,
    ...routesBanco,
    ...routesCupo,
    ...routesN,
    ...routesProyecto,
    ...routesResidencia,
];

export { adminUsuarios } from './routes-admin';
export { alumnosEstatus } from './routes-alumnos';
export { bancoProyectos, bancoPropuestas, bancoResidencias, bancoAsignarRevisores, bancoAsignarAsesores, bancoJefeDepartamento, bancoType } from './routes-banco';
export { cuposEstatus } from './routes-cupos'
export { tracking, pruebas, faq } from './routes-n';
export { proyectoProponer, proyectoActualizar, proyectoDetalles, proyectoEvaluar, proyectoAsignarAsesor } from './routes-proyecto';
export { residenciasEvaluacion, residenciasSolicitudes, residenciasDictamenes, residenciaDetalles, residenciaSolicitud, residenciaEvaluacionSeguimiento, residencias } from './routes-residencias';

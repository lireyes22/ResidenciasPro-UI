/* import {
    tracking, pruebas, proyectoProponer, proyectoActualizar, proyectoDetalles, proyectoEvaluar,
    bancoProyectos, bancoPropuestas, bancoResidencias, bancoType,
    residenciasEvaluacion, residenciasSolicitudes,
    residenciaDetalles, cuposEstatus
} from './index'
import type { RouteRecordRaw } from "vue-router";



export const routesBanco: RouteRecordRaw[] = [
    bancoProyectos,
    bancoPropuestas,
    bancoResidencias,
    bancoType
];

export const routesCupo: RouteRecordRaw[] = [
    cuposEstatus
]

export const routesResidencia: RouteRecordRaw[] = [
    residenciasEvaluacion,
    residenciasSolicitudes,
    residenciaDetalles
];


export const routesProyecto: RouteRecordRaw[] = [
    proyectoProponer, 
    proyectoActualizar, 
    proyectoDetalles,
    proyectoEvaluar
];

export const routesN: RouteRecordRaw[] =[
    tracking,
    pruebas,
]

export const routes: RouteRecordRaw[] = [
    ...routesN,
    ...routesCupo,
    ...routesProyecto,
    ...routesResidencia,
    ...routesBanco
];

 */
import type { RouterLink } from "@/interfaces";

import { tracking, pruebas,
    bancoProyectos, bancoPropuestas, bancoResidencias, 
    bancoAsignarRevisores, bancoAsignarAsesores, bancoJefeDepartamento,
    proyectoProponer, adminUsuarios, alumnosEstatus, bancoType, faq,
    residenciasEvaluacion, residenciasSolicitudes, residenciasDictamenes
} from "@/router/home/index";

export const routesPruebas: RouterLink[] = [
    pruebas
];

export const routesProfesor: RouterLink[] = [
    faq,
    tracking,
    bancoProyectos,
    bancoPropuestas,
    proyectoProponer,
];

export const routesAsesorInterno: RouterLink[] = [
    residenciasEvaluacion,
    bancoResidencias,
    residenciasSolicitudes
]

export const routesJefeDepartamento: RouterLink[] = [
    bancoAsignarRevisores,
    bancoAsignarAsesores,
    bancoJefeDepartamento
]

export const routesCoordinador: RouterLink[] = [
    residenciasDictamenes,
    alumnosEstatus
]

export const routesAdmin: RouterLink[] = [
    adminUsuarios,
    bancoType,
]

export const routesSidebar = [
    {section: 'Pruebas', routes: routesPruebas, active: true, role: 'Profesor'},
    {section: 'Profesor', routes: routesProfesor, active: true, role: 'Administrador'},
    {section: 'Asesor Interno', routes: routesAsesorInterno, active: true, role: 'Asesor Interno'},
    {section: 'Jefe de Departamento', routes: routesJefeDepartamento, active: true, role: 'Jefe de Departamento'},
    {section: 'Coordinador', routes: routesCoordinador, active: true, role: 'Coordinador'},
    {section: 'Admin', routes: routesAdmin, active: true, role: 'Administrador'},
];

export const routesAllSidebar = [
    ...routesPruebas,
    ...routesProfesor,
    ...routesAsesorInterno,
    ...routesJefeDepartamento,
    ...routesCoordinador,
    ...routesAdmin    
]
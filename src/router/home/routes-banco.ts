import type { RouterLink } from "@/interfaces";
import BancoProyectos from '@/pages/BancoProyectos.vue';


export const bancoProyectos:RouterLink = {
    path: 'banco/proyectos',
    name: 'banco-proyectos',
    icon: 'pi-shopping-bag',
    component: BancoProyectos,
    title: 'Banco de Proyectos Profesor',
    visible: true,
    props: { from: 'banco-proyectos', type: 'proyectos' },
};

export const bancoPropuestas:RouterLink = {
    path: 'banco/propuestas',
    name: 'banco-propuestas',
    component: BancoProyectos,
    props: { from: 'banco-propuestas', type: 'propuestas' },
    icon: 'pi-eye', 
    title: 'Revisión de Propuestas', 
    visible: true,
}

export const bancoResidencias:RouterLink = {
    path: 'banco/residencias', 
    name: 'banco-residencias', 
    component: BancoProyectos,
    props: { from: 'banco-residencias', type: 'residencias' },
    icon: 'pi-graduation-cap', 
    title: 'Mis Residencias', 
    visible: true,
}

export const bancoJefeDepartamento:RouterLink = {
    path: 'banco/jefe-departamento', 
    name: 'banco-jefe-departamento', 
    component: BancoProyectos,
    props: { from: 'banco-jd', type: 'jefe-departamento' },
    icon: 'pi-graduation-cap', 
    title: 'Proyectos', 
    visible: true,
}
export const bancoAsignarRevisores:RouterLink = {
    path: 'banco/asignar/revisores', 
    name: 'banco-asignar-revisores', 
    component: BancoProyectos,
    props: { from: 'banco-asignar-revisores', type: 'asignar-revisores' },
    icon: 'pi-user-minus', 
    title: 'Asignación de Revisores', 
    visible: true,
}

export const bancoAsignarAsesores:RouterLink = {
    path: 'banco/asignar/asesores', 
    name: 'banco-asignar-asesores', 
    component: BancoProyectos,
    props: { from: 'banco-asignar-asesores', type: 'asignar-asesores' },
    icon: 'pi-user', 
    title: 'Asignación de Asesores', 
    visible: true,
}

export const bancoType:RouterLink = {
    path: 'banco/:type?', 
    name: 'banco-type', 
    component: BancoProyectos,
    props: (route: { params: { type?: string } }) => ({
        from: 'banco-estatus',
        type: route.params.type || 'banco',
    }),
    icon: 'pi-database', 
    title: 'Proyectos', 
    visible: true,
}
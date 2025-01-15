import type { RouterLink } from "@/interfaces";
import AlumnosEstatus from "@/pages/AlumnosEstatus.vue";


export const alumnosEstatus:RouterLink = {
    path: 'alumnos/estatus',
    name: 'admin-estatus',
    icon: 'pi-shopping-bag',
    component: AlumnosEstatus,
    title: 'Alumnos',
    visible: true,
};

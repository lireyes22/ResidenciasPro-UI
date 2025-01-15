import type { RouterLink } from "@/interfaces";
import Cupos from '@/pages/Cupos.vue';


export const cuposEstatus:RouterLink = {
    path: 'cupos-estatus/:proyectoid/:estatus(pendiente|aceptado|rechazado)?',
    name: 'cupos-estatus',
    icon: 'pi-shopping-bag',
    component: Cupos,
    title: 'Solicitudes de cupos',
    visible: true,
    props: (route: { params: { proyectoid: string; estatus?: string }; }) => ({
        proyectoId: route.params.proyectoid, 
        cupoEstatus: route.params.estatus ? route.params.estatus.toUpperCase() : undefined,
        from: 'cupos-estatus'
    }),
};
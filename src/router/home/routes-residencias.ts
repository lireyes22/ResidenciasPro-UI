import type { RouteRecordRaw } from "vue-router";
import BancoResidencias from '@/pages/Residencias.vue';
import type { RouterLink } from "@/interfaces";
import DetallesProyecto from "@/pages/DetallesProyecto.vue";
import SolicitudResidencia from "@/pages/SolicitudResidencia.vue";
import EvaluacionSeguimiento from "@/pages/EvaluacionSeguimiento.vue";

export const residenciasEvaluacion: RouterLink = {
    path: 'residencias/evaluacion',
    name: 'residencias-evaluacion',
    component: BancoResidencias,
    icon: 'pi-file-edit',
    title: 'Evaluación de Residencias',
    visible: true,
    props: { from: 'residencias-evaluacion', type: 'evaluacion' },
};

export const residenciasSolicitudes: RouterLink = {
    path: 'residencias/solicitudes',
    name: 'residencias-solicitudes',
    icon: 'pi-book',
    title: 'Evaluaciones de Residencias',
    component: BancoResidencias,
    visible: true,
    props: { from: 'residencias-solicitudes', type: 'solicitudes' },
}

export const residenciasDictamenes: RouterLink = {
    path: 'residencias/dictamenes',
    name: 'residencias-dictamenes',
    icon: 'pi-book',
    title: 'Dictamenes de Residencia',
    component: BancoResidencias,
    visible: true,
    props: { from: 'residencias-dictamenes', type: 'dictamenes' },
}

export const residenciaDetalles: RouterLink = {
    path: 'residencia/detalles/:proyectoid',
    name: 'residencia-detalles',
    component: DetallesProyecto,
    icon: 'pi-file-plus',
    title: 'Detalles de Residencia',
    visible: true,
    props: (route: { params: { proyectoid: any; } }) => ({
        id: route.params.proyectoid,
        from: 'residencia-detalles'
    }),
};

export const residenciaSolicitud: RouterLink = {
    path: 'residencia/solicitud/:id',
    name: 'residencia-solicitud',
    component: SolicitudResidencia,
    icon: 'pi-file-plus',
    title: 'Solicitud de Residencia',
    visible: true,
    props: (route: { params: { id: any; } }) => ({
        id: route.params.id,
        from: 'residencia-solicitud'
    }),
};

export const residenciaEvaluacionSeguimiento: RouterLink = {
    path: 'residencia/evaluacion-seguimiento/:id/:type',
    name: 'residencia-evaluacion-seguimiento',
    component: EvaluacionSeguimiento,
    icon: 'pi-file-plus',
    title: 'Solicitud de Residencia',
    visible: true,
    props: (route: { params: { id: any; type:any } }) => ({
        id: route.params.id,
        type: route.params.type,
        from: 'residencia-evaluacion-seguimiento'
    }),
};

export const residencias: RouterLink = {
    path: 'residencias/:type?',
    name: 'residencias-type',
    icon: 'pi-book',
    title: 'Solicitudes de Residencia',
    component: BancoResidencias,
    visible: true,
    props: (route: { params: { type?: string } }) => ({
        from: 'residencias-type', 
        type: route.params.type || 'residencias'
    }),
}

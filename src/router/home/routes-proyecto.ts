import ProponerProyecto from "@/pages/ProponerProyecto.vue";
import type { RouterLink } from "@/interfaces";
import ActualizarProyecto from "@/pages/ActualizarProyecto.vue";
import DetallesProyecto from "@/pages/DetallesProyecto.vue";
import AsignarAsesor from "@/pages/AsignarAsesor.vue";

export const proyectoProponer:RouterLink = {
    path: 'proyecto/proponer',
    name: 'proyecto-proponer',
    component: ProponerProyecto,
    icon: 'pi-file-plus',
    title: 'Proponer Proyecto',
    visible: true
};


export const proyectoActualizar:RouterLink = {
    path: 'proyecto/actualizar/:id',
    name: 'proyecto-actualizar',
    component: ActualizarProyecto,
    icon: 'pi-file-plus',
    title: 'Actualizar Proyecto',
    visible: true,
    props: true
};

export const proyectoDetalles:RouterLink = {
    path: 'proyecto/detalles/:id',
    name: 'proyecto-detalles',
    component: DetallesProyecto,
    icon: 'pi-file-plus',
    title: 'Detalles de Proyecto',
    visible: true,
    props: (route: { params: { id: any; }; }) => ({
        id: route.params.id, 
        from: 'proyecto-detalles'
    }),
};

export const proyectoEvaluar:RouterLink = {
    path: 'proyecto/evaluar/:id',
    name: 'proyecto-evaluar',
    component: DetallesProyecto,
    icon: 'pi-file-plus',
    title: 'Evaluación de Proyecto',
    visible: true,
    props: (route: { params: { id: any; }; }) => ({
        id: route.params.id, 
        from: 'proyecto-evaluar'
    }),
};

export const proyectoAsignarAsesor:RouterLink = {
    path: 'proyecto/asignar-asesor/:id',
    name: 'proyecto-asignar-asesor',
    component: AsignarAsesor,
    icon: 'pi-file-plus',
    title: 'Evaluación de Proyecto',
    visible: true,
    props: (route: { params: { id: any; }; }) => ({
        id: route.params.id, 
        from: 'proyecto-asignar-asesor'
    }),
};

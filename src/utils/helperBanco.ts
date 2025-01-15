import type { DataTableFilterMeta } from 'primevue/datatable';
import { ref, watch } from 'vue';
import type { RouterLink } from '@/interfaces';
import {
    proyectoDetalles, proyectoEvaluar, proyectoAsignarAsesor,
    residenciaDetalles, cuposEstatus, tracking
} from '@/router/home/';
import { useRouter } from 'vue-router';
import { useNavStore } from '@/stores/navStore';

export default function helperBanco(type: string = '') {

    const items = ref(0);

    const onTableFilter = (event: any) => {
        items.value = event.filteredValue ? event.filteredValue.length : 0;
    }

    const router = useRouter();
    type CustomFilters = DataTableFilterMeta & {
        [key: string]: { value: string | null; matchMode: string }
    };
    //Filter
    const selectedFilter = ref({ value: 'global', label: 'Todos', visible: true });
    const columnFilterValue = ref('');
    const filters = ref<CustomFilters>({
        global: { value: '', matchMode: 'contains' }
    });

    watch(selectedFilter, () => {
        console.log(selectedFilter.value);
    });

    const optiones = [
        {
            label: 'Proyectos',
            code: 'Proyecto',
            visible: true,
            items: [
                { value: 'global', label: 'Todos', visible: true },
                { value: 'Proyecto.Proyecto_Nombre', label: 'Nombre del Proyecto', visible: true },
                { value: 'Profesor_Asesor.Profesor_Nombre', label: 'Asesor', visible: true },
                { value: 'FormatValues.Carreras_Nombres', label: 'Carreras', visible: true }
            ]
        },
        {
            label: 'Tipo de Proyecto',
            code: 'Tipo_Proyecto',
            visible: isActive('Proyecto_Tipo'),
            items: [
                { value: 'Interno', label: 'Interno', visible: isActive('Proyecto_Tipo') },
                { value: 'Externo', label: 'Externo', visible: isActive('Proyecto_Tipo') }
            ]
        }
    ];

    const filterOptions = optiones
        .filter((option) => option.visible)
        .map((option) => ({
            ...option,
            items: option.items.filter((item) => item.visible)
        }));



    function aplicarFiltro() {

        if (selectedFilter.value.value === 'global') {
            filters.value = {
                global: { value: columnFilterValue.value, matchMode: 'contains' }
            };
        } else if (selectedFilter.value.value === 'Pendiente' || selectedFilter.value.value === 'Asignado' || selectedFilter.value.value === 'Aceptado' || selectedFilter.value.value === 'En Curso') {
            // Filtra la columna Proyecto_Tipo para los valores 'Interno' o 'Externo'
            filters.value = {
                'Proyecto.Proyecto_Estatus': { value: selectedFilter.value.value, matchMode: 'contains' }
            };
        } else if (selectedFilter.value.value === 'Interno' || selectedFilter.value.value === 'Externo') {
            // Filtra la columna Proyecto_Tipo para los valores 'Interno' o 'Externo'
            filters.value = {
                'Proyecto.Proyecto_Tipo': { value: selectedFilter.value.value, matchMode: 'contains' }
            };
        } else {
            filters.value = {
                global: { value: '', matchMode: 'contains' }, // Reseteamos el filtro global
                [selectedFilter.value.value]: { value: columnFilterValue.value, matchMode: 'contains' }
            };
        }
    };

    function goDetalles(proyectoid: string) {
        switch (type) {
            /* case 'proyectos':
            case 'asignar-revisores':
            case 'asignar-asesores':
            case 'banco':
            case 'jefe-departamento':
                break; */
            case 'propuestas':
                goTo(proyectoEvaluar, { id: proyectoid });
                break;
            case 'residencias':
                goTo(residenciaDetalles, { proyectoid: proyectoid });
                break;
            case 'tracking':
                goTo(tracking);
            default:
                goTo(proyectoDetalles, { id: proyectoid });
                break;
        }
    }

    function goCuposEstatus(params: any) {
        goTo(cuposEstatus, params);
    }

    function goAsignarAsesor(id: string) {
        goTo(proyectoAsignarAsesor, { id: id });
    }

    function goTo(route: RouterLink, params?: any) {
        useNavStore().changeRoute(route);
        router.push({ name: route.name, params: params });
    }
    function activeColumns() {
        const columnMappings = {
            'proyectos': ['Proyecto_EstudiantesRequeridosInscritos', 'Empresa_Nombre', 'Carreras_Nombres', 'Detalles_Proyecto', 'Proyecto_Tipo'],
            'propuestas': ['Proyecto_EstudiantesRequeridosInscritos', 'Proyecto_Tipo', 'Profesor_Asesor', 'Evaluar_Proyecto'],
            'residencias': ['Proyecto_EstudiantesRequeridosInscritos', 'Proyecto_Tipo', 'Solicitudes_Postulacion', 'Estudiantes_Inscritos', 'Detalles_Proyecto'],
            'asignar-asesores': ['Profesor_Responsable', 'Profesor_Asesor', 'Asignar_Asesor', 'Detalles_Proyecto'],
            'asignar-revisores': ['Profesor_Responsable', 'Profesor_Asesor', 'Profesor_Revisor', 'Asignar_Revisor', 'Detalles_Proyecto'],
            'jefe-departamento': ['Proyecto_EstudiantesRequeridosInscritos', 'Proyecto_Tipo', 'Profesor_Asesor', 'Profesor_Responsable', 'Profesor_Revisor','Carreras_Nombres','Empresa_Nombre','Detalles_Proyecto'],
        };
        return columnMappings[type as keyof typeof columnMappings] || [];
    }
    //['proyectos', 'propuestas', 'residencias', 'asignar-revisores', 'asignar-asesores']
    function isActive(column: string) {
        if(type === 'banco') return true;
        return activeColumns().includes(column);
    }


    return {
        selectedFilter,
        columnFilterValue,
        filters,
        filterOptions,
        items,
        onTableFilter,
        aplicarFiltro,
        goDetalles,
        goCuposEstatus,
        goAsignarAsesor,
        isActive,
    };

}
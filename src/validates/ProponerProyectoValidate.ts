import type { ProyectoTemplate } from '@/interfaces/Proyectos';

export default function ProponerProyectoValidate(proyectoPropuesta: ProyectoTemplate) {
    if (proyectoPropuesta.Proyecto_Nombre === '') {
        throw new Error('El nombre del proyecto es requerido');
    }
    if (proyectoPropuesta.Proyecto_Tipo === '') {
        throw new Error('El tipo de proyecto es requerido');
    }
    if (proyectoPropuesta.Proyecto_TipoOptativa === '') {
        throw new Error('El tipo de optativa del proyecto es requerido');
    }
    if (proyectoPropuesta.Proyecto_TipoOpcion === '') {
        throw new Error('El tipo de opción del proyecto es requerido');
    }
    if (proyectoPropuesta.Proyecto_Descripcion === '') {
        throw new Error('La descripción del proyecto es requerida');
    }
    if (proyectoPropuesta.Proyecto_Objetivo === '') {
        throw new Error('El objetivo del proyecto es requerido');
    }
    if (proyectoPropuesta.Proyecto_Impacto === '') {
        throw new Error('El impacto del proyecto es requerido');
    }
    if (proyectoPropuesta.Proyecto_Referencias === '') {
        throw new Error('Las referencias del proyecto son requeridas');
    }
    if (proyectoPropuesta.Profesor_Responsable === '') {
        throw new Error('El profesor responsable del proyecto es requerido');
    }
    if (proyectoPropuesta.Empresa === '') {
        throw new Error('La empresa del proyecto es requerida');
    }
    if (proyectoPropuesta.Proyecto_Lugar === '') {
        throw new Error('El lugar del proyecto es requerido');
    }
    if (proyectoPropuesta.Proyecto_LineaInvestigacion === '') {
        throw new Error('La línea de investigación del proyecto es requerida');
    }
    if (proyectoPropuesta.Proyecto_TiempoEstimado <= 0) {
        throw new Error('El tiempo estimado del proyecto debe ser mayor a 0');
    }
    if (proyectoPropuesta.Proyecto_EstudiantesRequeridos <= 0) {
        throw new Error('El número de estudiantes requeridos debe ser mayor a 0');
    }
    if (proyectoPropuesta.Proyecto_Carreras.length === 0) {
        throw new Error('Las carreras del proyecto son requeridas');
    }
    if (proyectoPropuesta.Departamento === '') {
        throw new Error('El departamento del proyecto es requerido');
    }
    if (proyectoPropuesta.Profesor_Asesor === '') {
        throw new Error('El profesor asesor del proyecto es requerido');
    }
    if (typeof proyectoPropuesta.Proyecto_Investigacion !== 'boolean') {
        throw new Error('El campo de investigación del proyecto debe ser booleano');
    }
}
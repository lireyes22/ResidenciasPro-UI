
export default function AsignarRevisorValidate(params:{proyectoId: string, profesorId: string, fechaMaxima: string, profesorResponsableId?: string}){
    if(!params.proyectoId || params.proyectoId === ''){
        throw new Error('El proyecto es requerido');
    }
    if(!params.profesorId || params.profesorId === ''){
        throw new Error('El profesor es requerido');
    }
    if(!params.fechaMaxima || params.fechaMaxima === ''){
        throw new Error('La fecha máxima es requerida');
    }
    if(params.profesorResponsableId === params.profesorId){
        throw new Error('El profesor revisor es no puede ser el mismo que el responsable');
    }
    
}
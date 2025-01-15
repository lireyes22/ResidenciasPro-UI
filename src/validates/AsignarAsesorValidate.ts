import type { AsesorServicePOST, validatePOST } from "@/interfaces/params/asesorServiceParams";

export function AsignarAsesorValidate(params: {body: AsesorServicePOST, validate?:validatePOST}){
    if(params.body.profesor === params.validate?.profesorAsesorActual){
        throw new Error('El nuevo asesor no puede ser igual al actual');
    }
    if(params.body.proyecto === ''){
        throw new Error('El proyecto no puede estar vacio');
    }
    if(params.body.profesor === ''){
        throw new Error('Debes seleccionar un profesor');
    }
    if(params.body.asignacionAsesorMotivo === ''){
        throw new Error('El motivo no puede estar vacio');
    }
    if(params.body.asignacionAsesorNoOficio === ''){
        throw new Error('El No. de Oficio no puede estar vacio');
    }
}
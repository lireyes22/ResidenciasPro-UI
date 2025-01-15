import axios, { AxiosError } from "axios";
import getToken from '@/utils/getToken';
import AsignarRevisorValidate from "@/validates/AsignarRevisorValidate";
import handleAxiosError from "@/utils/handleAxiosError";
import { revisionResource } from "@/resources/RevisionesResource";

const revisionesApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'revisiones',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Provider': 'Firebase'
    },
});

/**
 * Evalua un proyecto.
 *
 * @param params - Objeto que contiene el ID de la residencia a obtener.
- \@param **string** proyectoId - ID del proyecto.
- \@param **Boolean** AsignacionPropuestas_Estatus - Estatus de la propuesta.
- \@param **string** AsignacionPropuestas_Observaciones - Observaciones de la propuesta.
 * @returns **Promise\<any>**.
 * @throws **Error** Lanza un error si la petición falla.
 */
export async function evaluarProyecto(params:{proyectoId: string, AsignacionPropuestas_Estatus: boolean, AsignacionPropuestas_Observaciones: string}) {

    const body = {
        Observaciones: params.AsignacionPropuestas_Observaciones,
    };
    const descision = params.AsignacionPropuestas_Estatus ? 'aceptar' : 'rechazar';
    try {
        const token = await getToken();
        revisionesApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        const respuesta = await revisionesApi.put(`${params.proyectoId}/${descision}`, body);
        return respuesta.data;
    } catch (error: any) {
        handleAxiosError(error);
    }
};

/**
 * Asigna un revisor a un proyecto.
 *
 * @param params - Objeto que contiene el ID de la residencia a obtener.
- \@param **string** proyectoId - ID del proyecto.
- \@param **string** profesorId - ID del profesor asignado.
- \@param **string** fechaMaxima - Fecha maxima de revisión.
- \@param **string** profesorResponsableId (Opcional) - Profesor responsable en caso de querer validar que el revisor sea el profesor responsable.
 * @returns **Promise\<[RevisionData](../interfaces/Revisiones.ts)>**.
 * @throws **Error** Lanza un error si la petición falla.
 */
export async function assignRevisor(params:{proyectoId: string, profesorId: string, fechaMaxima: string, profesorResponsableId?: string}) {
    try {
        AsignarRevisorValidate(params);
        const body = {
            Profesor: params.profesorId,
            Proyecto: params.proyectoId,
            AsignacionPropuestas_FechaLimite: params.fechaMaxima,
        };
        const token = await getToken();
        revisionesApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        const respuesta = await revisionesApi.patch('/asignar', body);
        return revisionResource(respuesta.data.data);
    } catch (error: any) {
        handleAxiosError(error);
    }
};
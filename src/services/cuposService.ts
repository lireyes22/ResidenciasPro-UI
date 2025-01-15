import type { CupoData } from '@/interfaces/Cupos';
import type { cuposServiceParams } from '@/interfaces/params/cuposServiceParams';
import { cupoResource, cuposCollection } from '@/resources/CuposResource';
import getToken from '@/utils/getToken';
import handleAxiosError from '@/utils/handleAxiosError';
import axios from 'axios';


const cuposApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'cupos',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Provider': 'Firebase'
    },
});

/**
 * Obtiene los cupos según los parámetros proporcionados.
 * @param params - Objeto para parametros del metodo. 
- \@param params.params - Filtros query params. 
 * @returns **Promise<[CupoData](../interfaces/Cupos.ts)[]>** - Promesa que resuelve con un arreglo de datos de cupos.
 * @throws **Error** - Lanza un error si ocurre algún problema durante la solicitud.
 */
export async function getCupos (params: {params:cuposServiceParams}): Promise<CupoData[]>{
    try {
        const token = await getToken();
        cuposApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        cuposApi.defaults.params = params.params;
        const respuesta = await cuposApi.get('');
        return cuposCollection(respuesta.data.data);
    } catch (error: any) {
        handleAxiosError(error);
    }
}

/**
 * Actualiza el estado de un cupo.
 *
 * @param params - Objeto para parametros del metodo. Parametros requeridos:
- \@param **string** ``cupoId`` - Identificador del cupo a actualizar.
- \@param **boolean** ``cupoEstatus`` - Nuevo estado del cupo (true para activo, false para inactivo).
 * @returns **Promise<[CupoData](../interfaces/Cupos.ts)[]>** - Una promesa que resuelve con los datos del recurso del cupo actualizado.
 * @throws **Error** - Lanza un error si la actualización falla.
 */
export async function updateCupoEstatus (params: {cupoId:string, cupoEstatus:boolean}) {
    try {
        const token = await getToken();
        cuposApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        cuposApi.defaults.params = {};
        const respuesta = await cuposApi.patch(params.cupoId, { Cupo_Estatus: params.cupoEstatus });
        return cupoResource(respuesta.data.data);
    } catch (error: any) {
        handleAxiosError(error);
    }
};

/**
 * Anula un cupo específico.
 *
 * @param params - Objeto para parametros del metodo. Parametros requeridos:
- \@param **string** ``cupoId`` - El ID del cupo a anular.
 * @returns **Promise<{message: string, cupoId: string}>** Un objeto que contiene un mensaje de confirmación y el ID del cupo anulado.
 * @throws **Error** Si ocurre un error al anular el cupo.
 */
export async function anularCupo (params: {cupoId:string}) {
    try {
        const token = await getToken();
        cuposApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        cuposApi.defaults.params = {};
        const respuesta = await cuposApi.delete(`anular/${params.cupoId}`);
        const data = {
            message: respuesta.data.data as string,
            cupoId: params.cupoId
        };
        return data;
    } catch (error: any) {
        handleAxiosError(error);
    }
};
import axios, { AxiosError } from "axios";
import getToken from '@/utils/getToken';
import type { ResidenciasServiceParams } from "@/interfaces/params/residenciasServiceParams";
import { residenciaResource, residenciasCollection } from "@/resources/ResidenciasResource";
import handleAxiosError from "@/utils/handleAxiosError";


const residenciasApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'residencias',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Provider': 'Firebase'
    },
});

/**
 * Obtiene las residencias basadas en los parámetros proporcionados.
 *
 * @param **ResidenciasServiceParams** ``params`` - Los parámetros para filtrar las residencias.
 * @returns **Promise<[ResidenciaData](../interfaces/Residencias.ts)[]>** - Una promesa que resuelve con los datos de las residencias.
 * @throws **Error** - Lanza un error si la petición falla.
 */
export async function getResidencias(params: ResidenciasServiceParams) {
    try {
        //Obtenemos el token
        const token = await getToken();
        residenciasApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        residenciasApi.defaults.params = params;
        //Hacemos la petición
        const response = await residenciasApi.get('');
        return residenciasCollection(response.data.data);
    } catch (error: any) {
        handleAxiosError(error);
    }
};

/**
 * Obtiene la información de una residencia específica.
 *
 * @param params - Objeto que contiene el ID de la residencia a obtener.
- \@param **string** id - ID de la residencia.
 * @returns **Promise<[ResidenciaData](../interfaces/Residencias.ts)>** La información de la residencia en formato `residenciaResource`.
 * @throws Lanza un error si la petición falla.
 */
export async function getResidencia(params: {id: string}) {
    try {
        //Obtenemos el token
        const token = await getToken();
        residenciasApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        residenciasApi.defaults.params = {};
        //Hacemos la petición
        const response = await residenciasApi.get(params.id);
        return residenciaResource(response.data.data);
    } catch (error: any) {
        handleAxiosError(error);
    }
};

/**
 * Obtiene la información de una residencia específica.
 *
 * @param params - Objeto que contiene el ID de la residencia a obtener.
- \@param **string** residenciaId - ID de la residencia.
- \@param **string** residenciaEstatus - Estatus de la residencia.
- \@param **string** residenciaObservaciones - Observaciones de la residencia.
 * @returns **Promise<[ResidenciaData](../interfaces/Residencias.ts)>** La información de la residencia en formato `residenciaResource`.
 * @throws Lanza un error si la petición falla.
 */
export async function evaluateResidencia(params: {residenciaId: string, residenciaEstatus: string, residenciaObservaciones: string}) {
    //residencias/661813370a17f246020f715a/aceptar
    try {
        const bodyParams = {
            SolicitudResidencia_Observaciones: params.residenciaObservaciones
        }
        //Obtenemos el token
        const token = await getToken();
        residenciasApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        residenciasApi.defaults.params = {};
        const response = await residenciasApi.put(`${params.residenciaId}/${params.residenciaEstatus}`, bodyParams);
        return residenciaResource(response.data.data);
    } catch (error: any) {
        handleAxiosError(error);
    }
};
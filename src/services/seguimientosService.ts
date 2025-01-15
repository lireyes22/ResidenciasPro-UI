import axios, { AxiosError } from "axios";
import getToken from '@/utils/getToken';
import handleAxiosError from "@/utils/handleAxiosError";
import type { Seguimiento } from "@/interfaces/Seguimientos";
import { seguimientoResource } from "@/resources/SeguimientoResource";

const seguimientosApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'seguimientos',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Provider': 'Firebase'
    },
});

/**
 * Asigna un revisor a un proyecto.
 *
 * @param params - Objeto que contiene el ID de la residencia a obtener.
- \@param **string** residenciaId - ID de la residencia.
 * @returns **Promise\<[RevisionData](../interfaces/Revisiones.ts)>** - Promesa que resuelve con los datos de la revisión.
 * @throws **Error** Lanza un error si la petición falla.
 */
export async function getSeguimiento(params: { residenciaId: string }) {
    try {
        const token = await getToken();
        seguimientosApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        seguimientosApi.defaults.params = {};
        const respuesta = await seguimientosApi.get(`/${params.residenciaId}`);
        return seguimientoResource(respuesta.data.data);
    } catch (error: any) {
        handleAxiosError(error);
    }
}

/**
 * Asigna un revisor a un proyecto.
 *
 * @param params - Objeto que contiene el ID de la residencia a obtener.
- \@param **[Seguimiento](../interfaces/Seguimientos.ts)** body - Datos del seguimiento a evaluar.
 * @returns **Promise\<any>**.
 * @throws **Error** Lanza un error si la petición falla.
 */
export async function evaluateSeguimientoParcial(params: {body:Seguimiento}) {
    try {
        const body = params.body;
        const token = await getToken();
        seguimientosApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        seguimientosApi.defaults.params = {};
        const respuesta = await seguimientosApi.patch(`/${params.body.SolicitudResidencia}`, body);
        return respuesta.data.data;
    } catch (error: any) {
        handleAxiosError(error);
    }
};



import type { EmpresasServiceParams } from '@/interfaces/params/empresasServiceParams';
import { empresasCollection } from '@/resources/EmpresasResource';
import getToken from '@/utils/getToken';
import handleAxiosError from '@/utils/handleAxiosError';
import axios from 'axios';


const empresasApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'empresas',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Provider': 'Firebase'
    },
});
/**
 * Obtiene la lista de empresas desde la API.
 * @param **[EmpresasServiceParams](../interfaces/params/EmpresasServiceParams.ts)** params - Parámetros de la consulta.
 * @returns **Promise\<[Empresa](../interfaces/Empresas.ts)[]>** Una promesa que resuelve con la colección de carreras.
 * @throws ``Error`` Lanza un error si ocurre un problema al obtener las carreras.
 */
export async function getEmpresas(params?:EmpresasServiceParams) {
    try{
        //Obtenemos el token
        const token = await getToken();
        empresasApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        empresasApi.defaults.params = params;
        const respuesta = await empresasApi.get('');
        const empresas = respuesta.data.data;
        return empresasCollection(empresas);
    }catch (error: any) {
        handleAxiosError(error);
    }
}
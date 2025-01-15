import type { ProyectoBancoCompleto } from '@/interfaces/Proyectos';
import type { BancoServiceParams } from '@/interfaces/params/bancoServiceParams';
import { BancoProyectosCollection } from '@/resources/BancoProyectoResource';
import getToken from '@/utils/getToken';
import handleAxiosError from '@/utils/handleAxiosError';
import axios from 'axios'

const bancoService = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'banco',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Provider': 'Firebase'
    },
});

/**
 * Obtiene una lista de proyectos del banco.
 *
 * @param **[BancoServiceParams](../interfaces/params/bancoServiceParams.ts) [params]** - QueryParams para la solicitud (filtros opcionales).
 * @returns **Promise<ProyectoBancoCompleto[]>** - Una promesa que resuelve con una lista de proyectos completos del banco.
 * @throws **Error** - Lanza un error si ocurre un problema con la solicitud.
 */
export async function getBancoProyectos(params?: BancoServiceParams): Promise<ProyectoBancoCompleto[]> {
    try {
        //Obtenemos el token
        const token = await getToken();
        bancoService.defaults.headers['Authorization'] = `Bearer ${token}`;
        bancoService.defaults.params = params;
        //Hacemos la petición
        const response = await bancoService.get('');
        const proyectos = response.data.data;
        return BancoProyectosCollection(proyectos);
    } catch (error: any) {
        handleAxiosError(error);
    }
}

import { carrerasCollection } from '@/resources/CarrerasResource';
import getToken from '@/utils/getToken';
import handleAxiosError from '@/utils/handleAxiosError';
import axios from 'axios';


const carrerasApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'carreras',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Provider': 'Firebase'
    },
});

/**
 * Obtiene la lista de carreras desde la API.
 *
 * @returns **Promise\<[Carrera](../interfaces/Carreras.ts)[]>** Una promesa que resuelve con la colección de carreras.
 * @throws ``Error`` Lanza un error si ocurre un problema al obtener las carreras.
 */
export async function getCarreras() {
    try{
        //Obtenemos el token
        const token = await getToken();
        carrerasApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        const respuesta = await carrerasApi.get('');
        const carreras = respuesta.data.data;
        return carrerasCollection(carreras);
    }catch (error: any) {
        handleAxiosError(error);
    }
}
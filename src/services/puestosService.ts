import { puestosCollection } from "@/resources/PuestosResources";
import getToken from "@/utils/getToken";
import handleAxiosError from "@/utils/handleAxiosError";
import axios from "axios";


const puestosApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'puestos',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Provider': 'Firebase'
    },
});

/**
 * Obtiene la lista de puestos desde la API.
 *
 * @returns **Promise<Puesto[]>** - Una promesa que resuelve con la colección de puestos.
 * @throws **Error** - Lanza un error si la solicitud a la API falla.
 */
export async function getPuestos() {
    try {
        //Obtenemos el token
        const token = await getToken();
        puestosApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        puestosApi.defaults.params = {};
        const respuesta = await puestosApi.get('');
        const puestosResponse = respuesta.data.data;
        return puestosCollection(puestosResponse);
    } catch (error: any) {
        handleAxiosError(error);
    }
}
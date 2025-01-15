import type { PersonalServiceParams } from '@/interfaces/params/personalServiceParams';
import type { PersonalUpdate } from '@/interfaces/Personal';
import { personalCollection, personalResource } from '@/resources/PersonalResource';
import getToken from '@/utils/getToken';
import handleAxiosError from '@/utils/handleAxiosError';
import axios from 'axios';


const personalApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'personal',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Provider': 'Firebase'
    },
});

/**
 * Obtiene la lista de empresas desde la API.
 * @param **[PersonalServiceParams](../interfaces/params/PersonalServiceParams.ts)** params - Parámetros de la consulta.
 * @returns **Promise\<[PersonalData](../interfaces/Personal.ts)[]>** Una promesa que resuelve con la colección de carreras.
 * @throws ``Error`` Lanza un error si ocurre un problema al obtener las carreras.
 */
export async function getPersonal(params?:PersonalServiceParams) {
    try{
        //Obtenemos el token
        const token = await getToken();
        personalApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        personalApi.defaults.params = params;
        const respuesta = await personalApi.get('');
        const personal = respuesta.data.data;
        return personalCollection(personal);
    }catch (error: any) {
        handleAxiosError(error);
    }
}

/**
 * Actualiza la información personal.
 *
 * @param params Parámetros para la actualización. Parámetros requeridos:
- \@param **string** personalId - ID del personal a actualizar.
- \@param **[PersonalUpdate](../interfaces/Personal.ts)** body - Datos actualizados del personal.
 * @returns **Promise\<[PersonalData](../interfaces/Personal.ts)[]>** - Promesa que resuelve con los datos actualizados del personal.
 * @throws ``Error`` - Lanza un error si la actualización falla.
 */
export async function updatePersonal (params:{personalId:string, body:PersonalUpdate}) {
    try {
        //Obtenemos el token
        const token = await getToken();
        personalApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        const respuesta = await personalApi.patch(params.personalId, params.body);
        return personalResource(respuesta.data.data);
    } catch (error: any) {
        handleAxiosError(error);
    }
};
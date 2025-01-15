import type { ProyectoServiceParams } from '@/interfaces/params/proyectoServiceParams';
import type { ProyectoTemplate } from '@/interfaces/Proyectos';
import { ProyectoResource } from '@/resources/ProyectoResource';
import getToken from '@/utils/getToken';
import handleAxiosError from '@/utils/handleAxiosError';
import ProponerProyectoValidate from '@/validates/ProponerProyectoValidate';
import axios from 'axios';


const proyectosApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'proyectos',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Provider': 'Firebase'
    },
});

/**
 * Elimina un proyecto dado su ID.
 * 
 * @param **string** ``Proyecto_Id`` - El ID del proyecto a eliminar.
 * @returns **Promise\<string>** - Una promesa que resuelve con un mensaje de exito.
 * @throws **Error** - Lanza un error si ocurre un problema durante la eliminación del proyecto.
 */
export async function deleteProyecto(Proyecto_Id: string) {
    try {
        const token = await getToken();
        proyectosApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        const respuesta = await proyectosApi.delete(Proyecto_Id);
        return respuesta.data.data as string;
    } catch (error: any) {
        handleAxiosError(error);
    }
}

/**
 * Guarda un proyecto propuesto.
 * 
 * @param **[ProyectoTemplate](../interfaces/Proyectos.ts)** ``proyectoPropuesta`` - El proyecto propuesto que se va a guardar.
 * @returns **Promise\<[ProyectoCompleto](../interfaces/Proyectos.ts)>** - Una promesa que resuelve con la respuesta del proyecto guardado.
 * @throws **Error** - Lanza un error si ocurre algún problema durante la validación o la solicitud.
 */
export async function saveProyecto (proyectoPropuesta: ProyectoTemplate) {
    try { 
        ProponerProyectoValidate(proyectoPropuesta);
        //Obtenemos el token
        const token = await getToken();
        proyectosApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        const respuesta = await proyectosApi.post('', proyectoPropuesta);
        const proyectoResponse = respuesta.data.data;
        return ProyectoResource(proyectoResponse);
    } catch (error: any) {
        handleAxiosError(error);
    }
};

/**
 * Obtiene un proyecto por su ID.
 *
 * @param **string** ``proyectoId`` - El ID del proyecto a obtener.
 * @param **[ProyectoServiceParams](../interfaces/params/ProyectoServiceParams.ts)** ``params`` - Parámetros opcionales para la solicitud.
 * @returns **Promise\<[ProyectoCompleto](../interfaces/Proyectos.ts)>** - Una promesa que resuelve con la respuesta del proyecto guardado.
 * @throws **Error** - Lanza un error si la solicitud falla.
 */
export async function getProyecto (proyectoId: string, params?: ProyectoServiceParams) {
    try { 
        //Obtenemos el token
        const token = await getToken();
        proyectosApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        proyectosApi.defaults.params = params;
        const respuesta = await proyectosApi.get(proyectoId);
        const proyectoResponse = respuesta.data.data;
        return ProyectoResource(proyectoResponse, params);
    } catch (error: any) {
        handleAxiosError(error);
    }
};

/**
 * Actualiza un proyecto propuesto.
 * 
 * @param params - Objeto para parametros del metodo. Parametros requeridos:
 - \@param **string** ``proyectoId`` - El ID del proyecto a obtener.
 - \@param **[ProyectoTemplate](../interfaces/Proyectos.ts)** ``proyectoPropuesta`` - El proyecto propuesto que se va a guardar.
 * @returns **Promise\<[ProyectoCompleto](../interfaces/Proyectos.ts)>** - Una promesa que resuelve con la respuesta del proyecto guardado.
 * @throws **Error** - Lanza un error si ocurre algún problema durante la validación o la solicitud.
 */
export async function updateProyecto(params: {proyectoId: string, proyecto: ProyectoTemplate}){
    try { 
        //Obtenemos el token
        const token = await getToken();
        proyectosApi.defaults.headers['Authorization'] = `Bearer ${token}`;
        const respuesta = await proyectosApi.patch(params.proyectoId, params.proyecto);
        const proyectoResponse = respuesta.data.data;
        return ProyectoResource(proyectoResponse);
    } catch (error: any) {
        handleAxiosError(error);
    }
}
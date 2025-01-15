import type { Alumno } from '@/interfaces/Alumnos';
import type { AsesorServicePOST, validatePOST } from '@/interfaces/params/asesorServiceParams';
import { alumnoResource, alumnosCollection } from '@/resources/AlumnoResource';
import getToken from '@/utils/getToken';
import handleAxiosError from '@/utils/handleAxiosError';
import { AsignarAsesorValidate } from '@/validates/AsignarAsesorValidate';
import axios from 'axios'

const alumnosService = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'alumnos',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Provider': 'Firebase'
    },
});

/**
 * Obtiene una lista de alumnos del servidor.
 * @returns **Promise<[Alumno](../interfaces/Alumnos.ts)[]>** - Una promesa que resuelve con una lista de alumnos.
 * @throws **Error** - Lanza un error si la petición falla.
 * @example
 * ```typescript
 * getAlumnos().then(alumnos => {
 *     console.log(alumnos);
 * }).catch(error => {
 *     console.error(error);
 * });
 * ```
 */
export async function getAlumnos() {
    try {
        //Obtenemos el token
        const token = await getToken();
        alumnosService.defaults.headers['Authorization'] = `Bearer ${token}`;
        alumnosService.defaults.params = {};
        //Hacemos la petición
        const response = await alumnosService.get('');
        const alumnos = response.data.data;
        return alumnosCollection(alumnos);
    } catch (error: any) {
        handleAxiosError(error);
    }
}

/**
 * Actualiza la información de un alumno.
 * @returns **Promise\<[Alumno](../interfaces/Alumnos.ts)>** - Una promesa que resuelve con el objeto Alumno actualizado.
 * @param **[Alumno](../interfaces/Alumnos.ts)** ``alumno`` - El objeto Alumno que contiene la información actualizada del alumno.
 * @throws **Error** - Lanza un error si la petición falla.
 */
export async function updateAlumno(alumno:Alumno){
    try {
        //Obtenemos el token
        const token = await getToken();
        alumnosService.defaults.headers['Authorization'] = `Bearer ${token}`;
        alumnosService.defaults.params = {};
        //Hacemos la petición
        const response = await alumnosService.patch(alumno.Alumno_Id, JSON.stringify(alumno));
        const alumnos = response.data.data;
        return alumnoResource(alumnos);
    } catch (error: any) {
        handleAxiosError(error);
    }
}
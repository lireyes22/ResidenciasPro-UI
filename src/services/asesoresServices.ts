import type { AsesorServicePOST, validatePOST } from '@/interfaces/params/asesorServiceParams';
import getToken from '@/utils/getToken';
import handleAxiosError from '@/utils/handleAxiosError';
import { AsignarAsesorValidate } from '@/validates/AsignarAsesorValidate';
import axios from 'axios'

const asesoresService = axios.create({
    baseURL: import.meta.env.VITE_API_URL + 'asesores',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Provider': 'Firebase'
    },
});

/**
 * Obtiene las asignaciones de un asesor.
 *
 * Esta función recupera el token, establece el encabezado de autorización,
 * y realiza una solicitud GET para obtener las asignaciones del asesor.
 *
 * @returns **Promise\<any>** Una promesa que se resuelve con la lista de asesores.
 * @throws Lanzará un error si la solicitud falla.
 * @deprecated No se está utilizando en el proyecto, no tiene resource.
 */
export async function getAsignacionesAsesor() {
    try {
        //Obtenemos el token
        const token = await getToken();
        asesoresService.defaults.headers['Authorization'] = `Bearer ${token}`;
        asesoresService.defaults.params = {};
        //Hacemos la petición
        const response = await asesoresService.get('');
        const asesores = response.data.data;
        return asesores;
    } catch (error: any) {
        handleAxiosError(error);
    }
}

/**
 * Asigna un asesor a un proyecto.
 *
 * @param params - Objeto que contiene los parámetros necesarios para la asignación.
 * @param params.body - Objeto que contiene los datos del asesor a asignar. Parámetros requeridos:
  - \@param **body.Proyecto** - Identificador del proyecto.
  - \@param **body.Profesor** - Identificador del profesor.
  - \@param **body.AsignacionAsesor_Motivo** - Motivo de la reasignación del asesor.
  - \@param **body.AsignacionAsesor_NoOficio** - Número de oficio de la asignación del asesor.
 * @param params.validate (Opcional) Función de validación para los parámetros.
 * @returns La asignación.
 * @throws Error si ocurre un problema durante la asignación.
 */
export async function assignAsesor(params: {body: AsesorServicePOST, validate?:validatePOST}) {
    try {
        AsignarAsesorValidate(params);
        const body = params.body;
        //Obtenemos el token
        const token = await getToken();
        asesoresService.defaults.headers['Authorization'] = `Bearer ${token}`;
        asesoresService.defaults.params = {};
        //Hacemos la petición
        const response = await asesoresService.post('', body);
        const asesor = response.data.data;
        return asesor;
    } catch (error: any) {
        handleAxiosError(error);
    }
}
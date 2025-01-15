import { AxiosError } from 'axios';

export default function handleAxiosError(error: any): never {
    if (error instanceof AxiosError) {
        if (error.code === "ERR_NETWORK") {
            throw new Error("No tienes acceso a esta funcionalidad debido a las restricciones de tu red de Internet.");
        }
        throw new Error(error.response?.data.error || 'Error de en la peticion');
    } else {
        throw new Error(error.message || 'Error desconocido');
    }
}

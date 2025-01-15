import type { User } from '@/interfaces';
import getToken from '@/utils/getToken';
import handleAxiosError from '@/utils/handleAxiosError';
import axios from 'axios';


const AuthEndPoint = import.meta.env.VITE_API_URL + "me";


export async function auth (token?: string): Promise<User> {
    try {
        const tokenOb = await getToken();
        const config = {
            headers: {
                'Authorization': `Bearer ${token ?? tokenOb}`,
                'Accept': 'application/vnd.api+json',
                'Provider': 'Firebase'
            }
        };
        const respuesta = await axios.get(AuthEndPoint, config);
        const user = respuesta.data.data;

        if(user.attributes.user_tipo.includes("Alumno")){
            throw new Error("No tienes permisos para acceder a esta aplicación. Contacta a un administrador.");
        } else {
            return respuesta.data.data;
        }
    } catch (error: any) {
        handleAxiosError(error);
    }
};
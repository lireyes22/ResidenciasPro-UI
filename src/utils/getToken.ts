import Cookies from 'js-cookie';
import { auth } from '@/firebase';
import useOauthGoogle from '@/composables/useOauth';

export default async function getToken() {
    // Intentamos obtener el token desde la cookie
    const token = Cookies.get('token');

    if (token) {
        //console.log('no refresh')
        return token;
    }

    // Si no hay cookie, intentamos obtenerlo desde Firebase
    const user = auth.currentUser;
    if (user) {
        try {
            const freshToken = await user.getIdToken(true);
            // Guardamos el token en la cookie para accesos futuros
            Cookies.set('token', freshToken, { secure: true, sameSite: 'Strict' });
            //console.log('refresh')
            return freshToken;
        } catch (error) {
            console.error('Error al obtener el token:', error);
            useOauthGoogle().signOutWithMicrosoft();
            window.location.reload();
            throw error;
        }
    } else {
        throw new Error('No user is currently signed in');
    }
}

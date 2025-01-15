//Dependencies
import { signOut } from 'firebase/auth';
import Cookies from 'js-cookie';
import clearAllCookies from '@/utils/clearAllCookies';
import { signInWithPopup } from "firebase/auth";
import { auth, providerMicrosoft } from "@/firebase";

export default function useOauth() {

    const signOutWithMicrosoft = async () => {
        try {
            await signOut(auth);
            Cookies.remove('token');
            clearAllCookies();
            return true;
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            return false;
        }
    };

    const signInWithMicrosoft = async () => {
        try {
            const result = await signInWithPopup(auth, providerMicrosoft);
            const user = result.user;
            const token = await user.getIdToken();
            //@ts-ignore
            console.log('Token de acceso:', result._tokenResponse);

            //@ts-ignore
            const photoURL = await getMicrosoftProfilePhoto(result._tokenResponse.oauthAccessToken);
            return { token, user, photoURL };
        } catch (error) {
            throw new Error('Error en la autenticación con microsoft');
        }
    };

    const getMicrosoftProfilePhoto = async (accessToken: string): Promise<string | null> => {
        try {
            const url = "https://graph.microsoft.com/v1.0/me/photo/$value"; // Endpoint para obtener la foto del perfil
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                const photoBlob = await response.blob();
                // Convertir el Blob a Base64 usando Promise
                const base64data = await new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result as string);
                    reader.onerror = reject;
                    reader.readAsDataURL(photoBlob);
                });
                // Guardar en localStorage
                localStorage.setItem('photo', base64data);
                return base64data;
            } else {
                console.error('Error al obtener la foto de perfil:', response.status);
                return null;
            }
        } catch (error) {
            console.error('Error al hacer la solicitud para obtener la foto:', error);
            return null;
        }
    };
    

    return { signInWithMicrosoft, signOutWithMicrosoft };
};

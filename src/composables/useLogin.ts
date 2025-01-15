// Dependencies
import { useRouter } from 'vue-router';
import { useMutation } from '@tanstack/vue-query';
import { useToast } from 'primevue/usetoast';
import Cookies from 'js-cookie';
//Composables
import useOauth from '@/composables/useOauth';
//Services
import { auth } from '@/services/oauthService';
//Stores
import { useUserStore } from '@/stores/userStore';
import { ElNotification } from 'element-plus';


export default function useLogin() {
    const { signInWithMicrosoft, signOutWithMicrosoft } = useOauth();
    const router = useRouter();
    //const userStore = useUserStore();
    const toast = useToast();

    const mutationSignIn = useMutation({
        mutationFn: signIn,
        onSuccess: async (data) => {
            //console.log(data);
            Cookies.set('photoUrl', data.photoURL ?? '');
            Cookies.set('user', JSON.stringify(data.user));
            Cookies.set('token', data.token, { secure: true, sameSite: 'Strict' });
            useUserStore().loadData();
            router.push({ name: 'home' });
        },
        onError: (error) => {
            ElNotification({
                title: 'Error',
                message: error.message,
                type: 'error',
            });
        },
    });
    async function signIn() {
        try {
            const authMicrosoft = await signInWithMicrosoft();
            const user = await auth(authMicrosoft.token);
            return { token: authMicrosoft.token, user, photoURL: authMicrosoft.photoURL };
        } catch (error) {
            await signOutWithMicrosoft();
            throw error;
        }
    };
    return {
        handleSignIn: mutationSignIn.mutate,
    };
}


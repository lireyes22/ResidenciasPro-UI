//Interfaces
import type { RouterLink } from '@/interfaces';
//Router
import { routesSidebar } from '@/router/sections-routes';
import { useRouter } from 'vue-router';
//Composables
import useOauth from '@/composables/useOauth';
//Stores
import { useUserStore } from '@/stores/userStore';
import { useNavStore } from '@/stores/navStore';
//Services
import { auth } from '@/services/oauthService';
//Vue Dependencies
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import { computed, ref, watch } from 'vue';
import clearAllCookies from '@/utils/clearAllCookies';
import Cookies from 'js-cookie';

export default function useSidebar() {

    
    const isExpanded = ref(sessionStorage.getItem('isExpanded') === 'true' ? true : false);
    const navStore = useNavStore();
    const routes = computed(() => routesSidebar.filter(route => useUserStore().getRoles().includes(route.role)));
    const router = useRouter();

    const {data:dataUser} = useQuery({
        queryKey: ['user'],
        queryFn: () => auth(),

    });

    watch(dataUser, (data) => {
        if(data) {
            Cookies.set('user', JSON.stringify(data));
            useUserStore().loadData();
        }
    });
    

    const useSignOutMutation = useMutation({
        mutationFn: useOauth().signOutWithMicrosoft,
        onSuccess: () => {
            router.push({ name: 'login' });
            clearAllCookies();
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const queryClient = useQueryClient();

    const prefetchBanco = (type:string) => {
        /* if(['proyectos', 'propuestas', 'residencias', 'tracking'].includes(type)) {
            queryClient.prefetchQuery({
                queryKey: ['bancoProyectos', type],
                queryFn: () => getBancoProyectos(getFiltersBancoProyectos(type)),
            });
        } */
    }

    function toggleSidebar(flag: boolean | null = null) {
        if(flag !== null) {
            isExpanded.value = flag;
            sessionStorage.setItem('isExpanded', flag.toString());
            return;
        }
        isExpanded.value = !isExpanded.value;
        sessionStorage.setItem('isExpanded', isExpanded.value.toString());
    };

    return {
        //vars
        routes,
        isExpanded,
        useUserStore,
        navStore,
        //functions
        toggleSidebar,
        prefetchBanco,
        handleSignOut: useSignOutMutation.mutate
        //stores
    };
}



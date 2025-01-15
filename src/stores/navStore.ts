import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { RouterLink } from '@/interfaces';
import { routesAllSidebar } from '@/router/sections-routes';

export const useNavStore = defineStore('nav', () => {

    const isRouteSelected = ref(sessionStorage.getItem('isRouteSelected') ?? '');
    const titlePage = ref(sessionStorage.getItem('titlePage') ?? '');

    function changeRoute(route: RouterLink) {
        localStorage.setItem('route', JSON.stringify(route));
        if (routesAllSidebar.includes(route)) {
            isRouteSelected.value = route.name;
            sessionStorage.setItem('isRouteSelected', route.name);
        }
        titlePage.value = route.title;
        sessionStorage.setItem('titlePage', route.title);
    }

    function getRoute():RouterLink {
        return JSON.parse(localStorage.getItem('route') ?? '{}');
    }

    return {
        isRouteSelected,
        titlePage,
        changeRoute,
        getRoute
    };
});
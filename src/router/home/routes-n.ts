import Tracking from '@/pages/Tracking.vue'
import Pruebas from '@/pages/Pruebas.vue';
import type { RouterLink } from "@/interfaces";
import FAQ from '@/pages/FAQ.vue';

export const tracking: RouterLink = {
    path: 'tracking',
    name: 'tracking',
    component: Tracking,
    icon: 'pi-forward',
    title: 'Tracking',
    visible: true,
    props: { from: 'tracking' },
};

export const pruebas: RouterLink = {
    name: 'pruebas',
    path: 'pruebas',
    component: Pruebas,
    icon: 'pi-forward',
    title: 'Pruebas',
    visible: true,
};

export const faq: RouterLink = {
    name: 'faq',
    path: 'faq',
    component: FAQ,
    icon: 'pi-question-circle',
    title: 'FAQ',
    visible: true,
};
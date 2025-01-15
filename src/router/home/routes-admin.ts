import type { RouterLink } from "@/interfaces";
import AdminUsuarios from "@/pages/AdminUsuarios.vue";

export const adminUsuarios:RouterLink = {
    path: 'admin/usuarios',
    name: 'admin-usuarios',
    icon: 'pi-shopping-bag',
    component: AdminUsuarios,
    title: 'Usuarios',
    visible: true,
};

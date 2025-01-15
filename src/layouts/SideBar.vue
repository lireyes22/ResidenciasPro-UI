<template>
    <div class="flex flex-col size-full min-h-160 relative">
        <!-- Header -->
        <header
            class="bg-color-1 text-white h-16  md:h-20 md:min-h-20 md:max-h-20 flex items-center justify-between relative">
            <!-- Sección izquierda -->
            <div class="h-full w-20 flex items-center justify-center relative">
                <button class="hidden lg:flex">
                    <img src="../assets/images/TecChetumal.png" alt="Imagen" class="w-8 h-auto">
                </button>
                <button @click="toggleSidebar()" class="lg:hidden flex size-full items-center justify-center">
                    <i class="pi pi-bars text-4xl"></i>
                </button>
                <p
                    class="text-xs md:text-sm text-white font-semibold hidden md:flex absolute left-0 translate-x-20 w-48">
                    Residencias Profesionales <br> ITCH
                </p>
            </div>

            <!-- Título centrado -->
            <h1 class="text-lg font-bold mx-auto absolute left-1/2 transform -translate-x-1/2">
                {{ navStore.titlePage }}
            </h1>

            <!-- Dropdown derecha -->
            <el-dropdown placement="bottom-end">
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="settings">
                            <router-link :to="{ name: 'home' }" class="flex items-center w-full space-x-1">
                                <i class="pi pi-cog"></i>
                                <span class="">Configuración</span>
                            </router-link>
                        </el-dropdown-item>
                        <el-dropdown-item command="logout">
                            <button class="flex items-center w-full space-x-1" @click="handleSignOut()">
                                <i class="pi pi-power-off"></i>
                                <span>Cerrar Sesión</span>
                            </button>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
                <button class="flex items-center space-x-2 focus:outline-none mr-2">
                    <!-- Foto de perfil usando la URL -->

                    <Avatar v-if="useUserStore().photoUrl" :image="useUserStore().photoUrl" size="large" style="background-color: #fff; color: #fff"
                        shape="circle" />

                        <Avatar v-else :label='useUserStore().userNombre.charAt(0)' size="large" class="bg-white/15 text-white"
                        shape="circle" />
                </button>
            </el-dropdown>
        </header>


        <div @click="toggleSidebar()" :class="['absolute top-0 left-0 z-40 flex lg:hidden size-full bg-black/30',
        isExpanded ? '' : '-translate-x-full'
        ]">
        </div> <!-- overlay XD o como se escriba -->

        <div @click="toggleSidebar(false)" :class="[
            'flex lg:hidden h-full w-fit overflow-hidden absolute top-0 left-0 z-40 transition-transform duration-300',
            isExpanded ? '' : '-translate-x-full']">
            <!-- Sidebar -->
            <aside class="bg-color-2 text-white transition-all duration-300 flex flex-col w-64 z-50">

                <div class="sticky top-0 w-full">
                    <button @click="toggleSidebar()"
                        class="text-white w-full py-4 px-8 flex justify-center items-center focus:outline-none space-x-4 hover:bg-white/5">
                        <i class="pi pi-arrow-left"></i>
                    </button>
                </div>

                <!-- Menú de íconos y textos -->
                <ul class="w-full overflow-y-auto scroll-menu space-y-8 py-2 bg-black/10">

                    <!-- Profesor -->
                    <div class="w-full flex flex-col items-center justify-start space-y-2 py-3"
                        v-for="(routeSection, i) in routes" :key="i">
                        <div v-if="routeSection.active"
                            class="text-white text-sm text-left flex items-start justify-end w-full px-3 flex-col">
                            <p class="text-color-3 italic">{{ routeSection.section }}</p>
                            <div class="border-t border-gray-400 mt-1 shadow-lg w-full"></div>
                        </div>
                        <li v-if="routeSection.active" v-for="( route, i ) in routeSection.routes" :key="i"
                            class="w-full flex justify-center items-center cursor-pointer"
                            @mouseenter="prefetchBanco(route.props?.type)">
                            <router-link :to="{ name: route.name }"
                                class="flex items-center py-4 px-6 w-11/12 rounded-lg min-h-14 transition duration-300 ease-in-out shadow-lg  hover:bg-white/10"
                                :class="[
                                    navStore.isRouteSelected === route.name ? 'bg-white/30' : 'hover:scale-105 active:scale-100'
                                ]" @click="navStore.changeRoute(route)">
                                <i :class="['pi', route.icon, 'text-xl']"></i>
                                <span class="ml-4">{{ route.title }}</span>
                            </router-link>
                        </li>
                    </div>
                </ul>

                <!-- <div class="mt-auto">
                    <hr>
                </div> -->
            </aside>
        </div>


        <div class="flex flex-1 overflow-hidden">
            <!-- Sidebar -->
            <aside :class="[
                'bg-color-2 text-white transition-all duration-300 flex-col hidden lg:flex',
                isExpanded ? 'w-56 xl:w-64' : 'w-20'
            ]">

                <div class="sticky top-0 w-full">
                    <button @click="toggleSidebar()"
                        class="text-white w-full py-4 px-8 flex justify-center items-center focus:outline-none space-x-4 hover:bg-white/5">
                        <span class="text-center font-bold text-lg" v-if="isExpanded">Menú</span>
                        <i class="pi pi-bars"></i>
                    </button>
                </div>

                <!-- Menú de íconos y textos -->
                <ul class="w-full overflow-y-auto scroll-menu space-y-6 py-2 bg-black/10 h-full">

                    <!-- Profesor -->
                    <div class="w-full flex flex-col items-center justify-start space-y-2 py-2"
                        v-for="(routeSection, i) in routes"  :key="i" >
                        <div v-if="isExpanded && routeSection.active"
                            class="text-white text-sm text-left flex items-start justify-end w-full px-3 flex-col">
                            <p class="text-color-3 italic">{{ routeSection.section }}</p>
                            <div class="border-t border-gray-400 mt-1 shadow-lg w-full"></div>
                        </div>
                        <div v-if="!isExpanded && routeSection.active" class="flex flex-col w-full justify-center px-2">
                            <p class="text-xs truncate text-center">{{ routeSection.section }}</p>
                            <div class="border-t border-gray-400 mt-1 shadow-lg w-full"></div>
                        </div>
                        <li v-if="routeSection.active" v-for="( route, i ) in routeSection.routes" :key="i"
                            class="w-full flex justify-center items-center cursor-pointer"
                            @mouseenter="prefetchBanco(route.props?.type)">
                            <router-link :to="{ name: route.name }"
                                v-tooltip="{ value: route.title, disabled: isExpanded }"
                                class="flex items-center py-4 px-6 w-11/12 rounded-lg min-h-14 transition duration-300 ease-in-out shadow-lg  hover:bg-white/10"
                                :class="[
                                    isExpanded ? 'justify-start' : 'justify-center',
                                    navStore.isRouteSelected === route.name ? 'bg-white/30' : 'hover:scale-105 active:scale-100'
                                ]" @click="navStore.changeRoute(route)">
                                <i :class="['pi', route.icon, 'text-xl']"></i>
                                <span v-if="isExpanded" class="ml-4">{{ route.title }}</span>
                            </router-link>
                        </li>
                    </div>
                </ul>

                <!-- <div class="mt-auto">
                    <hr>
                </div> -->
            </aside>



            <!-- Contenedor Principal -->
            <div class="flex-1 flex md:p-4 bg-color-3 justify-center items-center overflow-hidden">
                <router-view :key="$route.fullPath" />

            </div>
        </div>
    </div>
</template>



<script setup lang="ts">
import useSidebar from '../composables/useSideBar';
import Avatar from 'primevue/avatar';



const {
    routes,
    isExpanded,
    useUserStore,
    navStore,
    toggleSidebar,
    prefetchBanco,
    handleSignOut,
} = useSidebar();
</script>

<style>
.scroll-menu::-webkit-scrollbar {
    width: 8px;
}



.scroll-menu::-webkit-scrollbar-track {
    @apply bg-color-2;
    /* Color del fondo de la barra de desplazamiento */
}

.scroll-menu::-webkit-scrollbar-thumb {
    @apply bg-white/10;
    /* Color del relleno de la barra de desplazamiento */
    /* Radio de borde de la barra de desplazamiento */
}

.scroll-menu::-webkit-scrollbar-thumb:hover {
    @apply bg-white/50;
    /* Color del relleno de la barra de desplazamiento al pasar el mouse */
}
</style>

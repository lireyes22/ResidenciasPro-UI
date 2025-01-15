<template>
    <div class="h-screen w-screen min-h-160 flex flex-col items-center justify-center fondo relative">
        <div class="absolute bg-black/10 size-full"></div>
        <div
            class="min-h-20 w-full flex items-center justify-center colorFondo shadow-lg z-20 px-6 sm:invisible sm:min-h-0">
            <h1
                class="text-center text-lg sm:text-2xl font-medium sm:font-semibold text-white sm:text-white uppercase sm:min-h-0">
                Residencias Profesionales del Instituto Tecnológico de Chetumal</h1>
        </div>
        <div class="flex flex-col justify-center items-center w-full h-full z-10">

            <div
                class="hidden sm:flex bg-color-1 w-full h-full sm:w-160 sm:h-12 items-center justify-center rounded-t-2xl shadow-lg z-10">
                <h1 class="font-semibold text-lg text-center text-white uppercase invisible sm:visible">Residencias
                    Profesionales del ITCH</h1>
            </div>

            <div
                class="flex justify-center items-center w-full h-full sm:w-160 sm:h-96 sm:rounded-b-2xl shadow-xl overflow-hidden">
                <!--Este div que se oculta-->

                <div class="sm:w-2/4 raccon h-full invisible sm:visible">
                </div>
                <div class="flex flex-col w-full sm:w-2/4 px-4 h-full justify-center gap-y-2 colorFondo">
                    <div class="w-full flex flex-col p-2"><!--Este arriba-->
                        <span class="text-sm text-gray-200" for="welcome">Bienvenido</span>
                        <h1 class="text-2xl font-bold text-white" for="login">Iniciar Sesión</h1>
                    </div>
                    <div class="flex flex-col justify-center p-2"><!--Este abajo-->
                        <button @click="handleSignIn()"
                            class="w-full flex flex-row max-h-16 text-white text-left text-sm font-medium hover:text-gray-200 rounded-md transition duration-100 shadow-md">
                            <div class="flex w-4/5 pl-4 h-full items-center">
                                <p>Iniciar con Microsoft 365</p>
                            </div>
                            <div class="flex w-1/4 p-3 justify-end sm:justify-center h-full">
                                <logo></logo>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
//--> CAGADERO DE CESAR <--//
import logo from "@/components/login/logo.vue"; 

import useLogin from "@/composables/useLogin";

const { handleSignIn } = useLogin();


</script>
<style scoped>
.fondo {
    background-image: url('../assets/images/login/fondo3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
}

.fondo::before {

    filter: brightness(0.5);
}

.raccon {
    background-image: url('../assets/images/login/mapache.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}


.colorFondo {
    background-color: rgba(36, 67, 87, 0.8);
    /* Azul con 50% de transparencia */
}
</style>
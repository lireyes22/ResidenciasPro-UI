<template>

    <div class="size-full xl:p-8 flex flex-col w-full 2xl:w-11/12 2xl:h-7/8 h-full space-y-2 p-4 bg-white md:rounded-xl">
       
        <div class="flex flex-col h-full w-full">
            <div class="flex flex-col min-h-20 space-y-3 mb-4">
                <h1 class="flex items-center bg-color-1 min-h-10 md:px-2 rounded-lg">
                    <span class="w-0 h-0 md:w-auto md:h-px flex-1 bg-white"></span>
                    <span class="shrink-0 text-xs md:text-lg font-medium md:px-4 text-white">PREGUNTAS Y RESPUESTAS
                        FRECUENTES</span>
                    <span class="w-0 h-0 md:w-auto md:h-px flex-1 bg-white"></span>
                </h1>
                <div class="h-full w-full rounded-lg">
                    <div class="flex w-full justify-between">
                        <div class="relative">
                            <details class="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    class="flex cursor-pointer items-center gap-2 border-b border-gray-500 pb-1 text-gray-900 transition hover:border-gray-600">
                                    <span class="text-sm font-medium"> Filtros </span>

                                    <span class="transition group-open:-rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </summary>

                                <div
                                    class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                                    <div class="w-40 rounded border border-gray-100 bg-white">
                                        <ul class="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label for="FilterInStock" class="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="pendiente"
                                                        class="size-5 rounded border-gray-300"  /><!-- Para filtrar -->

                                                    <span class="text-sm font-medium text-gray-700">Respondida 
                                                        <span class="text-green-500"></span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                                                    <input type="checkbox" id="cerrada"
                                                        class="size-5 rounded border-gray-300"  /><!-- Tambien -->

                                                    <span class="text-sm font-medium text-gray-700">Pendientes <span
                                                            class="text-green-500"></span></span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div class="flex items-center justify-center space-x-3">
                            <p class="text-right">Contáctenos por:</p>
                            <a href="https://chat.whatsapp.com/LRMxElSAcbKIeskR2CCBQu" target="_blank"
                                class="bg-green-500 hover:bg-green-400 active:bg-green-600 rounded-3xl pl-3 pr-2 py-1 flex items-center justify-center space-x-1">
                                <p class="text-sm text-white text-center font-semibold">Whatsapp</p>
                                <whatsapp class="h-6 w-6" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>



            <div class="w-full h-full overflow-auto scroll-whiteTracking">
                <div class="flex flex-col w-full bg-white space-y-2">
                    <!-- Details es el que se va a iterar -->
                    <details :class="{
                        'group border-s-4 bg-color-4 rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden': true,
                        'border-green-500': true, /* Color si esta respondido */
                        'border-red-500': false
                    }" :open="true"><!-- :open="faq.id === '1'" originalmente se busca la primera para que este abierta -->
                    <!-- :hidden="pendientes && !faq.respondida || cerradas && faq.respondida" si no esta respondida no sale -->

                        <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 class="text-base md:text-lg font-medium text-gray-900">
                               ¿Como actualizo mi informacion estudiantil?
                            </h2>
                            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                                v-if="true">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3" v-else>
                                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z" />
                                </svg>
                            </span>
                        </summary>
                        <div v-if="true"><!-- Si esta respondida -->
                            <p class="mt-4 leading-relaxed text-sm md:text-base text-gray-700">
                               Ni idea <!-- Aqui se pone la respueta -->
                            </p>
                        </div>
                    </details>
                </div>

            </div>
        </div>

    </div>

</template>

<script setup lang="ts">
import whatsapp from '@/assets/svgs/whatsapp.vue';

</script>

<style scoped>

</style>
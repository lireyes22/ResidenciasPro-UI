// src/stores/loadingStore.ts
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { User } from '@/interfaces/.';
import Cookies from 'js-cookie';

export const useUserStore = defineStore('user', () => {

    const user = ref<User>();
    const photoUrl = ref<string>();
    const token = ref<string>();

    function loadData() {
        getPhotoFromLocalStorage();
        const userCookie = Cookies.get('user');
        if (userCookie) {
            user.value = JSON.parse(userCookie);
        }
    }

    const getPhotoFromLocalStorage = () => {
        const base64data = localStorage.getItem('photo');
        if (base64data !== null && base64data !== undefined) {
            photoUrl.value = base64data;
        } else {
            /* photoUrl.value = '/src/assets/images/profile.png'; */
            photoUrl.value= "";
        }
    };

    function getRoles(){
        if(user.value){
            return user.value.attributes.user_tipo;
        }
        return []
    }


    return {
        user,
        userId: computed(() => user.value?.id || ''),
        userDepartamento: computed(() => user.value?.attributes.user_departamento.Departamento_Id.$oid || ''),
        userNombre: computed(() => `${user.value?.attributes.user_nombre} ${user.value?.attributes.user_apellidos}` || ''),
        photoUrl,
        token,
        getRoles,
        loadData
    };
});

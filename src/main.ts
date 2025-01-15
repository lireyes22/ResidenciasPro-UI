//PiniaStore
import { createPinia } from 'pinia';
//VueRoute
import router from './router';
//ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Tooltip from 'primevue/tooltip';

//PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
//VueQuery
import { VueQueryPlugin } from '@tanstack/vue-query';
//Vue
import 'shepherd.js/dist/css/shepherd.css';
import './style.css';
import { createApp } from 'vue';
import App from './App.vue';


const app = createApp(App);

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                gcTime: 1000 * 60 * 1, // 2 minutes
                retry: 2,
                retryDelay: 1000,
                refetchOnReconnect: 'always'
            }
        },
    },
    enableDevtoolsV6Plugin: true,
});



app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.directive('tooltip', Tooltip);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            },
            darkModeSelector: false || 'none',
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');

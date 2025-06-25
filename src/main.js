import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import StyleClass from 'primevue/styleclass';
import Ripple from 'primevue/ripple';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

const app = createApp(App);

app.use(ToastService);
app.use(router);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark'
        }
    },
    ripple: true,
    locale: {
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['Dim.', 'Lundi', 'Mardi', 'Mercr.', 'Jeudi', 'Vendr.', 'Sam.'],
        dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Fév.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juill.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'], 
    }
});

app.directive('styleclass', StyleClass);
app.directive('ripple', Ripple);
app.component('Toast', Toast);

app.mount('#app');
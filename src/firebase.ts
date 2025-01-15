
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, OAuthProvider, onIdTokenChanged } from 'firebase/auth';
import Cookies from 'js-cookie';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configuración de persistencia
setPersistence(auth, browserLocalPersistence)
    .then(() => {
        //console.log("Persistencia configurada en LOCAL.");
    })
    .catch((error) => {
        //console.error("Error al configurar la persistencia:", error);
    });

// Listener para manejar el token
onIdTokenChanged(auth, async (user) => {
    if (user) {
        const token = await user.getIdToken();
        console.log(token);
        Cookies.set('token', token, { secure: true, sameSite: 'Strict' });
    } else {
        Cookies.remove('token');
    }
});

const providerMicrosoft = new OAuthProvider('microsoft.com');
providerMicrosoft.setCustomParameters({
    tenant: import.meta.env.VITE_TENANT_ID
});
providerMicrosoft.addScope('User.Read'); // Permite obtener la foto de perfil y más información
providerMicrosoft.addScope('mail.send');
providerMicrosoft.addScope('openid');
providerMicrosoft.addScope('profile'); // Permite obtener información básica del perfil, incluida la foto.
providerMicrosoft.addScope('email');  // Asegúrate de incluir este también si necesitas el correo electrónico.


export { auth, providerMicrosoft };
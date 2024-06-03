// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries Your web app's
// Firebase configuration For Firebase JS SDK v7.20.0 and later, measurementId
// is optional
const firebaseConfig = {
    apiKey: "AIzaSyB164CT993Dym_zyDm3dBHGcA-GTxk6yVI",
    authDomain: "jobstlk.firebaseapp.com",
    projectId: "jobstlk",
    storageBucket: "jobstlk.appspot.com",
    messagingSenderId: "737923351087",
    appId: "1:737923351087:web:b2712e7a9d201b79807cda",
    measurementId: "G-4T6DWPEQWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
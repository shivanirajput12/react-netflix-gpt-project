// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5LVJOEql11keq84oNNN3i1UXoyOHBi8s",
    authDomain: "netflix-gpt-5a944.firebaseapp.com",
    projectId: "netflix-gpt-5a944",
    storageBucket: "netflix-gpt-5a944.appspot.com",
    messagingSenderId: "717046628420",
    appId: "1:717046628420:web:8fb8e9bccd926d1a5b7c11",
    measurementId: "G-92YYFBQQM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
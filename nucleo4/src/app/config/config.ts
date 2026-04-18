// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvVe7YZcNF4byYaMndI1n7-YM-sRz_jZo",
    authDomain: "nucleo4-fe59d.firebaseapp.com",
    projectId: "nucleo4-fe59d",
    storageBucket: "nucleo4-fe59d.firebasestorage.app",
    messagingSenderId: "146703853243",
    appId: "1:146703853243:web:f040ebe805c43318586b9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app)
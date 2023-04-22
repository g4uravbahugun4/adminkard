// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqWP1PNuu3HtRkB9gvfX7VWdasA-7PMXg",
    authDomain: "adminkard.firebaseapp.com",
    projectId: "adminkard",
    storageBucket: "adminkard.appspot.com",
    messagingSenderId: "710174761847",
    appId: "1:710174761847:web:970907370edb7ea093f772",
    measurementId: "G-10V6D7ZMZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const database = getFirestore(app)

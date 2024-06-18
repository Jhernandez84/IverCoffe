// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"; //estoy trayendo el módulo por defecto
import 'firebase/compat/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration BASE
const firebaseConfig = {
  apiKey: "AIzaSyAX9Pl_z_af8JSIsJJhq0ytRvZtAsBFjaY",
  authDomain: "bdiverchile.firebaseapp.com",
  projectId: "bdiverchile",
  storageBucket: "bdiverchile.appspot.com",
  messagingSenderId: "774329576244",
  appId: "1:774329576244:web:8f17540a9293899bc55361"
};

// Initialize Firebase

console.log("Initializing Firebase...");
const app = firebase.initializeApp(firebaseConfig);
console.log("Firebase initialized.");

// Check if auth and provider are initialized correctly
console.log("Auth object:", getAuth(app));
console.log("GoogleAuthProvider object:", new GoogleAuthProvider());

export const db = app.firestore();
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

//  debo ir a la consola de firebase y habilitar la autenticación de google
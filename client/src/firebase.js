// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-958b8.firebaseapp.com",
  projectId: "mern-auth-958b8",
  storageBucket: "mern-auth-958b8.appspot.com",
  messagingSenderId: "1052863120132",
  appId: "1:1052863120132:web:acb708711d8835a9aa0651",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

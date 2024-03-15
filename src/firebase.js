// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2atih80obX-Cn44r2wIFtj2dARWakaGw",
  authDomain: "estate-vision-bdf28.firebaseapp.com",
  projectId: "estate-vision-bdf28",
  storageBucket: "estate-vision-bdf28.appspot.com",
  messagingSenderId: "717010961919",
  appId: "1:717010961919:web:d0641e3cb673f3e12653ca",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

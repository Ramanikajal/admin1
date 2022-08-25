// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeXJom2Ta305JkxvGhyhki5siM0VgoLwk",
  authDomain: "cityhospital-cda0a.firebaseapp.com",
  projectId: "cityhospital-cda0a",
  storageBucket: "cityhospital-cda0a.appspot.com",
  messagingSenderId: "207595718825",
  appId: "1:207595718825:web:3892dc465a03e02e5641b8",
  measurementId: "G-H90E8ZXRY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
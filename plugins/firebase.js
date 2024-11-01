// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1axuHMPpm6-7BDGJ4j0nCEznCHD-wxLk",
  authDomain: "demowed2test.firebaseapp.com",
  projectId: "demowed2test",
  storageBucket: "demowed2test.firebasestorage.app",
  messagingSenderId: "773525989011",
  appId: "1:773525989011:web:796f26d01b71cde9688f66",
  measurementId: "G-CHJ5VPFTNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = firebase.storage(); // ensure to export the 'storage' property
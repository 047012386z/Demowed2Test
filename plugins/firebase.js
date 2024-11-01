// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1axuHMPpm6-7BDGJ4j0nCEznCHD-wxLk",
    authDomain: "demowed2test.firebaseapp.com",
    projectId: "demowed2test",
    storageBucket: "demowed2test.firebasestorage.app",
    messagingSenderId: "773525989011",
    appId: "1:773525989011:web:796f26d01b71cde9688f66",
    measurementId: "G-CHJ5VPFTNP"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { db } from '~/src/firebase'; // หากอยู่ใน src


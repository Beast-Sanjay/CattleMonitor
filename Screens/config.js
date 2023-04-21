// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getDatabase, ref, set, update, onValue, remove } from  "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYAS3bLTBX14UAgT_ZRB38xSABfimpmyU",
  authDomain: "cattlemonitor-f6bc4.firebaseapp.com",
  projectId: "cattlemonitor-f6bc4",
  storageBucket: "cattlemonitor-f6bc4.appspot.com",
  messagingSenderId: "763146287493",
  appId: "1:763146287493:web:5638c7e858100767ab2cec",
  measurementId: "G-8611CT0H08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
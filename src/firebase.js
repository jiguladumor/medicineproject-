// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyVmIDAdwTzHvAwFtvAeJsmD3e3nF58vw",
  authDomain: "medicineproject-bbaa3.firebaseapp.com",
  projectId: "medicineproject-bbaa3",
  storageBucket: "medicineproject-bbaa3.appspot.com",
  messagingSenderId: "353601558679",
  appId: "1:353601558679:web:0be73dcf21be6a766af1d2",
  measurementId: "G-CLX1R2T0B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app)

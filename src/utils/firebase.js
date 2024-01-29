// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYbCQJWm5a1G6jfN5u9v3ikppYSx0kAww",
  authDomain: "netflixgpt-caf5d.firebaseapp.com",
  projectId: "netflixgpt-caf5d",
  storageBucket: "netflixgpt-caf5d.appspot.com",
  messagingSenderId: "154319490110",
  appId: "1:154319490110:web:5ba22bba9f4d6d44ae956f",
  measurementId: "G-7T4XG6WEG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();
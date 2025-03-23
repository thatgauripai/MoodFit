// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaY9OOWVhkvCDQAwzqyv0PDupQPkYQHPA",
  authDomain: "moodfit-31ea7.firebaseapp.com",
  projectId: "moodfit-31ea7",
  storageBucket: "moodfit-31ea7.firebasestorage.app",
  messagingSenderId: "512553573730",
  appId: "1:512553573730:web:1e469b7e0fc25f2743a03b",
  measurementId: "G-JG955NSGCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbSIIi-2zizVwLk_1BQDisCI43Odo3gfw",
  authDomain: "ameyreactauth.firebaseapp.com",
  projectId: "ameyreactauth",
  storageBucket: "ameyreactauth.appspot.com",
  messagingSenderId: "647494012907",
  appId: "1:647494012907:web:93a0437fd4e5cc3f0ad3ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c016b.firebaseapp.com",
  projectId: "mern-blog-c016b",
  storageBucket: "mern-blog-c016b.appspot.com",
  messagingSenderId: "907492954967",
  appId: "1:907492954967:web:b8669a561ee7f11afda412"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


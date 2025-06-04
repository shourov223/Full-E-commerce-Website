// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpKLs07Jg1pZpxRPpTfZ8Fckvyhs92hGw",
  authDomain: "exclusive-project-e94e9.firebaseapp.com",
  projectId: "exclusive-project-e94e9",
  storageBucket: "exclusive-project-e94e9.firebasestorage.app",
  messagingSenderId: "900264753325",
  appId: "1:900264753325:web:8be85449ce872b90796e24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
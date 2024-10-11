// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf3fuWigjw1XmPZDrJiO6khgefafNoZnE",
  authDomain: "todo-app-4250e.firebaseapp.com",
  projectId: "todo-app-4250e",
  storageBucket: "todo-app-4250e.appspot.com",
  messagingSenderId: "314574704970",
  appId: "1:314574704970:web:df3d53bc8786e0659371b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYYDJ6spGBDnPFktcPUStOmMXWfTDN7ak",
  authDomain: "chatapp-js-23419.firebaseapp.com",
  projectId: "chatapp-js-23419",
  storageBucket: "chatapp-js-23419.appspot.com",
  messagingSenderId: "217356170759",
  appId: "1:217356170759:web:8f6fd38669ed0d3a74dca2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrocnBcuIbNx6hd60TvsR8iD0z0axwIX4",
  authDomain: "laundry-application-f76ae.firebaseapp.com",
  projectId: "laundry-application-f76ae",
  storageBucket: "laundry-application-f76ae.appspot.com",
  messagingSenderId: "318314805869",
  appId: "1:318314805869:web:f0e4cdc79eaa8461c75d64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };

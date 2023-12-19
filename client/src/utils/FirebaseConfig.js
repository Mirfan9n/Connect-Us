import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCwx81gTHl1GsoSpO_g7q4K6SMD8gMGk-M",
  authDomain: "chatapp-cd805.firebaseapp.com",
  projectId: "chatapp-cd805",
  storageBucket: "chatapp-cd805.appspot.com",
  messagingSenderId: "162883602576",
  appId: "1:162883602576:web:d265bce115b3da4bb1b015",
  measurementId: "G-9HLVRT3B8V"
};

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
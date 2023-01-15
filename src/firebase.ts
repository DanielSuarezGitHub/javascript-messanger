import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDW_YkTDctVUG-5bWaQhzDKfo8Li4rn6z8",
  authDomain: "messenger-6117c.firebaseapp.com",
  projectId: "messenger-6117c",
  storageBucket: "messenger-6117c.appspot.com",
  messagingSenderId: "627100966067",
  appId: "1:627100966067:web:2bad9ac4c076ff6cf4e4c6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

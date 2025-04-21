import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkDIDO35fo0ZvulP9lru3_xGMs6gdo6oM",
  authDomain: "gift-list-4239d.firebaseapp.com",
  projectId: "gift-list-4239d",
  storageBucket: "gift-list-4239d.firebasestorage.app",
  messagingSenderId: "247296400135",
  appId: "1:247296400135:web:9564b23a296b66caaa43a2",
  measurementId: "G-SWDHNTY5ZY",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

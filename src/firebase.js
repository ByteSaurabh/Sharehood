import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwqk48AX9NVt0QPNupz0Xs3pJSHobgbLU",
  authDomain: "sharehood-4167f.firebaseapp.com",
  projectId: "sharehood-4167f",
  storageBucket: "sharehood-4167f.firebasestorage.app",
  messagingSenderId: "556309649618",
  appId: "1:556309649618:web:3fe9415f87b86ca38d750b",
  measurementId: "G-WJWXMJMWQ2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

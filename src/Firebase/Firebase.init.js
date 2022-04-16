// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI0w273TG5LYsnLvL9ZPWieWw5b6KFicI",
  authDomain: "red-onion-546c6.firebaseapp.com",
  projectId: "red-onion-546c6",
  storageBucket: "red-onion-546c6.appspot.com",
  messagingSenderId: "979824723302",
  appId: "1:979824723302:web:6f803f8e064d4f9ae3b4a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

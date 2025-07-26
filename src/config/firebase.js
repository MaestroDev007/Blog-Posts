// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnn_lPKOg8IUWzHh9LdUgE9mTp6ChHUSU",
  authDomain: "mindstitch-df3ec.firebaseapp.com",
  projectId: "mindstitch-df3ec",
  storageBucket: "mindstitch-df3ec.firebasestorage.app",
  messagingSenderId: "11618037730",
  appId: "1:11618037730:web:0cb58a950dca3b524bd3bb",
  measurementId: "G-R5B2G5TJQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
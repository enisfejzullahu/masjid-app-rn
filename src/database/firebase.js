// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from 'firebase/messaging';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLIUWCN7YYLQhQBtc4VFXtCbMABP0BZj0",
  authDomain: "xhamia-ime-8e033.firebaseapp.com",
  databaseURL: "https://xhamia-ime-8e033-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "xhamia-ime-8e033",
  storageBucket: "xhamia-ime-8e033.appspot.com",
  messagingSenderId: "782339772420",
  appId: "1:782339772420:web:edc022b92f09a89c4c2551",
  measurementId: "G-QLV075M424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

export { messaging };


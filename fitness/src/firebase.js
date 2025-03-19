// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXLpb6V4P7N5UJfWKeLZYcC59QUGpDQwQ",
  authDomain: "fitnessapp-c5ea3.firebaseapp.com",
  projectId: "fitnessapp-c5ea3",
  storageBucket: "fitnessapp-c5ea3.firebasestorage.app",
  messagingSenderId: "917721718413",
  appId: "1:917721718413:web:7908d5111b1aed721e8cc4",
  measurementId: "G-1H5KFHS5X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
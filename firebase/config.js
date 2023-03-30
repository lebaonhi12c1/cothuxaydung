// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIfaOIfVWRQ77hScM2FG-dbuxHQbSr4r4",
  authDomain: "vatlieuxaydung-22cb4.firebaseapp.com",
  projectId: "vatlieuxaydung-22cb4",
  storageBucket: "vatlieuxaydung-22cb4.appspot.com",
  messagingSenderId: "18781925417",
  appId: "1:18781925417:web:6ca647f7008c9abfc4ec38",
  measurementId: "G-F2HCCT4Z2Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const getInitialFirebase = ()=>{
    return app;
}
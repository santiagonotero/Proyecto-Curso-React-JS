// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/firebase-app";
//import { getAnalytics } from "firebase/firebase-analytics";
//import * as firebase from "firebase"
import firebase from "firebase/app";
import "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO8xnGJH8bU8iMzCsUlH5RvRklRZQt1dc",
  authDomain: "reactjs--ecommerce.firebaseapp.com",
  projectId: "reactjs--ecommerce",
  storageBucket: "reactjs--ecommerce.appspot.com",
  messagingSenderId: "847321064164",
  appId: "1:847321064164:web:5e92e8190ea57e2a6782f1",
  measurementId: "G-JL6ND990BW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firestore = firebase.firestore(app);


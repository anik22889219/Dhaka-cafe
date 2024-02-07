// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxIBqBkwidNLm3GZV7jMJ32CiYPxBBYFU",
  authDomain: "dhaka-caffe.firebaseapp.com",
  projectId: "dhaka-caffe",
  storageBucket: "dhaka-caffe.appspot.com",
  messagingSenderId: "834799239185",
  appId: "1:834799239185:web:7119a3cf8b3c603e6af1b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn-lKjNt6-1l9ZoFo0kCcOuSfIClf27vE",
  authDomain: "fix-training-ecommerce.firebaseapp.com",
  projectId: "fix-training-ecommerce",
  storageBucket: "fix-training-ecommerce.appspot.com",
  messagingSenderId: "508592459121",
  appId: "1:508592459121:web:3d694e2f87459443c87ad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db
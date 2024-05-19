// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernapp-2888b.firebaseapp.com",
  projectId: "mernapp-2888b",
  storageBucket: "mernapp-2888b.appspot.com",
  messagingSenderId: "423771640285",
  appId: "1:423771640285:web:fa1b45fc071829c6ae6634"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
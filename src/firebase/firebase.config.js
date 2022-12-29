// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABoo9bqnboKia1nfdAiiN4QDVxNyWUsSM",
  authDomain: "social-media-ce78e.firebaseapp.com",
  projectId: "social-media-ce78e",
  storageBucket: "social-media-ce78e.appspot.com",
  messagingSenderId: "441898724439",
  appId: "1:441898724439:web:6aeec10f7439c01c6c8712"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
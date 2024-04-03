// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuRA-2sOoOKsIeIuV6pttBon2eVbLar8I",
  authDomain: "module-52-149e6.firebaseapp.com",
  projectId: "module-52-149e6",
  storageBucket: "module-52-149e6.appspot.com",
  messagingSenderId: "607066282182",
  appId: "1:607066282182:web:93b57825d426a69b65dfc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
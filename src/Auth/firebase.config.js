// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe_jtC4tpz1OBNLGfICoNDwShK3Egqur4",
  authDomain: "people-review-9a51e.firebaseapp.com",
  projectId: "people-review-9a51e",
  storageBucket: "people-review-9a51e.appspot.com",
  messagingSenderId: "993236931686",
  appId: "1:993236931686:web:9140f8ced383e213c849a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;
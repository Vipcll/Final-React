// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoJaU9llIg6IWLVuOfnrtkbXwxRtfE7ko",
    authDomain: "coder-shop-44bd9.firebaseapp.com",
    projectId: "coder-shop-44bd9",
    storageBucket: "coder-shop-44bd9.appspot.com",
    messagingSenderId: "208027489836",
    appId: "1:208027489836:web:99e1179af0aab03c56e389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
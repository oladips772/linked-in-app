import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB4nkOkdLXh2bjX_OzrkwDaPeqHwmrr6MI",
  authDomain: "linked-in-app-60b20.firebaseapp.com",
  projectId: "linked-in-app-60b20",
  storageBucket: "linked-in-app-60b20.appspot.com",
  messagingSenderId: "179700471549",
  appId: "1:179700471549:web:bd4bdce7177e191d175094",
  measurementId: "G-LNMRHHQL2T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

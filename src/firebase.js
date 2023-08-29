import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWbDm9oAZAkhSAFdYYaVrJZ7g5UT9kvWU",
  authDomain: "quora-clone-64408.firebaseapp.com",
  projectId: "quora-clone-64408",
  storageBucket: "quora-clone-64408.appspot.com",
  messagingSenderId: "729548785172",
  appId: "1:729548785172:web:4ff0a701d52e666a300901",
  measurementId: "G-V6MRE9H639"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDFY9e8wuzE11mNZiNXNH1DpxpXEaz_0XE",
  authDomain: "ashimon-7d910.firebaseapp.com",
  projectId: "ashimon-7d910",
  storageBucket: "ashimon-7d910.appspot.com",
  messagingSenderId: "412404741308",
  appId: "1:412404741308:web:946f1705d3b87c5f47ccb9",
  measurementId: "G-2EY6TLR8X9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
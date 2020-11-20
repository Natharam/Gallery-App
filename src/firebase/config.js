import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDPiiCge27JA9c4ZX3_NcMob0RC7RjpK3U",
  authDomain: "gallary-app-13eae.firebaseapp.com",
  databaseURL: "https://gallary-app-13eae.firebaseio.com",
  projectId: "gallary-app-13eae",
  storageBucket: "gallary-app-13eae.appspot.com",
  messagingSenderId: "548345065054",
  appId: "1:548345065054:web:a8e984ade7666bc4500ecf",
  measurementId: "G-QZG2LW67MZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

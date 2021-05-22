import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAllupADUKpRqTqat1fbzDtSVtj9DgNfIQ",
  authDomain: "projetofinalweb.firebaseapp.com",
  projectId: "projetofinalweb",
  storageBucket: "projetofinalweb.appspot.com",
  messagingSenderId: "197968883010",
  appId: "1:197968883010:web:7b679458d5ba63b17becdb"
});

export default app;
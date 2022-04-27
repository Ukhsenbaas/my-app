import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCLKT_1_k4NJZu3lJZ6bSMG_7eA8eRqu-c",
  authDomain: "newreactda.firebaseapp.com",
  projectId: "newreactda",
  storageBucket: "newreactda.appspot.com",
  messagingSenderId: "512141321307",
  appId: "1:512141321307:web:17f6edb45f3a9071d94b7e"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = firebase.firestore(app);
auth.languageCode = 'mn';
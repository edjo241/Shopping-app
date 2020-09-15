import firebase from 'firebase';

const fireBase=firebase.initializeApp({
    apiKey: "AIzaSyB2nDLh4Y5922rTUO-df_kuDpiTUXYGwPY",
  authDomain: "edson-485a2.firebaseapp.com",
  databaseURL: "https://edson-485a2.firebaseio.com",
  projectId: "edson-485a2",
  storageBucket: "edson-485a2.appspot.com",
  messagingSenderId: "890424330864",
  appId: "1:890424330864:web:da8465dc27b73f0f3282b5",
  measurementId: "G-TBLDP9MVB2"
})

// const db=firebase.firestore();
const auth=firebase.auth();

export {auth}
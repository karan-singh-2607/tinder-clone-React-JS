import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDanxRR0Sd-qZYHfnCnbEetQI3MfmWQkMM",
    authDomain: "tinder-clone-b478f.firebaseapp.com",
    projectId: "tinder-clone-b478f",
    storageBucket: "tinder-clone-b478f.appspot.com",
    messagingSenderId: "82374118367",
    appId: "1:82374118367:web:028d0014c94f3f8288d26a",
    measurementId: "G-P4YJ080R40"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
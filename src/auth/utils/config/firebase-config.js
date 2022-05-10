import firebase from "firebase/compat";


const config = {
    apiKey: "AIzaSyCizGM-E4FI2BBnBF3rwzkhMM3_S4w2Gh8",
    authDomain: "apos-l9.firebaseapp.com",
    projectId: "apos-l9",
    storageBucket: "apos-l9.appspot.com",
    messagingSenderId: "780908227509",
    appId: "1:780908227509:web:a7bdc1e632ca62526647fc",
    measurementId: "G-9T723GRXB8"
};

const firebaseApp  = firebase.initializeApp(config);

export default firebaseApp;

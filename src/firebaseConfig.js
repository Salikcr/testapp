import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyAvEdNPh47KTN2k2AfriLKzqXbynBAmz2Y",
    authDomain: "hashing-5aeee.firebaseapp.com",
    databaseURL: "https://hashing-5aeee-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hashing-5aeee",
    storageBucket: "hashing-5aeee.appspot.com",
    messagingSenderId: "820338775930",
    appId: "1:820338775930:web:7777f3153898e9429528c3",
    measurementId: "G-HW8LRYG8Q0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
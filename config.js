import firebase from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAmGcT4D5dxNLyuv5gSE65r2ADQSvHZK80",
    authDomain: "barter-system-52306.firebaseapp.com",
    projectId: "barter-system-52306",
    storageBucket: "barter-system-52306.appspot.com",
    messagingSenderId: "433860629563",
    appId: "1:433860629563:web:3d960bdfdef703cf39381e"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
  export default firebase.firestore()
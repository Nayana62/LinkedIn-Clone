import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD3KG8CoV7IVQ5LyuNIdzuOzJpNUKRn5Y0",
    authDomain: "linkedin-clone-9091c.firebaseapp.com",
    projectId: "linkedin-clone-9091c",
    storageBucket: "linkedin-clone-9091c.appspot.com",
    messagingSenderId: "140497069939",
    appId: "1:140497069939:web:209c64b0bab9bf4f348706"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
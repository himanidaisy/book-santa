import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyDqDCadAxMosy8bAVaz66cjkWCcS9yOSzI",
    authDomain: "book-santa-ede29.firebaseapp.com",
    projectId: "book-santa-ede29",
    storageBucket: "book-santa-ede29.appspot.com",
    messagingSenderId: "31377178861",
    appId: "1:31377178861:web:f61cd1f7aeecc409c14ce4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
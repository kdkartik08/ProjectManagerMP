import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBnWF97MfQX3fjS2zyYw8VKCFIpmkZ-0HA",
    authDomain: "marioplan-beb60.firebaseapp.com",
    databaseURL: "https://marioplan-beb60.firebaseio.com",
    projectId: "marioplan-beb60",
    storageBucket: "marioplan-beb60.appspot.com",
    messagingSenderId: "852638397934",
    appId: "1:852638397934:web:a43e79ecc233da46bd0aff",
    measurementId: "G-CJ7KNFP17T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;
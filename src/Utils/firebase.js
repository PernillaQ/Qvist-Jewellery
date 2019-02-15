import firebase from 'firebase';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: /* process.env.FIREBASE_APIKEY*/,
  authDomain: "qvist-jewellery.firebaseapp.com",
  databaseURL: "https://qvist-jewellery.firebaseio.com",
  projectId: "qvist-jewellery",
  storageBucket: "qvist-jewellery.appspot.com",
  messagingSenderId: "520070195490"
};
firebase.initializeApp(config);

 export const auth = firebase.auth();


 export default firebase;

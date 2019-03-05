// import firebase from 'firebase';
import firebase from 'firebase/app'
import 'firebase/auth'
// import * as firebase from 'firebase/app';

// Initialize Firebase
var config = {
  apiKey:  /* process.env.FIREBASE_APIKEY */,
  authDomain: 'qvist-jewellery.firebaseapp.com',
  databaseURL: 'https://qvist-jewellery.firebaseio.com',
  projectId: 'qvist-jewellery',
  storageBucket: 'qvist-jewellery.appspot.com',
  messagingSenderId: '520070195490'
}
firebase.initializeApp(config)

/* class Firebase {
  constructor(){
    firebase.initializeApp(config);
    // behövs bara göras 1 gång.
    this.auth = firebase.auth();
  }
  signIn = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  getStory = this.firebase.database().ref(`story`).on('value', (snapshot) => {
      return snapshot.val()
  })

  getCollections = this.firebase.database().ref(`collections`).on('value', (snapshot) => {
      return snapshot.val()
  })
} */
// skapa instansen av firebase..för att instansiering inte ska behöva ske flera gånger..
// detta kommer vi använda
// const api = new Firebase();

// export default api;
export const auth = firebase.auth()

export default firebase

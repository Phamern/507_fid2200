import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCcqRoqGIxQdrGbbhyXB5pGWlnOWKn_5Qk",
  authDomain: "fid2200.firebaseapp.com",
  databaseURL: "https://fid2200.firebaseio.com",
  projectId: "fid2200",
  storageBucket: "fid2200.appspot.com",
  messagingSenderId: "884667022099",
  appId: "1:884667022099:web:d547aa5903ece534deb8e6"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
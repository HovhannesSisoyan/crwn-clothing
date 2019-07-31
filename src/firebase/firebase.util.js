import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyD_9C4jwY4EVs-aFbTFiRkH5L3uyGJra9w",
        authDomain: "crwn-db-8b0ef.firebaseapp.com",
        databaseURL: "https://crwn-db-8b0ef.firebaseio.com",
        projectId: "crwn-db-8b0ef",
        storageBucket: "",
        messagingSenderId: "394008960138",
        appId: "1:394008960138:web:fdd1716b8abaef83"
      }
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
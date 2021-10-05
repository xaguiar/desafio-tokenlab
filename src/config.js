import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDHyUAWPUzj-_TxBbnHOd4C3v52G7yV63o",
    authDomain: "desafio-tokenlab.firebaseapp.com",
    projectId: "desafio-tokenlab",
    storageBucket: "desafio-tokenlab.appspot.com",
    messagingSenderId: "520075950675",
    appId: "1:520075950675:web:92dfa8ff831935cf74a4a6"
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
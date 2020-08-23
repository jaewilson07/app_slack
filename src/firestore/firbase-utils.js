import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC7_JJeyj3H7wAnF-hEiM2j2dGm4fErL44',
  authDomain: 'app-slack-44e1f.firebaseapp.com',
  databaseURL: 'https://app-slack-44e1f.firebaseio.com',
  projectId: 'app-slack-44e1f',
  storageBucket: 'app-slack-44e1f.appspot.com',
  messagingSenderId: '1078000380944',
  appId: '1:1078000380944:web:b8f9af8459d356b0c92e95',
  measurementId: 'G-GS6DHRD8DS',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

export default db;

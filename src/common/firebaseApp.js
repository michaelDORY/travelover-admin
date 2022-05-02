import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const app = firebase.initializeApp(firebaseConfig);

export default app;

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebase = {
  apiKey: process.env.REACT_APP_KEY_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_KEY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_KEY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_KEY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_KEY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_KEY_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_KEY_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebase);

export const auth = getAuth(app);

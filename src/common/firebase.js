import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebase = {
  apiKey: 'AIzaSyD5qD7QRvCd0msJVSgY1L24txUzyP9Y2r8',
  authDomain: 'travelover-51b37.firebaseapp.com',
  projectId: 'travelover-51b37',
  storageBucket: 'travelover-51b37.appspot.com',
  messagingSenderId: '563961632420',
  appId: '1:563961632420:web:9c4942c6682bd81e213831',
  measurementId: 'G-LG0F0FW9QG',
};

// const firebase = {
//   apiKey: process.env.REACT_APP_KEY_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_KEY_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_KEY_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_KEY_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_KEY_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_KEY_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_KEY_FIREBASE_MEASUREMENT_ID,
// };

const app = initializeApp(firebase);

export const auth = getAuth(app);

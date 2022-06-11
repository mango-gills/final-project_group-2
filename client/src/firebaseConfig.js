import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAli2mEm0aZboaO8lRZPhfb5sz-xG5ZkCI',
  authDomain: 'chapp-b16e4.firebaseapp.com',
  projectId: 'chapp-b16e4',
  storageBucket: 'chapp-b16e4.appspot.com',
  messagingSenderId: '296993062345',
  appId: '1:296993062345:web:3db853b66aac037968bc18',
};

//Initialize firebase connection
const app = initializeApp(firebaseConfig);

//connecting to database
export const database = getFirestore(app);

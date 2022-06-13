import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCBNLIr9DGXYNEuTsKQIvTrgGyd5IvvJow',
  databaseURL: 'https://remcel-trial.firebaseio.com ',
  authDomain: 'remcel-trial.firebaseapp.com',
  projectId: 'remcel-trial',
  storageBucket: 'remcel-trial.appspot.com',
  messagingSenderId: '471917754304',
  appId: '1:471917754304:web:9cd48e29400762b9fd3a25',
  measurementId: 'G-V9VS01E45S',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

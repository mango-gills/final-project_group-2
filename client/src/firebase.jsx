import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCL_YZK7Tap-kz9MvlJuoAsEC6VpqNl7U0',
  authDomain: 'chat-app-official-9f0ee.firebaseapp.com',
  projectId: 'chat-app-official-9f0ee',
  storageBucket: 'chat-app-official-9f0ee.appspot.com',
  messagingSenderId: '234039602872',
  appId: '1:234039602872:web:bc3374219f6b08c1de8e4d',
  measurementId: 'G-QDG1CZ0LNM',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
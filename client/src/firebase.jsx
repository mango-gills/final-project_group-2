import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Document 5
const firebaseConfig = {
  apiKey: "AIzaSyDTLktW_Qy0Vm4cdLnefhSLWDLUlY8PSAs",
  authDomain: "auth-try-1eab5.firebaseapp.com",
  projectId: "auth-try-1eab5",
  storageBucket: "auth-try-1eab5.appspot.com",
  messagingSenderId: "949377894898",
  appId: "1:949377894898:web:866d9a32603e016c10436b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgrvoOVVvdB31SBjYg2PatEvbY9B2N7JY',
  authDomain: 'contacts-257d9.firebaseapp.com',
  projectId: 'contacts-257d9',
  storageBucket: 'contacts-257d9.appspot.com',
  messagingSenderId: '404607993807',
  appId: '1:404607993807:web:38fe7e4708515ee58c34ba',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

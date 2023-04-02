import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD36d7NkTx882TljKp1kJWG9mWh9mc-EFw',
  authDomain: 'news-app-d5275.firebaseapp.com',
  projectId: 'news-app-d5275',
  storageBucket: 'news-app-d5275.appspot.com',
  messagingSenderId: '362128745109',
  appId: '1:362128745109:web:f9e695f6531db1c23c319c',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

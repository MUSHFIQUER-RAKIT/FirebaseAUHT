/* eslint-disable no-useless-catch */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response.user;
  } catch (error) {
    throw error;
  }
};

const loginWithEmailPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (error) {
    throw error;
  }
};

const sendPasswordRest = async email => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    console.log(error);
  }
};

const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleAuthProvider);
    return response.user;
  } catch (error) {
    throw error;
  }
};

export {
  auth,
  loginWithEmailPassword,
  registerWithEmailAndPassword,
  sendPasswordRest,
  signInWithGoogle,
};

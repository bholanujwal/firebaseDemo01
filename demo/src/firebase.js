
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCnhhFjPS_zaB6Btxlf3mReE-j0sIu-lZQ",
  authDomain: "fir-c9873.firebaseapp.com",
  projectId: "fir-c9873",
  storageBucket: "fir-c9873.firebasestorage.app",
  messagingSenderId: "880969954211",
  appId: "1:880969954211:web:ad1068a9c99ecd123ba016",
  measurementId: "G-ZH58DR74X4"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

const store = getFirestore(app);
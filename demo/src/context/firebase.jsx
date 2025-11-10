import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCnhhFjPS_zaB6Btxlf3mReE-j0sIu-lZQ",
  authDomain: "fir-c9873.firebaseapp.com",
  projectId: "fir-c9873",
  storageBucket: "fir-c9873.firebasestorage.app",
  messagingSenderId: "880969954211",
  appId: "1:880969954211:web:ad1068a9c99ecd123ba016",
  measurementId: "G-ZH58DR74X4",
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export const useFirebase = () => useContext(FirebaseContext);

//register
const signUpWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

//login
const signinWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};



export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null)
  const isLoggedIn = !!user;

  const firebase = {
    signUpWithEmailAndPassword,
    signinWithEmailAndPassword,
    firebaseAuth,
    isLoggedIn,
    user,
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user)
      else setUser(null)
    })
  }, [])


  return (
    <FirebaseContext.Provider value={firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { getMessaging } from "firebase/messaging";



// export const analytics = getAnalytics(app);
// export const messaging = getMessaging(app);

// const store = getFirestore(app);
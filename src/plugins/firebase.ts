// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { getMessaging, getToken as getTokens, onMessage  } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vuetep-bbca1.firebaseapp.com",
  databaseURL: "https://vuetep-bbca1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vuetep-bbca1",
  storageBucket: "vuetep-bbca1.appspot.com",
  messagingSenderId: "656187567404",
  appId: "1:656187567404:web:a6e4a7bf3828fc6c3e5089",
  measurementId: "G-3PYS15C7LC",
};

// Firebase Cloud Messaging (FCM) Client
const firebaseCloudMessaging = () => {
  const messaging = getMessaging();

  const getToken = getTokens(messaging, { vapidKey: import.meta.env.VITE_FIREBASE_FCM_API_KEY })
    .then((currentToken) => {
      if (currentToken) {
        return currentToken;
      } else {
        return console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => console.log('An error occurred while retrieving token. ', err));
  
  const onMessageListener = onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
  });

  return {
    getToken,
    onMessageListener,
  }
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db, analytics, firebaseCloudMessaging }
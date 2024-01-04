// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyA_GBuIJWXLuK5I63YheWXc_3cWU0OYMmw',
  authDomain: "vuetep-bbca1.firebaseapp.com",
  databaseURL: "https://vuetep-bbca1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vuetep-bbca1",
  storageBucket: "vuetep-bbca1.appspot.com",
  messagingSenderId: "656187567404",
  appId: "1:656187567404:web:a6e4a7bf3828fc6c3e5089",
  measurementId: "G-3PYS15C7LC",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload,
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  };
  
  self.registration.showNotification(notificationTitle, notificationOptions);
});
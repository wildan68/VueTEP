import { precacheAndRoute } from 'workbox-precaching'
import { app as FirebaseApp } from '@fb'
import { getMessaging , onBackgroundMessage } from "firebase/messaging/sw";

declare let self: ServiceWorkerGlobalScope

// Config Firebase Cloud Messaging (FCM)
const firebaseCloudMessaging = () => {
  const messaging = getMessaging(FirebaseApp)

  onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification?.title as string;
    const notificationOptions = {
      body: payload.notification?.body,
      icon: '/firebase-logo.png',
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  });
}

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()

  // Init FCM
  firebaseCloudMessaging()
})

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)
import { precacheAndRoute } from 'workbox-precaching'
import { app as FirebaseApp } from '@fb'
import { getMessaging , onBackgroundMessage } from "firebase/messaging/sw";

declare let self: ServiceWorkerGlobalScope

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})
// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)

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


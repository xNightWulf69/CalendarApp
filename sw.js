self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(clients.claim())});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.openWindow('/CalendarApp/'))});
self.addEventListener('push',e=>{if(e.data){const data=e.data.json();e.waitUntil(self.registration.showNotification(data.title,{body:data.body,icon:'/CalendarApp/android-chrome-192x192.png',badge:'/CalendarApp/android-chrome-192x192.png',tag:'task-reminder'}))}});

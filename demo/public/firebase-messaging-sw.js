
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyCnhhFjPS_zaB6Btxlf3mReE-j0sIu-lZQ",
    authDomain: "fir-c9873.firebaseapp.com",
    projectId: "fir-c9873",
    storageBucket: "fir-c9873.firebasestorage.app",
    messagingSenderId: "880969954211",
    appId: "1:880969954211:web:ad1068a9c99ecd123ba016",
    measurementId: "G-ZH58DR74X4"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    // console.log(
    //     "[firebase-messaging-sw.js] Received background message ",
    //     payload
    // );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
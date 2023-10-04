importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js');
var firebaseConfig = {
    apiKey: "AIzaSyDDFphd7ioHLcmCfXt-eta8ljX0ex2yV6s",
    projectId: "my-project-1409b",
    storageBucket: "com.myproject.myproject",
    messagingSenderId: "130527465681",
    appId: "1:130527465681:android:7ff6c5732b020575e275f0"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
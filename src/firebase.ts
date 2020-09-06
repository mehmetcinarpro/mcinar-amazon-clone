import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCV_WqPt7V9UwyPaL7rnlsu7OWeXLB8tJI",
    authDomain: "mcinar-4m4zon-clone.firebaseapp.com",
    databaseURL: "https://mcinar-4m4zon-clone.firebaseio.com",
    projectId: "mcinar-4m4zon-clone",
    storageBucket: "mcinar-4m4zon-clone.appspot.com",
    messagingSenderId: "221621878239",
    appId: "1:221621878239:web:286f0da071dc83471c186a"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {
    auth
};
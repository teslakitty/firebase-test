import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";

const firebaseConfig = {
  apiKey: "AIzaSyBH3BN8w-NEtTglYYW3U3vE3cuudfb20h4",
  authDomain: "test-21334.firebaseapp.com",
  projectId: "test-21334",
  storageBucket: "test-21334.appspot.com",
  messagingSenderId: "210724724949",
  appId: "1:210724724949:web:1341c491ce8b094041c25c"
};
firebase.initializeApp(firebaseConfig);

const ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start("#firebaseui-auth-container", {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  // Other configuration options
});

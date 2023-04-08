import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { AuthUI } from "firebaseui";

const firebaseConfig = {
  apiKey: "AIzaSyBH3BN8w-NEtTglYYW3U3vE3cuudfb20h4",
  authDomain: "test-21334.firebaseapp.com",
  projectId: "test-21334",
  storageBucket: "test-21334.appspot.com",
  messagingSenderId: "210724724949",
  appId: "1:210724724949:web:1341c491ce8b094041c25c"
};
// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication UI
const auth = getAuth(firebaseApp);
const ui = new AuthUI(auth);

ui.start("#firebaseui-auth-container", {
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID
  ],
  // Other configuration options
});

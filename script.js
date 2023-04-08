import { initializeApp } from "firebase/compat/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/compat/auth";
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

const auth = getAuth();
const provider = new GoogleAuthProvider();

const googleSignInButton = document.getElementById("google-signin-button");

googleSignInButton.addEventListener("click", () => {
  signInWithGoogle();
});

function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(`Logged in as ${user.displayName}`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error: ${errorMessage} (${errorCode})`);
    });
}

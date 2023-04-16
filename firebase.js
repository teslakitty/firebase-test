const firebase = require("firebase/app");
require("firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyAosuUU_9XnZsDznwP-Z9kAEjgUH-fvZd4",
  authDomain: "testmeow21.firebaseapp.com",
  projectId: "testmeow21",
  storageBucket: "testmeow21.appspot.com",
  messagingSenderId: "423163438916",
  appId: "1:423163438916:web:bb1b463a7f89b3da5d5911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
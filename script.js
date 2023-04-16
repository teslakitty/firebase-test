const firebaseConfig = {
  apiKey: "AIzaSyAosuUU_9XnZsDznwP-Z9kAEjgUH-fvZd4",
  authDomain: "testmeow21.firebaseapp.com",
  projectId: "testmeow21",
  storageBucket: "testmeow21.appspot.com",
  messagingSenderId: "423163438916",
  appId: "1:423163438916:web:bb1b463a7f89b3da5d5911"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Add data to Firestore
db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});

// Read data from Firestore
db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});

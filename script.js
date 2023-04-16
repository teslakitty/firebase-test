import { initializeApp } from './firebase.js';

const app = initializeApp();

app.then(() => {
  const db = firebase.firestore();
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });
});

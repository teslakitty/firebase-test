const db = firebase.firestore();
const messageForm = document.querySelector('form');
const messageContainer = document.getElementById('messages');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = messageForm.name.value;
  const message = messageForm.message.value;

  db.collection('messages').add({
    name: name,
    message: message
  }).then(() => {
    console.log('Message added');
    messageForm.reset();
  }).catch((error) => {
    console.log(error);
  });
});

db.collection('messages').onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      const message = change.doc.data();
      const messageDiv = document.createElement('div');
      messageDiv.innerHTML = `<h3>${message.name}</h3><p>${message.message}</p>`;
      messageContainer.appendChild(messageDiv);
    }
  });
});

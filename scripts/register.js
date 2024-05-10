import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCKZkZXeSjABWBRtO5EhxtsqoqpEUixYJY",
  authDomain: "zadanie-3145d.firebaseapp.com",
  projectId: "zadanie-3145d",
  databaseURL: "https://zadanie-3145d-default-rtdb.europe-west3.firebasedatabase.app",
  storageBucket: "zadanie-3145d.appspot.com",
  messagingSenderId: "418449793225",
  appId: "1:418449793225:web:b8109524c01c3235a4ed18"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submitRegister = document.getElementById('btnRegister');
submitRegister.addEventListener("click", function(event) {
  event.preventDefault();
  const emailRegistration = document.getElementById('emailRegistration').value.trim();
  const passwordRegistration = document.getElementById('passwordRegistration').value;

  createUserWithEmailAndPassword(auth, emailRegistration, passwordRegistration)
    .then(() => {
      alert("Account created successfully!");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

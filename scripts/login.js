import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

const submitLogin = document.getElementById('btnLogin');
submitLogin.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("laina")
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Success!");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

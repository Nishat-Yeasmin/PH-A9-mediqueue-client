import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsPJ1NDU1XHpAMQwOpRzQ-Vun_okOl-Bk",
  authDomain: "mediqueue-64cae.firebaseapp.com",
  projectId: "mediqueue-64cae",
  storageBucket: "mediqueue-64cae.firebasestorage.app",
  messagingSenderId: "346255164426",
  appId: "1:346255164426:web:3c003d589d23e17699cbf3",
  measurementId: "G-8R5258SZ2E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
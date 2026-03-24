import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBkC-Axq-OJ1tqKWgS6iRyLHKrj_3F-yw",
  authDomain: "dashboard-hp-7f75d.firebaseapp.com",
  projectId: "dashboard-hp-7f75d",
  storageBucket: "dashboard-hp-7f75d.firebasestorage.app",
  messagingSenderId: "169355062761",
  appId: "1:169355062761:web:c7642018d8f3198cba2f78"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

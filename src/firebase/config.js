
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBaPDH9-LmqlSXDDsBzOFVW8rcixkzrCXY",
  authDomain: "arcap-79713.firebaseapp.com",
  projectId: "arcap-79713",
  storageBucket: "arcap-79713.appspot.com",
  messagingSenderId: "370146725578",
  appId: "1:370146725578:web:c052182e966faa49a8ee33",
  measurementId: "G-PT9L1QFH7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
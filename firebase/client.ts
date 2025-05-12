import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzMOHPywdj-NTnosAjeVpLRGAo4lsoD-Q",
  authDomain: "dashboard-users-next.firebaseapp.com",
  projectId: "dashboard-users-next",
  storageBucket: "dashboard-users-next.firebasestorage.app",
  messagingSenderId: "637002213182",
  appId: "1:637002213182:web:a495202e75cdf14e1dae6f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
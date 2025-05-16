import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebasekey = JSON.parse(process.env.FIREBASE_CONFIG);

const app = initializeApp(firebasekey);
export const db = getFirestore(app);
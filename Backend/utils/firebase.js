import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import firebasekey from "../utils/firebasekey.json" assert { type: "json" }; // Add assert { type: "json" }

const app = initializeApp(firebasekey);
export const db = getFirestore(app);
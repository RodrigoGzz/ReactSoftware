import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import fs from "fs";
import path from "path";

const firebaseKeyPath = path.resolve("utils/firebasekey.json");
const firebasekey = JSON.parse(fs.readFileSync(firebaseKeyPath, "utf-8"));

const app = initializeApp(firebasekey);
export const db = getFirestore(app);
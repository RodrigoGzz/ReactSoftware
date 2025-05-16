import { db } from "../utils/firebase.js";
import { collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getSalt, hashPassword } from "../utils/hash.js";

export const getUsers = async (req, res) => {
  try {
    const usersCollection = collection(db, "users");
    const snapshot = await getDocs(usersCollection);
    const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const userDoc = doc(db, "users", req.params.id);
    const snapshot = await getDoc(userDoc);
    if (!snapshot.exists()) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ id: snapshot.id, ...snapshot.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postUser = async (req, res) => {
  try {
    const { name, username, password, points } = req.body;
    const salt = getSalt();
    const hash = hashPassword(password, salt);
    const saltedHash = salt + hash;

    const usersCollection = collection(db, "users");
    const newUser = await addDoc(usersCollection, {
      name,
      username,
      password: saltedHash,
      points,
    });
    res.json({ id: newUser.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putUser = async (req, res) => {
  try {
    const { name, username, password, points } = req.body;
    const userDoc = doc(db, "users", req.params.id);
    await updateDoc(userDoc, { name, username, password, points });
    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userDoc = doc(db, "users", req.params.id);
    await deleteDoc(userDoc);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

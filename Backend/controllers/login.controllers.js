import { db } from "../utils/firebase.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { hashPassword } from "../utils/hash.js";
import jwt from "jsonwebtoken";

const SECRET_KEY = "Clave123";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Query Firestore for the user
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("username", "==", username));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = snapshot.docs[0].data();
    const salt = user.password.substring(0, parseInt(process.env.SALT));
    const hash = hashPassword(password, salt);
    const saltedHash = salt + hash;

    if (saltedHash !== user.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: snapshot.docs[0].id, username: user.username }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

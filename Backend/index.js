import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/users.routes.js";
import loginRoutes from "./routes/login.routes.js";
import morgan from "morgan";
import cors from "cors";
import { db } from "./utils/firebase.js"; // Import Firebase
import { collection, getDocs } from "firebase/firestore"; // Firestore methods

const app = express();
const port = 5001;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(indexRoutes);
app.use(usersRoutes);
app.use(loginRoutes);

// Example Firebase route
app.get("/firebase/items", async (req, res) => {
  try {
    const snap = await getDocs(collection(db, "items")); // Replace "items" with your collection name
    const items = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
/*
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
*/
export default app;
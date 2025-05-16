import { Router } from "express";
import { marco, ping, raiz } from "../controllers/index.controllers.js";
import loginRoutes from "./login.routes.js"; // Use import instead of require
import userRoutes from "./users.routes.js"; // Use import instead of require

const router = Router();

router.get("/", raiz);
router.get("/marco", marco);
router.get("/ping", ping);
router.use("/login", loginRoutes);
router.use("/users", userRoutes);

export default router;

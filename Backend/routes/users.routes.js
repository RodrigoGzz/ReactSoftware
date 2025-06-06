import { Router } from "express";
import { getUsers, getUser, postUser, putUser, deleteUser } from "../controllers/users.controllers.js";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/signup", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;

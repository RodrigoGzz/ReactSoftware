import { Router } from "express";

const router = Router();

router.get("/items/", getItems);
router.get("/items/:id", getItem);

export default router;
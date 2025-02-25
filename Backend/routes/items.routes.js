import { Router } from "express";

const router = Router();

router.get("/items/", getItems);

export default router;
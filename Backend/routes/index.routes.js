import { Router } from "express";
import { marco, ping, raiz } from "../controllers/index.controllers.js";

const router = Router();
const express = require('express');
const loginRoutes = require('./login.routes');
const userRoutes = require('./users.routes');

router.get("/", raiz);
router.get("/marco", marco);
router.get("/ping", ping);
router.use('/login', loginRoutes);
router.use('/users', userRoutes);

export default router;
module.exports = router;

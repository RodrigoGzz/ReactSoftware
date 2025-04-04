import { Router } from "express";
import {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
} from "../controllers/users.controllers.js";

const router = Router();
const express = require('express');
const { getUsers } = require('../controllers/users.controllers'); 
const authenticateToken = require('../utils/auth');


router.get("/users/", getUsers);
router.get("/users/:id", getUser);
router.post("/users/", postUser);
router.put("/users/:id", putUser);
router.delete("/users/:id", deleteUser);
router.get('/protected-resource', authenticateToken, (req, res) => {
    res.json({ message: 'Acceso autorizado al recurso protegido', user: req.user });
});

export default router;
module.exports = router;

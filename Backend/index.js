import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/users.routes.js";
import loginRoutes from "./routes/login.routes.js";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = 5000;
const express = require('express');
const routes = require('./routes/index.routes');

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(indexRoutes);
app.use(usersRoutes);
app.use(loginRoutes);
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(port, console.log("http://localhost:" + port));

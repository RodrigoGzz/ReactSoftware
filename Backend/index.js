// const express = require('express');
import express from "express";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(indexRoutes);

app.listen(5000, console.log("http://localhost:5000"));
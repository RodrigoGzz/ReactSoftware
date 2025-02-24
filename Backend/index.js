// const express = require('express');
import express from "express";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(indexRoutes);

app.listen(4000, console.log("http://localhost:4000"));
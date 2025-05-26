import { Box, Button, TextField } from "@mui/material";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Ingresa un dato");
      return;
    }
    try {
      console.log("Login attempt for user: Front: ", username);
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.isLogin) {
        login();
        navigate("/items");
      } else {
        alert("Login Failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Box
        margin={"auto"}
        flexDirection={"column"}
        display={"flex"}
        width={400}
        marginTop={"20px"}
      >
        <TextField
          label={"Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type={"password"}
          label={"Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type={"submit"} variant="contained">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
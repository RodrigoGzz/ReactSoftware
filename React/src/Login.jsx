import { Box, Button, TextField } from "@mui/material";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Ingresa un dato");
      return;
    }

    const isLogin = login({ username, password });
    if (isLogin) {
      setUsername("");
      setPassword("");
      navigate("/items");
    } else {
      alert("Login Failed");
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
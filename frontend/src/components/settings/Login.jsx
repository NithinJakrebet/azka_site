// src/components/LoginDialog.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


export default function Login({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const response = await axios.post(`${API_URL}/users/login`, { email, password });

      if (response.status !== 200) {
        console.error("Login failed");
        return;
      }
      

      const data = response.data;
      // data.token is your JWT, data.message is "Login successful"

      // Store token, role, etc. in local storage (or context)
      localStorage.setItem(
        "userData",
        JSON.stringify({ token: data.token, role: parseJwt(data.token)?.role }) 
      );

      // Clear fields and close
      setEmail("");
      setPassword("");
      onClose();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Decode the JWT to get role, userId, etc. (basic approach for illustration)
  function parseJwt(token) {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      return JSON.parse(window.atob(base64));
    } catch (error) {
      return null;
    }
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Log In</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Email"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Password"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleLogin}>
          Log In
        </Button>
      </DialogActions>
    </Dialog>
  );
}

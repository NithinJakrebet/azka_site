import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const Login = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  async function handleLogin() {
    try {
      const response = await axios.post(`${API_URL}/users/login`, { email, password });

      const data = response.data; // Get response data (JWT token)
      
      // Store token, role, etc. in local storage
      localStorage.setItem(
        "userData",
        JSON.stringify({ 
          token: data.token, 
          role: parseJwt(data.token)?.role
        }) 
      );

      // Show success alert for 3 sec
      setAlert({ show: true, type: "success", message: "Login successful!" });
      setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);

      // Clear fields and close dialog
      setEmail(""); setPassword(""); setTimeout(onClose, 1000); 
    } catch (error) {
      console.error("Error logging in:", error.response?.data?.message || error.message);
      
      // Show error alert for 3 sec
      setAlert({ show: true, type: "error", message: "Login failed. Please check your credentials." });
      setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
    }
  }

  // Decode JWT for user role
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
        {alert.show && (
          <Snackbar open={alert.show} autoHideDuration={3000}>
            <Alert severity={alert.type} sx={{ width: "100%" }}>
              {alert.message}
            </Alert>
          </Snackbar>
        )}

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

export default Login; 
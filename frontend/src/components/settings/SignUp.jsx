// src/components/SignUpDialog.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


export default function SignUp({ open, onClose }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("viewer"); // default

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${API_URL}/users/login`,
        { firstName, lastName, email, password, userType }
      );

      if (response.status !== 200) {
        // handle error
        console.error("Sign Up failed");
        return;
      }

      // 2) If userType is 'editor', we also want to create a "request" or notify Shreeja
      if (userType === "editor") {
        // You can do something like:
        await fetch(`${API_URL}/users/request-editor`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, firstName, lastName }),
        });        
      }

      // 3) Clear form and close dialog
      setFirstName(""); setLastName(""); setEmail(""); setPassword("");
      setUserType("viewer");
      onClose();
    } catch (error) {
      console.error("Error in sign up:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create an Account</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="First Name"
          fullWidth
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Last Name"
          fullWidth
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
        <FormControl margin="dense" fullWidth>
          <InputLabel>User Type</InputLabel>
          <Select
            value={userType}
            label="User Type"
            onChange={(e) => setUserType(e.target.value)}
          >
            <MenuItem value="viewer">Viewer</MenuItem>
            <MenuItem value="editor">Editor</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSignUp}>
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
}

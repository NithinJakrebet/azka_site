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
  Alert,
  Snackbar
} from "@mui/material";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


const SignUp = ({ open, onClose }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("viewer"); // default
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  async function handleSignUp() {
    try {
      const response = await axios.post(`${API_URL}/users/register`,
        { firstName, lastName, email, password, userType }
      );

      if (response.status !== 200) {
        console.error("Sign Up failed");
        setAlert({ show: true, type: "error", message: "Sign up failed" });
        setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
        return;
      }

      // if (userType === "editor") {
      //   const response = await axios.post(`${API_URL}/users/request-editor`,
      //    { email, firstName, lastName  }
      //   );
      // }

      setAlert({ show: true, type: "success", message: "Sign up successful" });
      setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);

      setFirstName(""); setLastName(""); setEmail(""); setPassword(""); setUserType("viewer");
      onClose();
    } catch (error) {
      console.error("Error in sign up:", error);
      setAlert({ show: true, type: "error", message: "Sign up failed" });
      setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create an Account</DialogTitle>
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
        {/* <FormControl margin="dense" fullWidth>
          <InputLabel>User Type</InputLabel>
          <Select
            value={userType}
            label="User Type"
            onChange={(e) => setUserType(e.target.value)}
          >
            <MenuItem value="viewer">Viewer</MenuItem>
            <MenuItem value="editor">Editor</MenuItem>
          </Select>
        </FormControl> */}
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


export default SignUp;
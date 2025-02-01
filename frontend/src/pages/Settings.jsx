// src/pages/SettingsPage.jsx
import { useState, useEffect } from "react";
import { Button, Alert, Snackbar } from "@mui/material";
import SignUp from "../components/settings/SignUp.jsx";
import Login from "../components/settings/Login.jsx";
import "../styling/settings.css"

const Settings = () => {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  
  // Track whether we're in editor mode
  const [isInEditorMode, setIsInEditorMode] = useState(
    localStorage.getItem("isInEditorMode") === "true"
  );

  // Retrieve userData from local storage
  const userData = JSON.parse(localStorage.getItem("userData")) || null;
  // If userData exists, user is considered logged in
  const isLoggedIn = !!userData?.token;

  // Check if user is logged in and has editor role
  const isEditor = userData?.role === "editor";

  // Handle opening/closing SignUp and Login dialogs
  const handleSignUpOpen = () => setOpenSignUp(true);
  const handleSignUpClose = () => setOpenSignUp(false);
  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);

  // Handle log out
  const handleLogout = () => {
    localStorage.removeItem("userData");     // Remove token & role
    localStorage.removeItem("isInEditorMode"); // Reset editor mode
    setIsInEditorMode(false);
    window.location.reload(); // or set some state to re-render

    // Show info alert
    setAlert({ 
      show: true, 
      type: "info", 
      message: "Logged Out"
    });

    // Hide the alert after 3 seconds
    setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
  };

  // Toggle editor mode
  const toggleEditorMode = () => {
    const newEditorMode = !isInEditorMode;
    setIsInEditorMode(newEditorMode);
    localStorage.setItem("isInEditorMode", String(newEditorMode));

    // Show info alert
    setAlert({ 
      show: true, 
      type: "info", 
      message: newEditorMode ? "In Editor Mode" : "Exited Editor Mode"
    });

    // Hide the alert after 3 seconds
    setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
};

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Settings</h1>

      {!isLoggedIn && (
        <div className="cms-container">
          <Button variant="contained" onClick={handleSignUpOpen}>Sign Up</Button>
          <Button variant="outlined" onClick={handleLoginOpen}>Log In</Button>
        </div>
      )}

      {isLoggedIn && (
        <div className="container">
          <Button variant="contained" color="error" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      )}

      {isLoggedIn && isEditor && (
        <div style={{ marginTop: "1rem" }}> 
          <Button
            variant="contained"
            color="secondary"
            onClick={toggleEditorMode}
          >
            {isInEditorMode ? "Exit Content Manager View" : "Manage Content"}
          </Button>
        </div>
      )}

      {alert.show && (
        <Snackbar open={alert.show} autoHideDuration={3000}>
          <Alert severity={alert.type} sx={{ width: "100%" }}>
            {alert.message}
          </Alert>
        </Snackbar>
      )}

      {/* Dialogs for Sign Up & Login */}
      {/* <SignUp open={openSignUp} onClose={handleSignUpClose} /> */}
      <Login open={openLogin} onClose={handleLoginClose} />
    </div>
  );
}

export default Settings;

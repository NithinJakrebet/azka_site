// src/hooks/useUsers.jsx
import { useState, useEffect } from "react";
import { GET, POST, PUT, DELETE } from "../util/CRUD";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all users (if needed for admin or listing)
  async function getUsers() {
    await GET({ 
      setItems: setUsers,
      setLoading: setLoading,
      route: "users"  // e.g., GET /users
    })
  }

  // Create a new user
  async function addUser(newUser) {
    await POST({
      newItem: newUser,
      route: "users/register" // e.g., POST /users/register
    });
    await getUsers();
  }

  // Update a user (e.g., approving editor request)
  async function updateUser(updatedUser) {
    await PUT({
      updatedItem: updatedUser,
      route: `users/${updatedUser._id}`,
      setItems: setUsers,
    });
    await getUsers();
  }

  // Delete a user (if you want an admin feature)
  async function deleteUser(userID) {
    await DELETE({
      itemID: userID,
      route: "users",
      setItems: setUsers,
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users,
    addUser,
    deleteUser,
    updateUser,
    loading,
  };
};

export default useUsers;

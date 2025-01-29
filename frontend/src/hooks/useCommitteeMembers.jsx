import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const useCommitteeMembers = () => {
  const [committeeMembers, setCommitteeMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Committee Members
  async function getCommitteeMembers() {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/committeeMembers`);
      setCommitteeMembers(response.data);
      console.log("Committee Members:", response.data);
    } catch (error) {
      console.error("Error fetching committee members:", error);
    } finally {
      setLoading(false);
    }
  }

  // Add a Committee Member
  async function addCommitteeMember(newCommitteeMember) {
    try {
      const response = await axios.post(`${API_URL}/committeeMembers`, newCommitteeMember);
      console.log("Committee Member added:", response.data);

      // Refresh the list after adding
      await getCommitteeMembers();
    } catch (error) {
      console.error("Error adding committee member:", error);
    }
  }

  // Update a Committee Member
  async function updateCommitteeMember(updatedMember) {
    const { _id, ...restOfMember } = updatedMember;

    if (!_id) {
      console.error("No _id provided in updatedMember. Cannot update.");
      return;
    }

    try {
      const response = await axios.put(`${API_URL}/committeeMembers/${_id}`, restOfMember);
      console.log("Committee Member updated:", response.data);

      // Refresh the list after updating
      await getCommitteeMembers();
    } catch (error) {
      console.error("Error updating committee member:", error);
    }
  }

  // Delete a Committee Member
  async function deleteCommitteeMember(committeeMemberID) {
    try {
      await axios.delete(`${API_URL}/committeeMembers/${committeeMemberID}`);
      console.log("Committee Member deleted:", committeeMemberID);

      // Optimistically remove from local state
      setCommitteeMembers((prevMembers) =>
        prevMembers.filter((member) => member._id !== committeeMemberID)
      );
    } catch (error) {
      console.error("Error deleting committee member:", error);
    }
  }

  // Load committee members when the component mounts
  useEffect(() => {
    getCommitteeMembers();
  }, []);

  return {
    committeeMembers,
    loading,
    deleteCommitteeMember,
    addCommitteeMember,
    updateCommitteeMember,
  };
};

export default useCommitteeMembers;

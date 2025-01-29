import { useState, useEffect } from "react";
import { GET, POST, PUT, DELETE } from "../util/CRUD";

const useCommitteeMembers = () => {
  const [committeeMembers, setCommitteeMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Committee Members
  async function getCommitteeMembers() {

    await GET({ 
      setItems: setCommitteeMembers,
      setLoading: setLoading,
      route: 'committeeMembers'
    })
    
  }

  // Add a Committee Member
  async function addCommitteeMember(newCommitteeMember) {

    await POST({
      newItem: newCommitteeMember,
      route: 'committeeMembers'
    })

    await getCommitteeMembers()
  }

  // Update a Committee Member
  async function updateCommitteeMember(updatedMember) {
    await PUT({
      updatedItem: updatedMember,
      route: "committeeMembers",
      setItems: setCommitteeMembers
    })
  }

  // Delete a Committee Member
  async function deleteCommitteeMember(committeeMemberID) {
    await DELETE({
      itemID: committeeMemberID,
      route: 'committeeMember',
      setItems: setCommitteeMembers
    })
  }

  // Load committee members when the component mounts
  useEffect(() => { getCommitteeMembers() }, []);

  return {
    committeeMembers,
    loading,
    deleteCommitteeMember,
    addCommitteeMember,
    updateCommitteeMember,
  };
};

export default useCommitteeMembers;

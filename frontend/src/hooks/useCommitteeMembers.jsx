import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const useCommitteeMembers = () => {

  const [committeeMembers, setCommitteeMembers] = useState([]);
  const [loading, setLoading] = useState(false);


  function deleteCommitteeMember(committeeMemberID) {
    axios
      .delete(`${API_URL}/committeeMembers/${committeeMemberID}`)
      .then((response) => {
        console.log(response);
        // Safely remove the event from local state
        setCommitteeMembers((prevEvents) => prevEvents.filter((e) => e._id !== committeeMemberID));
      })
      .catch((error) => console.log(error));
  }
  

  function getCommitteeMembers() {
    setLoading(true);

    axios
      .get(`${API_URL}/committeeMembers`)
      .then((response => {
        setCommitteeMembers(response.data);
        console.log(`Committee Members: ${committeeMembers}`)
        setLoading(false);
      }))

  }

  function addCommitteeMember(newCommitteeMember) {
    axios
      .post(`${API_URL}/committeeMembers`, newCommitteeMember)
      .then(function (response) { console.log(response) })
      .catch(function (error) { console.log(error) });
    getCommitteeMembers()
  }

  useEffect(() => {
    getCommitteeMembers();
  }, [])

  return { committeeMembers, loading, deleteCommitteeMember, addCommitteeMember }

};

export default useCommitteeMembers;
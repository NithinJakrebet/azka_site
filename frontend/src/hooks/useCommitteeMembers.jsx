import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const useCommitteeMembers = () => {

      const [committeeMembers, setCommitteeMembers] = useState([]);
      const [loading, setLoading] = useState(false);
    
      useEffect(() => {
        setLoading(true);
    
        axios
          .get(`${API_URL}/committeeMembers`)
          .then((response => {
            setCommitteeMembers(response.data);
            console.log(`Committee Members: ${committeeMembers}`)
            setLoading(false);
          }))
      }, [])

      return { committeeMembers, loading }

};

export default useCommitteeMembers;
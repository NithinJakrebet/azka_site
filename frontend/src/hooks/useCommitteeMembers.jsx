import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const useCommitteeMembers = () => {

      const [committeeMembers, setCommitteeMembers] = useState([]);
      const [loading, setLoading] = useState(false);
    
      useEffect(() => {
        setLoading(true);
    
        axios
          .get('http://localhost:5555/committeeMembers')
          .then((response => {
            setCommitteeMembers(response.data);
            console.log(`Committee Members: ${committeeMembers}`)
            setLoading(false);
          }))
      }, [])

      return { committeeMembers, loading }

};

export default useCommitteeMembers;
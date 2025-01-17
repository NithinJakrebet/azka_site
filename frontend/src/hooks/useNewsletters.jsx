import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const useNewsletters = () => {

      const [newsletters, setNewsletters] = useState([]);
      const [loading, setLoading] = useState(false);
    
      useEffect(() => {
        setLoading(true);
    
        axios
          .get(`${API_URL}/newsletters`)
          .then((response => {
            setNewsletters(response.data);
            console.log(`Newsletters: ${newsletters}`)
            setLoading(false);
          }))
      }, [])

      return { newsletters, loading }

};

export default useNewsletters;
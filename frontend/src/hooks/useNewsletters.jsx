import { useState, useEffect } from "react";
import axios from "axios";

const useNewsletters = () => {

      const [newsletters, setNewsletters] = useState([]);
      const [loading, setLoading] = useState(false);
    
      useEffect(() => {
        setLoading(true);
    
        axios
          .get('http://localhost:5555/newsletters')
          .then((response => {
            setNewsletters(response.data);
            console.log(`Newsletters: ${newsletters}`)
            setLoading(false);
          }))
      }, [])

      return { newsletters, loading }

};

export default useNewsletters;
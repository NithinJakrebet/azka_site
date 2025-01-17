import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const useAlbums = () => {
      const [albums, setAlbums] = useState([]);
      const [loading, setLoading] = useState(false);
  
      useEffect(() => {
            setLoading(true);
      
            axios
                  .get(`${API_URL}/albums`)
                  .then((response => {
                        setAlbums(response.data);
                        console.log(`Albums: ${albums}`)
                        setLoading(false);
                  }))
    }, [])  

    return { albums, loading }
}

export default useAlbums;

    
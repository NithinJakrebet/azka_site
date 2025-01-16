import { useState, useEffect } from "react";
import axios from "axios";


const useAlbums = () => {
      const [albums, setAlbums] = useState([]);
      const [loading, setLoading] = useState(false);
  
      useEffect(() => {
            setLoading(true);
      
            axios
            .get('http://localhost:5555/albums')
            .then((response => {
                  setAlbums(response.data);
                  console.log(`Albums: ${albums}`)
                  setLoading(false);
            }))
    }, [])  

    return { albums, loading }
}

export default useAlbums;

    
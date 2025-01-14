import { useState, useEffect } from "react";
import axios from "axios";
import { ImageSlider } from "../components/ImageSlider.tsx";
import AnimatedPage from "../components/AnimatedPage.jsx";
// import { ALBUMS } from "../data/galleryData.jsx";

const Gallery = () => {

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
    
    
    return (
        <AnimatedPage>
            {albums.map((album, index) => (
                    <div className="slideshow_container">
                        <h1 className="title">{album.title}</h1>                        
                        {/* {album.link ? (
                            <a 
                                href={album.link}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="full-album-link"
                            >
                                Full Album
                            </a>
                        ) : null} */}
                        <div 
                             style={{
                                width: "100%",
                                aspectRatio: "11/6", 
                                margin: "0 auto",
                                overflow: "hidden",
                              }}
                        > 
                            <ImageSlider imageUrls={album.images} />
                        </div>
                    </div>
            ))}
        </AnimatedPage>
    );
}

export default Gallery;


import { ImageSlider } from "../components/gallery/ImageSlider.tsx"
import useAlbums from "../hooks/useAlbums.jsx";
import AnimatedPage from "../components/AnimatedPage.jsx";

const Gallery = () => {
    const { albums, loading } = useAlbums();

    if (loading) return <h1>Loading...</h1>

    
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

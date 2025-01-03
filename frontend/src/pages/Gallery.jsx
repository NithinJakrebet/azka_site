import { ImageSlider } from "../components/ImageSlider.tsx";
import '../styling/pages.css';
import AnimatedPage from "../components/AnimatedPage.jsx";
import AppearOnScroll from "../components/AppearOnScroll";
import { ALBUMS } from "../data/galleryData.jsx";



export default function Gallery() {
    return (
        <AnimatedPage>
            {ALBUMS.map((album, index) => (
                <AppearOnScroll key={index}>
                    <div className="slideshow_container">
                        <h1 className="title">{album.title}</h1>
                        
                        {/* Render the link to the full album if available */}
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
                                maxWidth: "1000px",
                                width: "100%",
                                maxHeight: "500px",
                                aspectRatio: "11/6",
                                margin: "0 auto"
                            }}
                        > 
                            <ImageSlider imageUrls={album.images} />
                        </div>
                    </div>
                 </AppearOnScroll>
            ))}
        </AnimatedPage>
    );
}


import { ImageSlider } from "../components/ImageSlider.tsx";
import AnimatedPage from "../components/AnimatedPage.jsx";
import AppearOnScroll from "../components/AppearOnScroll";
import { ALBUMS } from "../data/galleryData.jsx";

export default function Gallery() {
    return (
        <AnimatedPage>
            {ALBUMS.map((album, index) => (
                // <AppearOnScroll key={index}>
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
                //  </AppearOnScroll>
            ))}
        </AnimatedPage>
    );
}


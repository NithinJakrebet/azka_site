
import { ImageSlider } from "../components/gallery/ImageSlider.tsx"
import useAlbums from "../hooks/useAlbums.jsx";
import AnimatedPage from "../components/aesthetics/AnimatedPage";
import AddButton from "../components/cms/AddButton.jsx";
import EditButton from "../components/cms/EditButton.jsx";
import DeleteButton from "../components/cms/DeleteButton.jsx";

const Gallery = () => {
    const { albums, loading, addAlbum, deleteAlbum, updateAlbum } = useAlbums();
    const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";


    if (loading) return <h1>Loading...</h1>

    // empty form for adding an album
    const emptyForm = {
        title: "",
        date:"",
        images: [],
        link: ""
    };
    
    // Form fields describing each input
    const formFields = [
        { label: "Title", name: "title", type: "text" },
        { label: "Date", name: "date", type: "date" },
        { label: "Images", name: "images", type: "dropzone", uploadType: "album", multiple: true },
        { label: "Link", name: "link", type: "text" },
      ];
      
  

    
    return (
        <AnimatedPage>
            {isInEditorMode &&
                <div style={{margin: "10px"}}>
                    <AddButton 
                        formFields={formFields} 
                        item="Album" 
                        addItem={addAlbum} 
                        emptyForm={emptyForm}
                        title="Add New Album"
                    />
                </div>
            }
            {albums.map((album, index) => (
                    <div className="slideshow_container">
                        <h1 className="title">{album.title}</h1>                        
                        {isInEditorMode && album.link ? (
                            <a 
                                href={album.link}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="full-album-link"
                            >
                                Full Album
                            </a>
                        ) : null}
                        {isInEditorMode &&
                            <div className="cms-container">
                                <EditButton
                                    formFields={formFields}
                                    item="Event"
                                    existingData={album}
                                    editItem={updateAlbum}
                                />
                                <DeleteButton
                                    onDelete={deleteAlbum}
                                    confirmMessage={`Are you sure you want to delete this: ${album.title}`}
                                    itemId={album._id}
                                    sx={{ backgroundColor: "#f092b6" }}
                                />
                            </div>
                        }
                        <div 
                            style={{
                                width: "95%",
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

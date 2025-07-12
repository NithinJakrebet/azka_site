import { ImageSlider } from "../components/gallery/organisms/ImageSlider";
import useAlbums from "../hooks/useAlbums";
import AnimatedPage from "../components/aesthetics/AnimatedPage";
import AddButton from "../components/cms/AddButton";
import EditButton from "../components/cms/EditButton";
import DeleteButton from "../components/cms/DeleteButton";
import { Box, Typography, CircularProgress, Container, Card, CardContent, CardActions, Button } from "@mui/material";

const Gallery = () => {
    const { albums, loading, addAlbum, deleteAlbum, updateAlbum } = useAlbums();
    const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress color="primary" size={60} />
            </Box>
        );
    }

    const emptyForm = {
        title: "",
        date: "",
        images: [],
        link: ""
    };
    
    const formFields = [
        { label: "Title", name: "title", type: "text" },
        { label: "Date", name: "date", type: "date" },
        { label: "Image URLs (comma-separated)", name: "images", type: "array" },
        { label: "Link to Full Album", name: "link", type: "text" }
    ];
  
    return (
        <AnimatedPage>
            <Container maxWidth="md" sx={{ py: 4 }}>
                <Typography variant="h2" component="h1" align="center" gutterBottom>
                    Photo Gallery
                </Typography>
                {isInEditorMode &&
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                        <AddButton 
                            formFields={formFields} 
                            item="Album" 
                            addItem={addAlbum} 
                            emptyForm={emptyForm}
                        />
                    </Box>
                }
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {albums.map((album) => (
                        <Card key={album._id}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h4" component="h2" gutterBottom>
                                    {album.title}
                                </Typography>
                                {isInEditorMode &&
                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                                        <EditButton
                                            formFields={formFields}
                                            item="Album"
                                            existingData={album}
                                            editItem={updateAlbum}
                                        />
                                        <DeleteButton
                                            onDelete={deleteAlbum}
                                            confirmMessage={`Are you sure you want to delete the album: ${album.title}?`}
                                            itemId={album._id}
                                        />
                                    </Box>
                                }
                            </CardContent>
                            <Box sx={{ width: "100%", aspectRatio: "16/9" }}> 
                                <ImageSlider imageUrls={album.images} />
                            </Box>
                            {album.link && (
                                <CardActions sx={{ justifyContent: 'center', p: 2 }}>
                                    <Button 
                                        variant="contained"
                                        color="secondary"
                                        href={album.link}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        View Full Album
                                    </Button>
                                </CardActions>
                            )}
                        </Card>
                    ))}
                </Box>
            </Container>
        </AnimatedPage>
    );
}

export default Gallery;
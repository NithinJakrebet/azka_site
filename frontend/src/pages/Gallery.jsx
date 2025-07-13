import useAlbums from "../hooks/useAlbums";
import PageLayout from "../components/layout/PageLayout";
import AlbumCard from "../components/pages/gallery/AlbumCard";
import { Box } from "@mui/material";

const Gallery = () => {
  const { albums, loading, addAlbum, deleteAlbum, updateAlbum } = useAlbums();

  const formFields = [
    { label: "Title", name: "title", type: "text" },
    { label: "Date", name: "date", type: "date" },
    { label: "Image URLs (comma-separated)", name: "images", type: "array" },
    { label: "Link to Full Album", name: "link", type: "text" }
  ];

  const addButtonProps = {
    formFields,
    item: "Album",
    addItem: addAlbum,
    emptyForm: { title: "", date: "", images: [], link: "" },
  };

  return (
    <PageLayout
      pageTitle="Photo Gallery"
      loading={loading}
      addButtonProps={addButtonProps}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {albums.map((album) => (
          <AlbumCard
            key={album._id}
            album={album}
            formFields={formFields}
            onEdit={updateAlbum}
            onDelete={deleteAlbum}
          />
        ))}
      </Box>
    </PageLayout>
  );
}

export default Gallery;
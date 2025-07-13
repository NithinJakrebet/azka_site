import { ImageSlider } from "./ImageSlider";
import EditorActions from "../../cms/EditorActions";
import { Card, CardContent, CardActions, Button, Typography, Box } from "@mui/material";

const AlbumCard = ({ album, formFields, onEdit, onDelete }) => {
  return (
    <Card>
      <CardContent sx={{ textAlign: 'center', position: 'relative' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {album.title}
        </Typography>
        <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
          <EditorActions
            item="Album"
            existingData={album}
            editItem={onEdit}
            onDelete={onDelete}
            formFields={formFields}
            itemId={album._id}
            confirmMessage={`Are you sure you want to delete the album: ${album.title}?`}
          />
        </Box>
      </CardContent>
      <Box sx={{ width: "100%", aspectRatio: "16/9" }}>
        <ImageSlider imageUrls={album.images} />
      </Box>
      {album.link && (
        <CardActions sx={{ justifyContent: 'center', p: 2 }}>
          <Button
            variant="contained"
            color="primary"
            href={album.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Album
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default AlbumCard;
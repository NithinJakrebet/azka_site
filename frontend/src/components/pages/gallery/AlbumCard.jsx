import { ImageSlider } from "./ImageSlider";
import EditorActions from "../../cms/EditorActions";
import { Button, Typography } from "@mui/material";
import {
  StyledAlbumCard,
  AlbumCardContent,
  AlbumEditorActions,
  SliderWrapper,
  AlbumCardActions,
} from "./styles";

const AlbumCard = ({ album, formFields, onEdit, onDelete }) => {
  return (
    <StyledAlbumCard>
      <AlbumCardContent>
        <Typography variant="h4" component="h2" gutterBottom>
          {album.title}
        </Typography>
        <AlbumEditorActions>
          <EditorActions
            item="Album"
            existingData={album}
            editItem={onEdit}
            onDelete={onDelete}
            formFields={formFields}
            itemId={album._id}
            confirmMessage={`Are you sure you want to delete the album: ${album.title}?`}
          />
        </AlbumEditorActions>
      </AlbumCardContent>
      <SliderWrapper>
        <ImageSlider imageUrls={album.images} />
      </SliderWrapper>
      {album.link && (
        <AlbumCardActions>
          <Button
            variant="contained"
            color="primary"
            href={album.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Album
          </Button>
        </AlbumCardActions>
      )}
    </StyledAlbumCard>
  );
};

export default AlbumCard;
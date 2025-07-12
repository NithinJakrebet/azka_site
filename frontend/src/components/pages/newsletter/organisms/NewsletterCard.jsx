import useNewsletters from "../../../../hooks/useNewsletters";
import EditButton from "../../../cms/EditButton";
import DeleteButton from "../../../cms/DeleteButton";
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography } from "@mui/material";

const NewsletterCard = ({ newsletter, formFields }) => {
  const { deleteNewsletter, updateNewsletter } = useNewsletters();
  const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea
        href={newsletter.pdfURL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ flexGrow: 1 }}
      >
        <CardMedia
          component="img"
          height="400"
          image={newsletter.imgURL}
          alt={newsletter.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {newsletter.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {isInEditorMode && (
        <CardActions sx={{ justifyContent: 'center', p: 2 }}>
          <EditButton
            formFields={formFields}
            item="Newsletter"
            existingData={newsletter}
            editItem={updateNewsletter}
          />
          <DeleteButton
            onDelete={deleteNewsletter}
            confirmMessage={`Are you sure you want to delete this Newsletter: ${newsletter.title}?`}
            itemId={newsletter._id}
          />
        </CardActions>
      )}
    </Card>
  );
};

export default NewsletterCard;
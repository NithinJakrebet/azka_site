import useNewsletters from "../../../hooks/useNewsletters";
import EditorActions from "../../cms/EditorActions";
import {
  StyledCard,
  StyledCardActionArea,
  StyledCardMedia,
  EditorActionsContainer,
} from "./styles";
import { CardContent, Typography } from "@mui/material";

const NewsletterCard = ({ newsletter, formFields }) => {
  const { deleteNewsletter, updateNewsletter } = useNewsletters();

  return (
    <StyledCard>
      <StyledCardActionArea
        href={newsletter.pdfURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledCardMedia
          component="img"
          image={newsletter.imgURL}
          alt={newsletter.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {newsletter.title}
          </Typography>
        </CardContent>
      </StyledCardActionArea>
      <EditorActionsContainer>
        <EditorActions
          editItem={updateNewsletter}
          deleteItem={deleteNewsletter}
          itemId={newsletter._id}
          formFields={formFields}
          existingData={newsletter}
          item="Newsletter"
          confirmMessage={`Are you sure you want to delete the newsletter: ${newsletter.title}?`}
        />
      </EditorActionsContainer>
    </StyledCard>
  );
};

export default NewsletterCard;
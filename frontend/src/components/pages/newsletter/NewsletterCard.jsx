import useNewsletters from "../../../hooks/useNewsletters";
import EditorActions from "../../cms/EditorActions";
import {
  StyledCard,
  StyledCardActionArea,
  StyledCardMedia,
  StyledCardContent,
  TitleTypography,
  EditorActionsContainer,
} from "./styles";

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
        <StyledCardContent>
          <TitleTypography gutterBottom variant="h5" component="div">
            {newsletter.title}
          </TitleTypography>
        </StyledCardContent>
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
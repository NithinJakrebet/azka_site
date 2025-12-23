import useCommitteeMembers from "../../../hooks/useCommitteeMembers";
import EditorActions from "../../cms/EditorActions"; 
import {
  StyledCardGrid,
  AvatarContainer,
  StyledAvatar,
  InfoContainer,
  NameTypography,
} from "./styles";

const CommitteeMemberCard = ({ member, formFields }) => {
  const { deleteCommitteeMember, updateCommitteeMember } = useCommitteeMembers();

  const handleImageError = (e) => {
    console.error(`Failed to load image for ${member.name}:`, member.imageUrl);
    // Use a data URL for a gray placeholder with text
    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="300" height="300" fill="%23cccccc"/><text x="50%" y="50%" font-family="Arial" font-size="16" fill="%23666666" text-anchor="middle" dy=".3em">Image Unavailable</text></svg>';
  };

  return (
    <StyledCardGrid container spacing={2} direction="column">
      <AvatarContainer item xs={12}>
        <StyledAvatar 
          src={member.imageUrl} 
          alt={member.name}
          onError={handleImageError}
        />
      </AvatarContainer>
      <InfoContainer item xs={12}>
        <NameTypography variant="h5" component="h2" gutterBottom>
          {member.name}
        </NameTypography>
        <EditorActions
          formFields={formFields}
          item="Committee Member"
          existingData={member}
          editItem={updateCommitteeMember}
          onDelete={deleteCommitteeMember}
          confirmMessage={`Are you sure you want to delete ${member.name}?`}
          itemId={member._id}
        />
      </InfoContainer>
    </StyledCardGrid>
  );
};

export default CommitteeMemberCard;
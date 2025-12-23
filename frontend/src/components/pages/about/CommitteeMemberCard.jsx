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

  return (
    <StyledCardGrid container spacing={2} direction="column">
      <AvatarContainer item xs={12}>
        <StyledAvatar src={member.imageUrl} alt={member.name} />
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
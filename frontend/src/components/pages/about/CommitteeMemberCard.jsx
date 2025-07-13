import useCommitteeMembers from "../../../hooks/useCommitteeMembers";
import MemberInfo from "./atoms/MemberInfo";
import EditorActions from "../../cms/EditorActions"; 
import {
  StyledCardGrid,
  AvatarContainer,
  StyledAvatar,
  InfoContainer,
} from "./styles";

const CommitteeMemberCard = ({ member, formFields }) => {
  const { deleteCommitteeMember, updateCommitteeMember } = useCommitteeMembers();

  return (
    <StyledCardGrid container spacing={4}>
      <AvatarContainer item xs={12} md={4}>
        <StyledAvatar src={member.imageUrl} alt={member.name} />
      </AvatarContainer>
      <InfoContainer item xs={12} md={8}>
        <MemberInfo name={member.name} position={member.position} bio={member.bio} />
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
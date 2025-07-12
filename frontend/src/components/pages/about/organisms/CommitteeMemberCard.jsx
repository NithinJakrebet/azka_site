import useCommitteeMembers from "../../../../hooks/useCommitteeMembers";
import MemberInfo from "../molecules/MemberInfo";
import EditButton from "../../../cms/EditButton";
import DeleteButton from "../../../cms/DeleteButton";
import { Box, Avatar, Grid2 as Grid } from "@mui/material";

const CommitteeMemberCard = ({ member, formFields }) => {
  const { deleteCommitteeMember, updateCommitteeMember } = useCommitteeMembers();
  const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";

  return (
    <Grid container spacing={4} alignItems="center" sx={{ justifyContent: 'center' }}>
      <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar
          src={member.imageUrl}
          alt={member.name}
          sx={{
            width: 400,
            height: 400,
            border: '4px solid',
            borderColor: 'primary.dark',
          }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <MemberInfo name={member.name} position={member.position} bio={member.bio} />
        {isInEditorMode && (
          <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <EditButton
              formFields={formFields}
              item="Committee Member"
              existingData={member}
              editItem={updateCommitteeMember}
            />
            <DeleteButton
              onDelete={deleteCommitteeMember}
              confirmMessage={`Are you sure you want to delete ${member.name}?`}
              itemId={member._id}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default CommitteeMemberCard;
import useCommitteeMembers from "../hooks/useCommitteeMembers";
import CommitteeMemberCard from "../components/pages/about/CommitteeMemberCard.jsx";
import PageLayout from "../components/layout/PageLayout"; // Import the new layout
import { formConfig } from "../constants"; // Import the new form config
import { Grid2 as Grid } from "@mui/material";

const About = () => {
  const { committeeMembers, loading, addCommitteeMember } = useCommitteeMembers();

  const committeeMemberConfig = formConfig.committeeMember;

  const addButtonProps = {
    ...committeeMemberConfig,
    addItem: addCommitteeMember,
  };

  return (
    <PageLayout
      pageTitle="Executive Committee"
      loading={loading}
      addButtonProps={addButtonProps}
    >
      <Grid container spacing={4}>
        {committeeMembers.map((member) => (
          <Grid size={{ xs: 12, md: 6 }} key={member._id}>
            <CommitteeMemberCard
              member={member}
              formFields={committeeMemberConfig.formFields}
            />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default About;
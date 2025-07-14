import AppearOnScroll from "../components/aesthetics/AppearOnScroll";
import useCommitteeMembers from "../hooks/useCommitteeMembers";
import CommitteeMemberCard from "../components/pages/about/CommitteeMemberCard.jsx";
import PageLayout from "../components/layout/PageLayout"; // Import the new layout
import { formConfig } from "../constants"; // Import the new form config
import { Divider, Stack } from "@mui/material";

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
      <Stack divider={<Divider orientation="horizontal" flexItem sx={{ my: 2 }} />}>
        {committeeMembers.map((member) => (
          <AppearOnScroll key={member._id}>
            <CommitteeMemberCard
              member={member}
              formFields={committeeMemberConfig.formFields}
            />
          </AppearOnScroll>
        ))}
      </Stack>
    </PageLayout>
  );
};

export default About;
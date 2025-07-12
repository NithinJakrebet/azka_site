import AppearOnScroll from "../components/aesthetics/AppearOnScroll";
import useCommitteeMembers from "../hooks/useCommitteeMembers";
import CommitteeMemberCard from "../components/pages/about/organisms/CommitteeMemberCard.jsx"; // Updated import
import AddButton from "../components/cms/AddButton";
import { Box, Typography, CircularProgress, Container, Divider, Stack } from "@mui/material";
import PageContainer from "../components/layout/PageContainer.jsx"

const About = () => {
  const { committeeMembers, loading, addCommitteeMember } = useCommitteeMembers();
  const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";

  const emptyForm = {
    name: "",
    position: "",
    bio: "",
    imageUrl: "",
  };

  const formFields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Position", name: "position", type: "text" },
    { label: "Bio", name: "bio", type: "text", multiline: true, rows: 4 },
    { label: "Image URL", name: "imageUrl", type: "text" },
  ];

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress color="primary" size={60} />
      </Box>
    );
  }

  return (
      <PageContainer>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Executive Committee
        </Typography>

        {isInEditorMode && (
          <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
            <AddButton
              formFields={formFields}
              item="Committee Member"
              addItem={addCommitteeMember}
              emptyForm={emptyForm}
            />
          </Box>
        )}

        <Stack
          divider={<Divider orientation="horizontal" flexItem sx={{ my: 2 }} />}
          spacing={4}
        >
          {committeeMembers.map((member) => (
            <AppearOnScroll key={member._id}>
              <CommitteeMemberCard member={member} formFields={formFields} />
            </AppearOnScroll>
          ))}
        </Stack>
      </PageContainer>
  );
};

export default About;
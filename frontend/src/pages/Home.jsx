import UpcomingEvents from "../components/pages/home/molecules/UpcomingEvents";
import ArchivedEvents from "../components/pages/home/molecules/ArchivedEvents";
import AnimatedPage from "../components/aesthetics/AnimatedPage";
import {  Box, Divider } from "@mui/material";
import PageContainer from "../components/layout/PageContainer";
import PageTitle from "../components/layout/PageTitle";

const Home = () => {
  const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";

  return (
    <AnimatedPage>
      <PageContainer>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <PageTitle>
            Welcome to AZ Konkanis
          </PageTitle>
        </Box>
        <UpcomingEvents isInEditorMode={isInEditorMode}/>
        <Divider sx={{ my: 5 }} />
        <ArchivedEvents />
      </PageContainer>
    </AnimatedPage>
  );
};

export default Home;
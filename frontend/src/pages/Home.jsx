import UpcomingEvents from "../components/home/UpcomingEvents";
import ArchivedEvents from "../components/home/ArchivedEvents";
import AnimatedPage from "../components/aesthetics/AnimatedPage";
import { Container, Box, Typography, Divider } from "@mui/material";

const Home = () => {
  return (
    <AnimatedPage>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to AZ Konkanis
          </Typography>
        </Box>
        <UpcomingEvents />
        <Divider sx={{ my: 5 }} />
        <ArchivedEvents />
      </Container>
    </AnimatedPage>
  );
};

export default Home;
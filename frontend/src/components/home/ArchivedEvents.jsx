import useEvents from "../../hooks/useEvents";
import EventCard from "./atoms/EventCard"; // Import the new component
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ArchivedEvents = () => {
  const { archivedEvents } = useEvents();

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Archived Events
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="archived-events-content"
          id="archived-events-header"
        >
          <Typography variant="h5">View Archived Events</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {archivedEvents.length === 0 ? (
            <Typography>No archived events.</Typography>
          ) : (
            <Stack spacing={2}>
              {archivedEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </Stack>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ArchivedEvents;
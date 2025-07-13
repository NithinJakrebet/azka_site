import EventCard from "../atoms/EventCard";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ArchivedEvents = ({ archivedEvents }) => {
  return (
    <>
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
    </>
  );
};

export default ArchivedEvents;
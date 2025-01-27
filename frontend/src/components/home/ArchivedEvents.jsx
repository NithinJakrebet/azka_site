import { formatTime, formatDate } from "../../util/formatting";
import useEvents from "../../hooks/useEvents";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../styling/home.css"

const ArchivedEvents = () => {
  const { archivedEvents } = useEvents();

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Archived Events</h2>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3 style={{ textAlign: "center" }}>View Archived Events</h3>
        </AccordionSummary>
        <AccordionDetails>
          {archivedEvents.length === 0 ? (
            <p>No archived events.</p>
          ) : (
            archivedEvents.map((event) => (
              <div key={event._id} className="card">
                <h2>{event.title}</h2>
                <h3>{event.description}</h3>
                <h4>{formatDate(event.date)}</h4>
                <h4>{formatTime(event.startTime, event.endTime)}</h4>
                <h4>{event.location}</h4>
              </div>
            ))
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ArchivedEvents;

import { formatTime, formatDate } from "../../util/formatting";
import useEvents from "../../hooks/useEvents";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
              <div
                key={event._id}
                style={{
                  marginBottom: "20px",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Lighter shadow
                  background: "linear-gradient(to right, #f8f9fa, #e9ecef)", // Muted gradient
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                <h2 style={{ margin: "0 0 10px 0", color: "#495057" }}>{event.title}</h2>
                <h3 style={{ margin: "0 0 10px 0", color: "#6c757d" }}>{event.description}</h3>
                <h4 style={{ margin: "0 0 10px 0", color: "#adb5bd" }}>{formatDate(event.date)}</h4>
                <h4 style={{ margin: "0 0 10px 0", color: "#adb5bd" }}>
                  {formatTime(event.startTime, event.endTime)}
                </h4>
                <h4 style={{ margin: "0 0 20px 0", color: "#ced4da" }}>{event.location}</h4>
              </div>
            ))
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ArchivedEvents;

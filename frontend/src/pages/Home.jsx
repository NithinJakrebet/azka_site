import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styling/pages.css";

function formatDate(date) {
  const [year, month, day] = date.split("T")[0].split("-").map(Number); // Extract date parts
  const parsedDate = new Date(year, month - 1, day); // Create a local Date object

  return parsedDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatTime(startTimeString, endTimeString) {
  if (!startTimeString && !endTimeString) return "Time: TBD";

  const format = (time) => {
    if (!time) return "TBD";
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 or 12+ hour to 12-hour format
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  };

  const startFormatted = format(startTimeString);
  const endFormatted = format(endTimeString);

  return `${startFormatted} - ${endFormatted}`;
}





const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/events")
      .then((response) => {
        const returnedData = response.data?.data;
        // Only set events if returnedData is an array
        setEvents(Array.isArray(returnedData) ? returnedData : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  // Separate events into upcoming and archived, and sort upcoming events by date
  const { upcomingEvents, archivedEvents } = useMemo(() => {
    const now = new Date();
    const upcoming = [];
    const archived = [];

    events.forEach((event) => {
      const eventDate = new Date(event.date);
      if (eventDate < now) {
        archived.push(event);
      } else {
        upcoming.push(event);
      }
    });

    // Sort upcoming events by date (ascending)
    upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));

    return { upcomingEvents: upcoming, archivedEvents: archived };
  }, [events]);

  if (loading) return <p>Loading events...</p>;
  if (events.length === 0) return <p>No events found.</p>;

  return (
    <div style={{ padding: "1rem" }} className="text_box">
      <h1>Upcoming Events</h1>
      {upcomingEvents.map((event) => (
        <div key={event._id} style={{ marginBottom: "1rem" }}>
          <h2>{event.title}</h2>
          <h3>{event.description}</h3>
          <h4>{formatDate(event.date)}</h4>
          <h4>{formatTime(event.startTime, event.endTime)}</h4>
          <h4>{event.location}</h4>
        </div>
      ))}

      <h2>Archived Events</h2>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>View Archived Events</h3>
        </AccordionSummary>
        <AccordionDetails>
          {archivedEvents.length === 0 ? (
            <p>No archived events.</p>
          ) : (
            archivedEvents.map((event) => (
              <div key={event._id} style={{ marginBottom: "1rem" }}>
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
    </div>
  );
};

export default Home;


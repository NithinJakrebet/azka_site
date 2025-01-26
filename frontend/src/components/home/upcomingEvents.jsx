import { formatTime, formatDate } from "../../util/formatting";
import useEvents from "../../hooks/useEvents";
import AddToCalendarButton from "./AddtoCalendarButton";
import AddEvent from "./AddEvent";

const UpcomingEvents = () => {
  const { upcomingEvents } = useEvents();

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Upcoming Events</h1>
      <AddEvent />
      {upcomingEvents.map((event) => (
        <div
          key={event._id}
          style={{
            marginBottom: "40px",
            padding: "20px",
            borderRadius: "8px",
            border: "2px solid #000", // This line sets the border to 2px, solid, black
            backgroundColor: "#FFFFFF",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <h2>{event.title}</h2>
          <h3>{event.description}</h3>
          <h4>{formatDate(event.date)}</h4>
          <h4>{formatTime(event.startTime, event.endTime)}</h4>
          <h4>{event.location}</h4>
          <AddToCalendarButton event={event} />
        </div>
      ))}
    </>
  );
};

export default UpcomingEvents;

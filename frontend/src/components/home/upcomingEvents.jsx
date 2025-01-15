import { formatTime, formatDate } from "../../util/formatting";
import useEvents from "../../hooks/useEvents";
import AddToCalendarButton from "./AddtoCalendarButton";

const UpcomingEvents = () => {
  const { upcomingEvents } = useEvents();

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Upcoming Events</h1>
      {upcomingEvents.map((event) => (
        <div
          key={event._id}
          style={{
            marginBottom: "40px",
            padding: "20px",
            borderRadius: "8px",
            // backgroundColor: ""
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Modern shadow
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 1, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
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

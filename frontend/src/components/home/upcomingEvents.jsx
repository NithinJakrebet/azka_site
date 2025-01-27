import { formatTime, formatDate } from "../../util/formatting";
import useEvents from "../../hooks/useEvents";
import AddEvent from "./AddEvent"
import AddToCalendarButton from "./AddtoCalendarButton"
import DeleteEvent from "./DeleteEvent";
import "../../styling/home.css"

const UpcomingEvents = () => {
  const { upcomingEvents } = useEvents();

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Upcoming Events</h1>
      <AddEvent />
      {upcomingEvents.map((event) => (
        <div className="card" key={event._id}>
          <DeleteEvent event={event} />

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

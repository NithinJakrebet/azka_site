import { formatTime, formatDate } from "../../util/formatting";
import useEvents from "../../hooks/useEvents";
import AddEvent from "./AddEvent"
import AddToCalendarButton from "./AddtoCalendarButton"
import DeleteButton from "../DeleteButton";
import "../../styling/home.css"

const UpcomingEvents = () => {
  const { upcomingEvents, deleteEvent } = useEvents();

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Upcoming Events</h1>
      <AddEvent />
      {upcomingEvents.map((event) => (
        <div className="card" key={event._id}>
          <DeleteButton
            onDelete={deleteEvent}
            confirmMessage = "Are you sure you want to delete this event?"
            itemId={event._id}
            sx={{ position: "absolute", top: 8, right: 8 }}
          />
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

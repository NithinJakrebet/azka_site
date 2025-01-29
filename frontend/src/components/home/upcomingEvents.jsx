import { formatTime, formatDate } from "../../util/formatting";
import useEvents from "../../hooks/useEvents";
import AddToCalendarButton from "./AddtoCalendarButton"
import DeleteButton from "../cms/DeleteButton";
import "../../styling/home.css"
import AddButton from "../cms/AddButton";
import EditButton from "../cms/EditButton";

const UpcomingEvents = () => {

  const { upcomingEvents, deleteEvent, addEvent, updateEvent } = useEvents();

  // empty form for adding event
  const emptyForm = {
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
  };

  // form fields for adding event
  const formFields = [
    { label: "Event Title", name: "title", type: "text" },
    { label: "Description", name: "description", type: "text", multiline: true, rows: 4 },
    { label: "Date", name: "date", type: "date" },
    { label: "Start Time", name: "startTime", type: "time" },
    { label: "End Time", name: "endTime", type: "time" },
    { label: "Location", name: "location", type: "text" },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Upcoming Events</h1>

      <AddButton 
        formFields={formFields} 
        item="Event" 
        addItem={addEvent} 
        emptyForm={emptyForm}
      />

      {upcomingEvents.map((event) => (
        <div className="card" key={event._id}>

          <DeleteButton
            onDelete={deleteEvent}
            confirmMessage = "Are you sure you want to delete this event?"
            itemId={event._id}
            sx={{ 
              position: "absolute", 
              top: 8, 
              right: 8,
            }}
          />

          <h2>{event.title}</h2>
          <h3>{event.description}</h3>
          <h4>{formatDate(event.date)}</h4>
          <h4>{formatTime(event.startTime, event.endTime)}</h4>
          <h4>{event.location}</h4>

          <EditButton
            formFields={formFields}
            item="Event"
            existingData={event}
            editItem={updateEvent}
            sx={{ 
              position: "absolute", 
              top: 8, 
              left: 8,
            }}
          />

          <AddToCalendarButton event={event} />
        </div>
      ))}
    </>
  );
};

export default UpcomingEvents;

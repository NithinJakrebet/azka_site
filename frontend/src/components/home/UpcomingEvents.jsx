import useEvents from "../../hooks/useEvents";
import AddToCalendarButton from "./AddtoCalendarButton";
import AddButton from "../cms/AddButton";
import EventCard from "./atoms/EventCard"; // Import the new component
import { Typography, Box, Stack } from "@mui/material";

const UpcomingEvents = () => {
  const { upcomingEvents, deleteEvent, addEvent, updateEvent } = useEvents();
  const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";

  const emptyForm = {
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
  };

  const formFields = [
    { label: "Event Title", name: "title", type: "text" },
    { label: "Description", name: "description", type: "text", multiline: true, rows: 4 },
    { label: "Date", name: "date", type: "date" },
    { label: "Start Time", name: "startTime", type: "time" },
    { label: "End Time", name: "endTime", type: "time" },
    { label: "Location", name: "location", type: "text" },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Upcoming Events
      </Typography>
      {isInEditorMode && (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <AddButton
            formFields={formFields}
            item="Event"
            addItem={addEvent}
            emptyForm={emptyForm}
          />
        </Box>
      )}
      <Stack spacing={2}>
        {upcomingEvents.map((event) => (
          <EventCard
            key={event._id}
            event={event}
            isInEditorMode={isInEditorMode}
            formFields={formFields}
            onEdit={updateEvent}
            onDelete={deleteEvent}
            actions={<AddToCalendarButton event={event} />}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default UpcomingEvents;
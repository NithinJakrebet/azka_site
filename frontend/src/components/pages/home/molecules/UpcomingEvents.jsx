import AddToCalendarButton from "../AddtoCalendarButton";
import EventCard from "../atoms/EventCard";
import { Stack, Typography } from "@mui/material";

const UpcomingEvents = ({ events, formFields, onEdit, onDelete }) => {
  return (
    <>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Upcoming Events
      </Typography>
      <Stack spacing={2}>
        {events.map((event) => (
          <EventCard
            key={event._id}
            event={event}
            formFields={formFields}
            onEdit={onEdit}
            onDelete={onDelete}
            actions={<AddToCalendarButton event={event} />}
          />
        ))}
      </Stack>
    </>
  );
};

export default UpcomingEvents;
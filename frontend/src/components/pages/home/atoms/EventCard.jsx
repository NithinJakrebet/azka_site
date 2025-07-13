import EditorActions from "../../../cms/EditorActions";
import { formatTime, formatDate } from "../../../../util/formatting";
import {
  StyledEventCard,
  StyledCardContent,
  CardEditorActions,
  EventDescription,
  EventDetail,
  StyledCardActions,
} from "../styles";
import { Typography } from "@mui/material";

// The isInEditorMode prop is no longer needed here
const EventCard = ({ event, formFields, onEdit, onDelete, actions }) => {
  return (
    <StyledEventCard>
      <StyledCardContent>
        {/* The conditional wrapper is removed. EditorActions handles its own visibility. */}
        <CardEditorActions>
          <EditorActions
            formFields={formFields}
            item="Event"
            existingData={event}
            editItem={onEdit}
            onDelete={onDelete}
            confirmMessage="Are you sure you want to delete this event?"
            itemId={event._id}
          />
        </CardEditorActions>
        
        <Typography variant="h4" component="div" gutterBottom>
          {event.title}
        </Typography>
        <EventDescription variant="body1" color="text.secondary">
          {event.description}
        </EventDescription>
        <EventDetail variant="body1">
          <strong>Date:</strong> {formatDate(event.date)}
        </EventDetail>
        <EventDetail variant="body1">
          <strong>Time:</strong> {formatTime(event.startTime, event.endTime)}
        </EventDetail>
        <EventDetail variant="body1">
          <strong>Location:</strong> {event.location}
        </EventDetail>
      </StyledCardContent>
      {actions && <StyledCardActions>{actions}</StyledCardActions>}
    </StyledEventCard>
  );
};

export default EventCard;
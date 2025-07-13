import EditorActions from "../../../cms/EditorActions";
import { formatTime, formatDate } from "../../../../util/formatting";
import {
  StyledEventCard,
  CardEditorActions,
  EventDescription,
  StyledCardActions,
} from "../styles";
import { Typography, CardContent } from "@mui/material";

const EventCard = ({ event, formFields, onEdit, onDelete, actions }) => {
  return (
    <StyledEventCard>
      <CardContent>
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
        <Typography variant="body1">
          <strong>Date:</strong> {formatDate(event.date)}
        </Typography>
        <Typography variant="body1">
          <strong>Time:</strong> {formatTime(event.startTime, event.endTime)}
        </Typography>
        <Typography variant="body1">
          <strong>Location:</strong> {event.location}
        </Typography>
      </CardContent>
      {actions && <StyledCardActions>{actions}</StyledCardActions>}
    </StyledEventCard>
  );
};

export default EventCard;
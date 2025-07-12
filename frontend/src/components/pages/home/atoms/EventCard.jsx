import { Card, CardContent, CardActions, Typography, Box } from "@mui/material";
import EditButton from "../../../cms/EditButton";
import DeleteButton from "../../../cms/DeleteButton";
import { formatTime, formatDate } from "../../../../util/formatting";

const EventCard = ({ event, isInEditorMode, formFields, onEdit, onDelete, actions }) => {
  return (
    <Card >
      <CardContent sx={{ textAlign: 'center' }}>
        {isInEditorMode && (
          <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 1 }}>
            <EditButton
              formFields={formFields}
              item="Event"
              existingData={event}
              editItem={onEdit}
            />
            <DeleteButton
              onDelete={onDelete}
              confirmMessage="Are you sure you want to delete this event?"
              itemId={event._id}
            />
          </Box>
        )}
        <Typography variant="h4" component="div" gutterBottom>
          {event.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {event.description}
        </Typography>
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
      {actions && <CardActions sx={{ justifyContent: 'center', pb: 2 }}>{actions}</CardActions>}
    </Card>
  );
};

export default EventCard;
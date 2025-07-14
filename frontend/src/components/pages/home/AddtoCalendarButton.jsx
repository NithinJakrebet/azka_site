import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Button } from '@mui/material';

const AddToCalendarButton = ({ event }) => {
  // Return null or a disabled button if the event object is missing entirely.
  if (!event) {
    return null; 
  }

  const createICSFile = () => {
    const {
      title = 'Untitled Event',
      date,
      startTime,
      endTime,
      location = '',
      description = ''
    } = event;

    const eventDate = date ? new Date(date) : new Date();
    const eventDateString = eventDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

    const formatICSDate = (dateObj) => {
      return dateObj.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };
    
    const startDateTime = new Date(`${eventDateString}T${startTime || '10:00'}:00`);
    const endDateTime = new Date(`${eventDateString}T${endTime || '11:00'}:00`);
    
    const creationTimestamp = formatICSDate(new Date());

    const escapeICS = (str) => {
      return String(str).replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");
    };

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `SUMMARY:${escapeICS(title)}`,
      `DESCRIPTION:${escapeICS(description)}`,
      `DTSTART:${formatICSDate(startDateTime)}`,
      `DTEND:${formatICSDate(endDateTime)}`,
      `DTSTAMP:${creationTimestamp}`,
      `UID:${creationTimestamp}-${escapeICS(title)}@azka.com`,
      `LOCATION:${escapeICS(location)}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    // Create Blob and trigger download
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.replace(/\s+/g, "_")}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={createICSFile}
      startIcon={<EventAvailableIcon />}
    >
      Add to Calendar
    </Button>
  );
};

export default AddToCalendarButton;
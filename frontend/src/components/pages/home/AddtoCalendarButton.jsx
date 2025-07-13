import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { StyledCalendarButton } from './styles';

const AddToCalendarButton = ({ event }) => {
  const createICSFile = () => {
    const { title, date, startTime, endTime, location, description } = event;

    // Parse date and time into ISO format
    const startDateTime = new Date(`${date.split("T")[0]}T${startTime || "10:00"}:00`);
    const endDateTime = new Date(`${date.split("T")[0]}T${endTime || "11:00"}:00`);

    // Format dates for ICS (YYYYMMDDTHHMMSS)
    const formatICSDate = (date) => {
      const pad = (num) => String(num).padStart(2, "0");
      return `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(
        date.getUTCHours()
      )}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`;
    };

    const icsContent = `
      BEGIN:VCALENDAR
      VERSION:2.0
      CALSCALE:GREGORIAN
      BEGIN:VEVENT
      SUMMARY:${title}
      DESCRIPTION:${description}
      DTSTART:${formatICSDate(startDateTime)}
      DTEND:${formatICSDate(endDateTime)}
      LOCATION:${location || ""}
      END:VEVENT
      END:VCALENDAR
      `.trim();

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
    <StyledCalendarButton
      variant="contained"
      color="primary"
      onClick={createICSFile}
      startIcon={<EventAvailableIcon />}
    >
      Add to Calendar
    </StyledCalendarButton>
  );
};

export default AddToCalendarButton;
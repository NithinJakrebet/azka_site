import { useMemo } from "react";
import '../styling/pages.css';
import AnimatedPage from "../components/AnimatedPage.jsx";
import AppearOnScroll from "../components/AppearOnScroll";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { allEvents } from "../data/events";


/**
 * Returns a JavaScript Date if `dateStr` is valid, otherwise null.
 * Expects dateStr like "2025-01-25" or "January 25, 2025".
 */
function parseDate(dateStr) {
  if (!dateStr) return null;

  // Split the date string into year, month, and day
  const [year, month, day] = dateStr.split("-").map(Number);

  // Construct a date in the local time zone without any time zone conversion
  const dt = new Date(year, month - 1, day); // Month is zero-based in JS Date
  return isNaN(dt.getTime()) ? null : dt;
}


/**
 * Convert a date string (YYYY-MM-DD) to "Month DaySuffix, Year" 
 * e.g. "2025-01-25" => "January 25th, 2025".
 */
function formatDate(dateStr) {
  const dt = parseDate(dateStr);
  
  if (!dt) return ""; 

  const months = [
    "January", "February", "March",
    "April", "May", "June", 
    "July", "August", "September",
    "October", "November", "December"
  ];

  // daySuffix helper
  const daySuffix = (day) => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  const year = dt.getFullYear();
  const monthName = months[dt.getMonth()];
  const day = dt.getDate();
  const suffix = daySuffix(day);

  return `${monthName} ${day}${suffix}, ${year}`;
}

/**
 * Convert "HH:mm" (24-hour) to "h:mma" in uppercase, e.g. "10:47AM".
 * If missing, return "TBD".
 */
function formatTime(timeStr) {
  if (!timeStr) return "TBD";
  const [hour, minute] = timeStr.split(":");
  if (!hour || !minute) return "TBD";

  let hr = parseInt(hour, 10);
  const min = parseInt(minute, 10);
  if (isNaN(hr) || isNaN(min)) return "TBD";

  const ampm = hr >= 12 ? "PM" : "AM";
  if (hr === 0) {
    hr = 12; // midnight is 12 AM
  } else if (hr > 12) {
    hr -= 12;
  }
  const minStr = min.toString().padStart(2, "0");

  return `${hr}:${minStr}${ampm}`;
}

/**
 * Build a combined time range, e.g. "2:40PM - 5:30PM", 
 * or "TBD - 5:30PM", "2:40PM - TBD", or "TBD" if both missing.
 */
function formatTimeRange(startTime, endTime) {
  const start = formatTime(startTime); 
  const end = formatTime(endTime);

  // both "TBD"
  if (start === "TBD" && end === "TBD") {
    return "TBD";
  }
  // if only start is known
  if (start !== "TBD" && end === "TBD") {
    return `${start} - TBD`;
  }
  // if only end is known
  if (start === "TBD" && end !== "TBD") {
    return `TBD - ${end}`;
  }
  // if both are known
  return `${start} - ${end}`;
}

/**
 * Combine date (YYYY-MM-DD) and time (HH:mm) into a JS Date.
 * If time missing, default to 10:00 or 11:00, etc.
 */
function buildDateTime(dateStr, timeStr, defaultTime = "10:00") {
  const dateObj = parseDate(dateStr);
  if (!dateObj) return null;

  const [hours, minutes] = (timeStr || defaultTime).split(":");
  const newDate = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate(),
    parseInt(hours, 10),
    parseInt(minutes, 10),
    0
  );
  return newDate;
}

// Create ICS text from event’s date/time data.

function createICSFileContent(event) {
  // Build start and end Date objects.
  const startDateTime = buildDateTime(event.date, event.startTime, "10:00");
  const endDateTime = buildDateTime(event.date, event.endTime, "11:00");

  const now = new Date();
  const icsStart = startDateTime || now;
  // If end is missing, default = start + 1 hour
  const icsEnd = endDateTime || new Date(icsStart.getTime() + 60 * 60 * 1000);

  // ICS format: YYYYMMDDTHHMMSS
  const toCalFormat = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = "00";
    return `${year}${month}${day}T${hours}${minutes}${seconds}`;
  };

  const start = toCalFormat(icsStart);
  const end = toCalFormat(icsEnd);

  return `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${event.title || ""}
DESCRIPTION:${event.description || ""}
DTSTART:${start}
DTEND:${end}
LOCATION:${event.location || ""}
END:VEVENT
END:VCALENDAR`;
}

// Trigger a download of the ICS file in the browser.

function downloadICSFile(event) {
  const icsContent = createICSFileContent(event);
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${(event.title || "event").replace(/\s+/g, "_")}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}


export default function Home() {
  // Separate upcoming vs archived
  const { upcomingEvents, archivedEvents } = useMemo(() => {
    const now = new Date();
    const upcoming = [];
    const archived = [];

    allEvents.forEach((event) => {
      const eventDate = parseDate(event.date);
      // If invalid or in the past -> archived
      if (!eventDate || eventDate < now) {
        archived.push(event);
      } else {
        upcoming.push(event);
      }
    });

    return { upcomingEvents: upcoming, archivedEvents: archived };
  }, []);

  return (
    <AnimatedPage>
        <div className="text_box">
          {/* Upcoming Events */}
          <h1>Upcoming Events</h1>
          {upcomingEvents.length === 0 ? (
            <p>No upcoming events at this time.</p>
          ) : (
            upcomingEvents.map((event, idx) => {
              const displayDate = formatDate(event.date);
              const timeRange = formatTimeRange(event.startTime, event.endTime);
              return (
                <div key={idx} style={{ marginBottom: "1.5rem" }}>
                  <h2>{event.title}</h2>
                  <h3>{event.description}</h3>
                  <h4>Date: {displayDate}</h4>
                  <h4>Time: {timeRange}</h4>
                  {event.location && <h4>Location: {event.location}</h4>}

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => downloadICSFile(event)}
                    style={{ marginTop: "0.5rem" }}
                  >
                    Add to Calendar
                  </Button>
                </div>
              );
            })
          )}

          {/* Archived Events */}
          <h2>Archived Events</h2>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Archived Events</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {archivedEvents.map((event, index) => {
                const displayDate = formatDate(event.date);
                const timeRange = formatTimeRange(event.startTime, event.endTime);
                return (
                  <div key={index} style={{ marginBottom: "1rem" }}>
                    <h3>{event.title}</h3>
                    <p>
                      {displayDate}
                      {timeRange === "TBD" 
                        ? ""         // omit time if entirely "TBD"
                        : `, ${timeRange}`
                      }
                    </p>
                    {event.description && <p>{event.description}</p>}
                  </div>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </div>
    </AnimatedPage>
  );
}

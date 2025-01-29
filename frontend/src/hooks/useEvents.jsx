import { useState, useEffect, useMemo } from "react";
import { GET, POST, PUT, DELETE } from "../util/CRUD";

const useEvents = () => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getEvents() {
    await GET({ 
      setItems: setEvents,
      setLoading: setLoading,
      route: 'events'
    })
  }
  
  async function addEvent(newEvent) {
    
    await POST({
      newItem: newEvent,
      route: 'events'
    })

    await getEvents()
  }
  
  async function updateEvent(updatedEvent) {

    await PUT({
      updatedItem: updatedEvent,
      route: "events",
      setItems: setEvents
    })

    await getEvents()
  }
  
  async function deleteEvent(eventID) {

    await DELETE({
      itemID: eventID,
      route: 'events',
      setItems: setEvents
    })
  }
  
  useEffect(() => { getEvents() }, []);





  const { upcomingEvents, archivedEvents } = useMemo(() => {
    const now = new Date();
    const upcoming = [];
    const archived = [];

    events.forEach((event) => {
      const eventEndDate = new Date(event.date);
      eventEndDate.setDate(eventEndDate.getDate() + 1); // Move to the next day
      eventEndDate.setHours(0, 0, 0, 0); // Set to midnight

      if (now >= eventEndDate) {
        archived.push(event);
      } else {
        upcoming.push(event);
      }
    });

    upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));

    return { upcomingEvents: upcoming, archivedEvents: archived };
  }, [events]);



  return { 
    events, 
    loading, 
    upcomingEvents, 
    archivedEvents,
    addEvent,
    deleteEvent,
    updateEvent 
  };

};

export default useEvents;

import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function getEvents() {
    try {
      console.log("API URL:", process.env.REACT_APP_API_URL);
      setLoading(true);
  
      const response = await axios.get(`${API_URL}/events`);
      const returnedData = response.data?.data;
  
      setEvents(Array.isArray(returnedData) ? returnedData : []);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError("Failed to load events. Please try again later.");
    } finally {
      setLoading(false);
    }
  }
  
  async function addEvent(newEvent) {
    try {
      const response = await axios.post(`${API_URL}/events`, newEvent);
      console.log("Event added:", response.data);
  
      // Refresh the event list after adding
      await getEvents();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  }
  
  async function updateEvent(updatedEvent) {
    const { _id, ...restOfEvent } = updatedEvent;
  
    if (!_id) {
      console.error("No _id provided in updatedEvent. Cannot update.");
      return;
    }
  
    try {
      const response = await axios.put(`${API_URL}/events/${_id}`, restOfEvent);
      console.log("Update successful:", response.data);
  
      // Refresh the event list after updating
      await getEvents();
    } catch (error) {
      console.error("Error updating event:", error);
    }
  }
  
  async function deleteEvent(eventID) {
    try {
      const response = await axios.delete(`${API_URL}/events/${eventID}`);
      console.log("Delete successful:", response.data);
  
      // Optimistically remove the event from the local state
      setEvents((prevEvents) => prevEvents.filter((e) => e._id !== eventID));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  }
  
  
  
  

  useEffect(() => {
    getEvents()
  }, []);


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
    error, 
    upcomingEvents, 
    archivedEvents,
    addEvent,
    deleteEvent,
    updateEvent 
  };

};

export default useEvents;

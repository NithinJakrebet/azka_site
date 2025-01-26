import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function getEvents() {
    axios
      .get(`${API_URL}/events`)
      .then((response) => {
        const returnedData = response.data?.data;
        setEvents(Array.isArray(returnedData) ? returnedData : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
        setLoading(false);
      });

      console.log("API URL:", process.env.REACT_APP_API_URL);

  }

  function addEvent(newEvent) {
    axios
      .post(`${API_URL}/events`, newEvent)
      .then(function (response) { console.log(response) })
      .catch(function (error) { console.log(error) });
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
    addEvent 
  };

};

export default useEvents;

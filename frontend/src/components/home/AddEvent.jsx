import { useState } from "react";
import { Button } from "@mui/material";
import EventForm from "./EventForm"; // Import the form component
import useEvents from "../../hooks/useEvents";
import AddIcon from '@mui/icons-material/Add';

const AddEvent = () => {
  const { addEvent } = useEvents();
  const [formOpen, setFormOpen] = useState(false);
  const emptyForm = {
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
  };
  const [formData, setFormData] = useState(emptyForm);

  function handleFormSubmit() {
      addEvent({ ...formData });
      setFormOpen(false);
      setFormData(emptyForm); // Reset form data after submission
  };

  return (
    <>
      <Button style={{ marginBottom: "10px" }} variant="contained" color="success" onClick={() => setFormOpen(true)}>
        Add Event
        <AddIcon />
      </Button>
      {formOpen && (
        <EventForm
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
          handleCancel={() => setFormOpen(false)}
        />
      )}
    </>
  );
};

export default AddEvent;

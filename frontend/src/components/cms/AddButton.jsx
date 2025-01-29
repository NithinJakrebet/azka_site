import { useState } from "react";
import { Button } from "@mui/material";
import Form from "./Form"
import AddIcon from '@mui/icons-material/Add';

const AddButton = ({
  item,
  addItem,
  emptyForm,
  formFields
}) => {

  const [formOpen, setFormOpen] = useState(false);

  const [formData, setFormData] = useState(emptyForm);
 
  function handleFormSubmit() {
      addItem({ ...formData });
      setFormOpen(false);
      setFormData(emptyForm); // Reset form data after submission
  };

  return (
    <>
      <Button style={{ marginBottom: "10px" }} variant="contained" color="success" onClick={() => setFormOpen(true)}>
        Add {item}
      <AddIcon />
      </Button>
      {formOpen && (
        <Form
            formFields={formFields}
            formData={formData}
            setFormData={setFormData}
            handleFormSubmit={handleFormSubmit}
            handleCancel={() => setFormOpen(false)}
        />
      )}
    </>
  );
};

export default AddButton;

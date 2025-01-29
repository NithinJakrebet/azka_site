import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import Form from "./Form";

const EditButton = ({
  item,              
  editItem,         
  formFields,       
  existingData,      
  sx: sxProp = {}
}) => {

  const [formOpen, setFormOpen] = useState(false);
  
  // Initialize the form data with whatever is passed as existingData
  const [formData, setFormData] = useState(existingData);

  const handleFormSubmit = () => {
    editItem({ ...formData });
    setFormOpen(false);
  };


  const mergedSx = {
      backgroundColor: "#b2edcb",        
      "&:hover": { backgroundColor: "#62e397" },
      ...sxProp,                       
    };


  return (
    <>
      <IconButton
        sx={mergedSx}
        variant="contained"
        color="success"
        onClick={() => setFormOpen(true)}
        startIcon={<CreateIcon />}
      >
            <CreateIcon />
      </IconButton>

      {formOpen && (
        <Form
          title={`Edit ${item}`}
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

export default EditButton;

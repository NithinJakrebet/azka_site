import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useState, useCallback } from "react";
import { debounce } from "lodash";

const Form = ({
  title = "Add New Event",
  formFields,
  formData,
  setFormData,
  handleFormSubmit,
  handleCancel,
}) => {
  const [localFormData, setLocalFormData] = useState(formData);

  // Debounced function to update the main form state
  const debouncedUpdate = useCallback(
    debounce((newData) => {
      setFormData(newData);
    }, 200), // Debounce delay
    [setFormData]
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the local state immediately for smooth UI updates
    setLocalFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Call the debounced function to update the main state
    debouncedUpdate({
      ...localFormData,
      [name]: value,
    });
  };

  return (
    <Dialog open onClose={handleCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: 2,
          }}
        >
          {formFields.map((field) => (
            <TextField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              value={localFormData[field.name] || ""}
              onChange={handleInputChange}
              multiline={field.multiline || false}
              rows={3}       // Start with 3 rows
              maxRows={6}    // Prevent indefinite auto-expansion
              fullWidth
              inputProps={{ style: { resize: "vertical" } }}
              InputLabelProps={
                field.type === "date" || field.type === "time"
                  ? { shrink: true }
                  : undefined
              }
              required
            />
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleFormSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Form;

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { useState, useCallback } from "react";
import { debounce } from "lodash";
import DeleteIcon from "@mui/icons-material/Delete";
import DropzoneField from "./DropzoneField";


const Form = ({
  title = "Add New Event",
  formFields = [],
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
    }, 200),
    [setFormData]
  );

  // Generic field update for text inputs
  function handleInputChange(e) {
    const { name, value } = e.target;
    updateField(name, value);
  };

  // Update field in localFormData and trigger debounced parent update
  function updateField(fieldName, value) {
    setLocalFormData((prev) => {
      const updated = { ...prev, [fieldName]: value };
      debouncedUpdate(updated);
      return updated;
    });
  };

  // Array-specific logic
  function handleArrayChange(fieldName, index, newValue) {
    const currentArray = localFormData[fieldName] || [];
    const updatedArray = [...currentArray];
    updatedArray[index] = newValue;
    updateField(fieldName, updatedArray);
  };

  function addArrayItem(fieldName) {
    const currentArray = localFormData[fieldName] || [];
    updateField(fieldName, [...currentArray, ""]);
  };

  function removeArrayItem(fieldName, index)  {
    const currentArray = localFormData[fieldName] || [];
    const updatedArray = [...currentArray];
    updatedArray.splice(index, 1);
    updateField(fieldName, updatedArray);
  };



  // Render a single field based on its type
  function renderField(field) {

    // Render dropzone if field type is "dropzone"
    if (field.type === "dropzone") {
      const dropzoneValue = localFormData[field.name] || [];
      return (
        <DropzoneField
          key={field.name}
          fieldName={field.name}
          value={dropzoneValue}
          uploadType={field.uploadType} 
          onChange={updateField}  // This function updates the field in localFormData
        />
      );
    }

    // Existing handling for array type
    if (field.type === "array") {
      const arrayValues = localFormData[field.name] || [];
      return (
        <Box key={field.name} sx={{ mt: 2 }}>
          <label style={{ marginBottom: "8px", display: "block" }}>
            {field.label}
          </label>
          {arrayValues.map((val, idx) => (
            <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <TextField
                variant="outlined"
                size="small"
                label={`${field.label} #${idx + 1}`}
                value={val}
                onChange={(e) =>
                  handleArrayChange(field.name, idx, e.target.value)
                }
                sx={{ flex: 1, marginRight: 1 }}
              />
              <IconButton
                color="error"
                onClick={() => removeArrayItem(field.name, idx)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
          <Button variant="outlined" onClick={() => addArrayItem(field.name)}>
            + Add {field.label}
          </Button>
        </Box>
      );
    }

    // Default to a single TextField for normal text/date/time/etc.
    return (
      <TextField
        key={field.name}
        label={field.label}
        name={field.name}
        type={field.type}
        value={localFormData[field.name] || ""}
        onChange={handleInputChange}
        multiline={field.multiline || false}
        rows={3}
        maxRows={6}
        fullWidth
        sx={{ mt: 2 }}
        InputLabelProps={
          field.type === "date" || field.type === "time"
            ? { shrink: true }
            : undefined
        }
        required
      />
    );
  };



  // main component return value
  return (
    <Dialog open onClose={handleCancel}>
      <DialogTitle style={{fontSize: "32px", fontWeight:"bold"}}>{title}</DialogTitle>
      <DialogContent dividers>
        <Box component="form">
          {formFields.map((field) => renderField(field))}
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

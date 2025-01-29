// GalleryForm.jsx
import {
      Dialog,
      DialogTitle,
      DialogContent,
      DialogActions,
      TextField,
      Button,
      Box,
      IconButton
    } from "@mui/material";
    import { useCallback, useState } from "react";
    import { debounce } from "lodash";
    import DeleteIcon from "@mui/icons-material/Delete";
    
    // If you created the custom hook from Step 1, you can import & use it:
    // import useDebouncedForm from "./useDebouncedForm";
    
    const GalleryForm = ({
      title = "Add New Gallery",
      formFields,       // same structure: [{label,name,type},...]
      formData,         // current data for editing or blank for adding
      setFormData,      // function to update parent state
      handleFormSubmit, // what to do on submit
      handleCancel,     // close or cancel the dialog
    }) => {
      // We replicate the debounced approach from your original Form
      const [localFormData, setLocalFormData] = useState(formData);
    
      const debouncedUpdate = useCallback(
        debounce((newData) => {
          setFormData(newData);
        }, 200),
        [setFormData]
      );
    
      const updateField = (fieldName, value) => {
        setLocalFormData((prev) => {
          const updated = { ...prev, [fieldName]: value };
          debouncedUpdate(updated);
          return updated;
        });
      };
    
      // Specialized handler for array fields, e.g. 'images'
      const handleArrayChange = (fieldName, index, value) => {
        const updatedArray = [...(localFormData[fieldName] || [])];
        updatedArray[index] = value;
        updateField(fieldName, updatedArray);
      };
    
      const addArrayItem = (fieldName) => {
        const updatedArray = [...(localFormData[fieldName] || []), ""];
        updateField(fieldName, updatedArray);
      };
    
      const removeArrayItem = (fieldName, index) => {
        const updatedArray = [...(localFormData[fieldName] || [])];
        updatedArray.splice(index, 1);
        updateField(fieldName, updatedArray);
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        updateField(name, value);
      };
    
      // Actually render the fields
      const renderField = (field) => {
        // If this is our special array field, we display multiple textfields
        if (field.type === "array") {
          const arrayValues = localFormData[field.name] || [];
          return (
            <Box key={field.name} sx={{ mb: 2 }}>
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
                    onChange={(e) => handleArrayChange(field.name, idx, e.target.value)}
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
    
        // Otherwise, default to a standard text field
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
            sx={{ mb: 2 }}
            InputLabelProps={
              field.type === "date" || field.type === "time"
                ? { shrink: true }
                : undefined
            }
            required
          />
        );
      };
    
      return (
        <Dialog open onClose={handleCancel} maxWidth="sm" fullWidth>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent dividers>
            <Box component="form" sx={{ mt: 2 }}>
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
    
    export default GalleryForm;
    
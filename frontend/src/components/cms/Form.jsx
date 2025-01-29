import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";

const Form = ({
  title = "Add New Event",        // Fallback if no title passed
  formFields,
  formData,
  setFormData,
  handleFormSubmit,
  handleCancel,
}) => {

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
              value={formData[field.name] || ""}
              onChange={handleInputChange}
              multiline={!!field.multiline}
              rows={field.rows || undefined}
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

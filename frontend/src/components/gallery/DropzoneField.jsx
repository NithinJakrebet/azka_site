// DropzoneField.jsx
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";

const DropzoneField = ({ fieldName, value, onChange }) => {
  // Dummy function to simulate file upload. Replace with your real API call.
  const uploadFile = async (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // For demo purposes, create a local URL for the file.
        const url = URL.createObjectURL(file);
        resolve(url);
      }, 1000);
    });
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach(async (file) => {
        const imageUrl = await uploadFile(file);
        // Append the new image URL to the current value array
        onChange(fieldName, [...(value || []), imageUrl]);
      });
    },
    [fieldName, value, onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box sx={{ mt: 2 }}>
      <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed #cccccc",
          borderRadius: "5px",
          p: 2,
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography>Drop the files here ...</Typography>
        ) : (
          <Typography>
            Drag & drop some files here, or click to select files
          </Typography>
        )}
      </Box>
      {value && value.length > 0 && (
        <Box sx={{ mt: 2 }}>
          {value.map((img, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              <img
                src={img}
                alt={`uploaded ${index}`}
                style={{ maxWidth: "100%", maxHeight: "150px" }}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default DropzoneField;

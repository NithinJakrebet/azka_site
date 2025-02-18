// DropzoneField.jsx
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";
import axios from "axios";

const DropzoneField = ({ fieldName, value, onChange, uploadType, multiple }) => {
  
  // Function to upload file to your backend /upload endpoint
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    // Append the uploadType to the form data so the backend knows which folder to use
    formData.append("type", uploadType);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.url;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };

  // Callback for when files are dropped
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach(async (file) => {
        try {
          const url = await uploadFile(file);
          if (multiple) {
            // For multiple file uploads, append the new URL to the array.
            onChange(fieldName, [...(value || []), url]);
          } else {
            // For single upload, simply set the URL.
            onChange(fieldName, url);
          }
        } catch (error) {
          console.error(error);
        }
      });
    },
    [fieldName, value, onChange, uploadType, multiple]
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
          <Typography>Drop the file here ...</Typography>
        ) : (
          <Typography>
            Drag & drop {multiple ? "files" : "a file"} here, or click to select{" "}
            {multiple ? "files" : "a file"}
          </Typography>
        )}
      </Box>
      {multiple ? (
        value && value.length > 0 && (
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
        )
      ) : (
        value && (
          <Box sx={{ mt: 2 }}>
            <img
              src={value}
              alt="uploaded"
              style={{ maxWidth: "100%", maxHeight: "150px" }}
            />
          </Box>
        )
      )}
    </Box>
  );
};

export default DropzoneField;

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDrop = () => {
  // Callback function to handle files once they're dropped or selected
  const onDrop = useCallback((acceptedFiles) => {
    console.log('Dropped files:', acceptedFiles);
    // You can further process files here, such as sending them to your backend server
  }, []);

  // Set up the dropzone with the onDrop callback
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed #cccccc',
        borderRadius: '5px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer'
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag & drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default DragAndDrop;

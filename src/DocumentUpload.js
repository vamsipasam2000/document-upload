// src/DocumentUpload.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './DocumentUpload.css';

function DocumentUpload() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="upload-container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      <div className="file-input">
        <label htmlFor="file-upload" className="custom-file-upload">
          Choose File
        </label>
        <input id="file-upload" type="file" onChange={(e) => console.log(e.target.files)} />
      </div>
    </div>
  );
}

export default DocumentUpload;

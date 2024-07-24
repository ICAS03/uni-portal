import React, { useState, useRef } from 'react';
import './LectureUpload.css';
import Navbar from '../Navbar/navbar';
import download_icon from '../../assets/icons/download_icon.png';

function LectureUpload() {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedFiles(e.dataTransfer.files);
  };

  const handleDoubleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <Navbar/>
      <form>
      <div className="file-uploader">
        <input 
          type="text" 
          placeholder="Lecture Name..."
          className="lecture-name-input" 
        />
        <hr style={{marginBottom:30}}></hr>
        <div className='uploadContainer'>
          <h2 style={{margin:20}}>Add File</h2>
          <div className="dropareaContainer">
            <div 
              className="drop-area"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDoubleClick={handleDoubleClick}
            >
              <div className="upload-icon">
                <img src={download_icon} alt="" className='download_icon' />
              </div>
              <p>You can drag and drop files to add them, or double-click to select files</p>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                style={{ display: 'none' }} // Hide the default input
                ref={fileInputRef}
              />
            </div>
          </div>
          <button className="upload-button">
            <i className="fas fa-upload"></i> Upload Attachment 
          </button>
        </div>
      </div>
      </form>
    </>
  );
}

export default LectureUpload;
import React, { useState, useEffect } from 'react';

// import { Buffer } from 'buffer';
import http from "../http-common";
import UploadService from "../services/upload-files.service";

function ImageComponent(props) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
      UploadService.getImageById(props.fileName)
      .then(response => {
        
        
        console.log(response.data.imageData);
        setImageSrc(response.data.imageData);
        


      })
      .catch(error => {
        console.error(error);
      });
  }, [props.fileName]);

  return (
    <img src={imageSrc} alt={props.fileName} />
);
}

export default ImageComponent;
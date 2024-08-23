import React from 'react';
import "../stylesheets/gallery.css"


const Gallery = () => {
  return (
    <div className='gallery'>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Gallery</h1>
    </div>
    </div>
  );
};

export default Gallery;


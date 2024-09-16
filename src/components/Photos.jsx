import React from 'react';
import pic1 from '../assets/photo1.jpeg'
import pic2 from '../assets/photo2.jpeg'
import pic3 from '../assets/photo3.webp'

// Define a functional component for an individual photo card
const PhotoCard = ({ imageSrc, title }) => {
  return (
    <div className="photo-card">
      <img src={imageSrc} alt={title} className="photo-image" />
      <div className="photo-title">{title}</div>
    </div>
  );
};

// Define the main Photos component
const Photos = () => {
  return (
      <div className="photo-container">
        <h2>Photo Gallery</h2>
      <PhotoCard imageSrc={pic1} title="Photo 1" />
      <PhotoCard imageSrc={pic2} title="Photo 2" />
      <PhotoCard imageSrc={pic3} title="Photo 3" /><br /><br />
    </div>
  );
};

export default Photos;

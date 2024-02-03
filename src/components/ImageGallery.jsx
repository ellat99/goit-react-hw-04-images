import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import './style.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <>
      <ul className="gallery">
        {images.map(images => (
          <ImageGalleryItem
            key={images.id}
            imageUrl={images.webformatURL}
            alt={images.tags}
            onClick={() => onImageClick(images)}
          />
        ))}
      </ul>
    </>
  );
};
export default ImageGallery;

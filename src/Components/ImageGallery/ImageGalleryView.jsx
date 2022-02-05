import React from 'react';
// import propTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function GalleryMarkup({ pictureGallery, onClose, onFetch }) {
  return (
    <ul className="ImageGallery">
      {pictureGallery.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={onClose}
          onFetch={onFetch}
        />
      ))}
    </ul>
  );
}
export default GalleryMarkup;

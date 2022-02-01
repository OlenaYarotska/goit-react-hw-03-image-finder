// import React, { Component } from 'react';
// import Modal from '../Modal/Modal';

// class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//     largeImage: '',
//   };

//   toggleModal = largeImageURL => {
//     this.setState(prev => ({
//       showModal: !prev.showModal,
//       largeImage: largeImageURL,
//     }));
//   };

//   render() {
//     return (
//       <>
//         {this.props.pictures.map(picture => {
//           const largePicture = () => this.toggleModal(picture.largeImageURL);
//           return (
//             <li className="ImageGalleryItem" key={picture.id}>
//               <img
//                 className="ImageGalleryItem-image"
//                 src={picture.webformatURL}
//                 alt={picture.tags}
//                 onClick={largePicture}
//                 id={picture.largeImageURL}
//               />
//             </li>
//           );
//         })}
//         {this.state.showModal && (
//           <Modal onClose={this.toggleModal} picture={this.state.largeImage} />
//         )}
//       </>
//     );
//   }
// }
// export default ImageGalleryItem;

import propTypes from 'prop-types';

const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  tags,
  onClose,
  onFetch,
}) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => {
        onFetch(largeImageURL, tags);
        onClose();
      }}
    >
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        // onClick={() => onClickImg(largeImageURL)}
      />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  largeImageURL: propTypes.string,
  tags: propTypes.string,
  webformatURL: propTypes.string,
  onClose: propTypes.func,
  onFetch: propTypes.func,
};

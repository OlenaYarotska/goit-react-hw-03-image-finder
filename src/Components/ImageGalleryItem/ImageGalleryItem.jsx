import React, { Component } from 'react';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImage: '',
  };

  toggleModal = largeImageURL => {
    this.setState(prev => ({
      showModal: !prev.showModal,
      largeImage: largeImageURL,
    }));
  };

  render() {
    return (
      <>
        {this.props.pictures.map(picture => {
          const largePicture = () => this.toggleModal(picture.largeImageURL);
          return (
            <li className="ImageGalleryItem" key={picture.id}>
              <img
                className="ImageGalleryItem-image"
                src={picture.webformatURL}
                alt={picture.tags}
                onClick={largePicture}
                id={picture.largeImageURL}
              />
            </li>
          );
        })}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} picture={this.state.largeImage} />
        )}
      </>
    );
  }
}
export default ImageGalleryItem;

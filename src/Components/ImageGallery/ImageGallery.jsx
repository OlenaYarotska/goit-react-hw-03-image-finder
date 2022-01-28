import React, { Component } from 'react';
import TailSpin from '../Spinner/Spinner';
import propTypes from 'prop-types';
import { getImages } from '../../services/api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import { toast } from 'react-toastify';

class ImageGallery extends Component {
  state = {
    images: [],
    isHidden: false,
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.setState({ lading: true });
      getImages(this.props.search, 1)
        .then(images =>
          this.setState(prev => ({
            images,
            isHidden: true,
            page: prev.page + 1,
          })),
        )
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  onClickBtn = () => {
    this.setState({ loading: true });
    getImages(this.props.search, this.state.page)
      .then(images =>
        this.setState(prev => ({
          images: [...prev.images, ...images],
          isHidden: true,
          page: prev.page + 1,
          loading: true,
        })),
      )
      .catch(error => console.log(error))
      .finally(
        () => this.setState({ loading: false }),
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }),
      );
  };

  render() {
    const { loading, images, isHidden } = this.state;

    return (
      <div className="ImageContainer">
        {loading && <TailSpin />}
        <ul className="ImageGallery">
          {images && <ImageGalleryItem pictures={images} />}
        </ul>
        {isHidden && (
          <div className="Btn-wrapper">
            <button type="button" className="Button" onClick={this.onClickBtn}>
              Load more
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default ImageGallery;

ImageGallery.propTypes = {
  search: propTypes.string,
};

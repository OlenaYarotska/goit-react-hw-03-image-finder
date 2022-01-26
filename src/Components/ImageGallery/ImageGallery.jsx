import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import getImages from '../../services/api';
import Audio from '../Spinner/Spinner';
import propTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    images: null,
    isHidden: false,
    page: 1,
    loading: false,
  };
  componentDidUpdate(prevProps) {
    if (prevProps.pictureTag !== this.props.pictureTag) {
      this.setState({ lading: true });
      getImages(this.props.pictureTag, 1)
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
    getImages(this.props.pictureTag, this.state.page)
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
    return (
      <div className="ImageContainer">
        {this.state.loading && <Audio />}
        <ul className="ImageGallery">
          {this.state.images && (
            <ImageGalleryItem pictures={this.state.images} />
          )}
        </ul>
        {this.state.isHidden && (
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
  pictureTag: propTypes.string,
};

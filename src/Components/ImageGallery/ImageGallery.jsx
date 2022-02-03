// import React, { Component } from 'react';
// import TailSpin from '../Spinner/Spinner';
// import propTypes from 'prop-types';
// import { getImages } from '../../services/api';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// // import { toast } from 'react-toastify';
// const perPage = 12;
// class ImageGallery extends Component {
//   state = {
//     images: [],
//     isHidden: false,
//     page: 1,
//     loading: false,
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.search !== this.props.search) {
//       this.setState({ lading: true });
//       getImages(this.props.search, 1)
//         .then(images =>
//           this.setState(prev => ({
//             images,
//             isHidden: true,
//             page: prev.page + 1,
//             totalHits: 0,
//           })),
//         )
//         .catch(error => console.log(error))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//   onClickBtn = () => {
//     this.setState({ loading: true });
//     getImages(this.props.search, this.state.page)

//       .then(images =>
//         this.setState(prev => ({
//           images: [...prev.images, ...images],
//           isHidden: true,
//           page: prev.page + 1,
//           loading: true,

//         })),
//       )
//       .catch(error => console.log(error))
//       .finally(
//         () => this.setState({ loading: false }),
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         }),
//       );
//   };
// // hasNextPage = this.totalHits > this.page * perPage;
// //   hasImages = (images) => {
// //     if (images.length > 0) {
// //       this.setState({ isHidden: false })
// //     } else
// //     { this.setState({ isHidden: true }) }
// //     console.log(this.hasImages)
// //   }
//   render() {
//     const { loading, images, } = this.state;

//     return (
//       <div className="ImageContainer">
//         {loading && <TailSpin />}
//         <ul className="ImageGallery">
//           {images && <ImageGalleryItem pictures={images} />}
//         </ul>
//         {images.length !== 0 &&  (
//           <div className="Btn-wrapper">
//             <button type="button" className="Button" onClick={this.onClickBtn}>
//                 Load more
//               </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// export default ImageGallery;

// ImageGallery.propTypes = {
//   search: propTypes.string,
// };

// / export default ImageGallery;

// ImageGallery.propTypes = {
//   pictures: propTypes.array,
//   onClickImg:propTypes.func,
// };

import React, { Component } from 'react';
import propTypes from 'prop-types';
import { fetchImages } from '../../services/api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import Button from '../Button/Button';

function endOfGallery(page, totalHits, onLoading) {
  const totalImgs = totalHits / 12;

  if (page !== 1 && page > totalImgs) {
    onLoading(false);
    return toast('End of gallery');
  }
}

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    totalHits: 0,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevPicture = prevProps.picture;
    const nextPicture = this.props.picture;
    const { totalHits, page } = this.state;
    const { onLoading } = this.props;

    if (prevPicture !== nextPicture) {
      this.setState({ page: 1, images: [] });
    }
    if (
      (prevPicture !== nextPicture && page === 1) ||
      prevState.page !== page
    ) {
      onLoading(true);

      await fetchImages(nextPicture, this.props.onLoading, page)
        .then(gallery => {
          if (gallery.hits.length === 0) {
            this.onLoading(false);

            return Promise.reject(new Error(toast('Nothing is found')));
          }
          this.setState(prevState => {
            return {
              status: 'resolved',
              images: [...prevState.images, ...gallery.hits],
              totalHits: gallery.totalHits,
            };
          });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
          endOfGallery(page, totalHits, this.props.onLoading);
          this.onLoading(false);
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  onClickBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, onClose, onFetch, totalHits } = this.state;

    return (
      <div className="ImageContainer">
        <ul className="ImageGallery">
          {images.map(({ id, webformatURL, tags, largeImageURL }) => (
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

        <div className="Btn-wrapper">
          {totalHits > images.length && (
            <Button type="button" className="Button" onClick={this.onClickBtn}>
              Load more
            </Button>
          )}
        </div>
      </div>
    );
  }
}
export default ImageGallery;

ImageGallery.propTypes = {
  imagesGallery: propTypes.string,
  onClose: propTypes.func,
  onFetch: propTypes.func,
};

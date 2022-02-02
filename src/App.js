// import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Searchbar from './Components/Searchbar/Searchbar';
// import ImageGallery from './Components/ImageGallery/ImageGallery';

// class App extends Component {
//   state = {
//     search: '',
//   };

//   handleFormSubmit = search => {
//     this.setState({ search });
//   };

//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery search={this.state.search} />
//         <ToastContainer />
//       </>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import TailSpin from './Components/Spinner/Spinner';
import Modal from './Components/Modal/Modal';

class App extends Component {
  state = {
    search: '',
    loading: false,
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  largePicture = (largeImageURL, tags) => {
    this.setState({ largeImageURL, tags });
  };
  setLoading = value => {
    this.setState({ loading: value });
  };
  handleSubmitForm = search => {
    this.setState({ search });
  };

  render() {
    const {
      loading,
      showModal,
      search,
      toggleModal,
      setLoading,
      largeImageURL,
      largePicture,
      tags,
    } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmitForm} />

        <ImageGallery
          picture={search}
          onClose={toggleModal}
          onFetch={largePicture}
          onLoading={setLoading}
        />

        {loading && <TailSpin />}
        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={largeImageURL} alt={tags} />
            <button type="button" onClick={toggleModal} />
          </Modal>
        )}
        <ToastContainer />
      </>
    );
  }
}

export default App;

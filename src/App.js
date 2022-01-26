import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    pictureTag: '',
  };

  handleFormSubmit = pictureTag => {
    this.setState({ pictureTag });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictureTag={this.state.pictureTag} />
        <ToastContainer />
      </>
    );
  }
}

export default App;

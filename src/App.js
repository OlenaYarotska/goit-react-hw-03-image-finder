import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    search: '',
  };

  handleFormSubmit = search => {
    this.setState({ search });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery search={this.state.search} />
        <ToastContainer />
      </>
    );
  }
}

export default App;

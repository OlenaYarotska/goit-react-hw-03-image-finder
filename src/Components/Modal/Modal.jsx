import propTypes from 'prop-types';
import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose(evt);
    }
  };
  handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose(evt);
    }
  };
  render() {
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={this.props.children} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
Modal.propTypes = {
  picture: propTypes.string,
};

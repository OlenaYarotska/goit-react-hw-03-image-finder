import propTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
const modal = document.querySelector('#modal-root');

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
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modal,
    );
  }
}
export default Modal;
Modal.propTypes = {
  picture: propTypes.string,
};

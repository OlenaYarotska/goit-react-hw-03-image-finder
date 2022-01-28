import { TailSpin } from 'react-loader-spinner';
import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <div>
        {' '}
        <TailSpin
          type="TailSpin"
          color="black"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
}
export default Spinner;

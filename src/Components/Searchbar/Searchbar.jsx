// class Searchbar extends Component {
//   state = {
//     inputValue: '',
//   };

//   handleChange = evt => this.setState({ inputValue: evt.currentTarget.value });

//   handleSubmit = evt => {
//     evt.preventDefault();
//     if (this.state.inputValue.trim() === '') {
//       toast.error('Please type something');
//       return;
//     }
//     this.props.onSubmit(this.state.inputValue);
//     evt.currentTarget.reset();
//   };

//   render() {
//     return (
//       <>
//         <header className="Searchbar">
//           <form className="SearchForm" onSubmit={this.handleSubmit}>
//             <button type="submit" className="SearchForm-button">
//               <span className="SearchForm-button-label">Search</span>
//             </button>

//             <input
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//               onChange={this.handleChange}
//               className="SearchForm-input"
//             />
//           </form>
//         </header>
//       </>
//     );
//   }
// }
// export default Searchbar;

// Searchbar.propTypes = {
//   onSubmit: propTypes.func,
// };

import propTypes from 'prop-types';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = evt => this.setState({ search: evt.target.value });

  handleSubmit = evt => {
    evt.preventDefault();
    const { search } = this.state;
    if (search.trim() === '') {
      toast.error('Please type something');
      return;
    }
    this.props.onSubmit(search);
    evt.target.reset();
    // this.setState({ search: '' });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              type="text"
              autoComplete="off"
              autoFocus
              value={this.state.search}
              placeholder="Search images and photos"
              onChange={this.handleChange}
              className="SearchForm-input"
            />
          </form>
        </header>
      </>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};

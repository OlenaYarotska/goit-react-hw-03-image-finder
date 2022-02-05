import propTypes from 'prop-types';
const Button = ({ onClick }) => {
  return (
    <div className="Btn-wrapper">
      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
export default Button;

Button.propTypes = {
  onClickBtn: propTypes.func,
};

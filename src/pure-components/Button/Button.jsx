import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ onClick, className, children }) => (
  <button
    className={`${styles.button} ${className}`}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  children: '',
  className: '',
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = ({ color, children }) => (
  <section style={{ '--color': color }} className={`${styles.cardWrapper}`}>
    {children}
  </section>
);

Card.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.number.isRequired,
};

export default Card;

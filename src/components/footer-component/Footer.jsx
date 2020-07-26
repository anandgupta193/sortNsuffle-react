import React from 'react';
import { DEFAULT_FOOTER, AUTHOR } from '../../constants/FooterConstants';
import styles from './Footer.scss';

const Footer = () => {
  const footerText = `${DEFAULT_FOOTER} ${AUTHOR}`;
  return (
    <footer className={styles.footerWrapper}>
      { footerText }
    </footer>
  );
};

export default Footer;

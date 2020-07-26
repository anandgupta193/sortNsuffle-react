import React from 'react';
import Cards from './cards-component/Cards';
import Action from './action-component/Action';
import Footer from './footer-component/Footer';
import styles from './App.scss';
import APP_HEADING from '../constants/CommonConstants';

const App = () => (
  <section className={styles.app}>
    <span className={styles.appHeading}>{ APP_HEADING }</span>
    <section className={styles.main}>
      <Action />
      <Cards />
    </section>
    <Footer />
  </section>
);

export default App;

import React from 'react';
import Cards from './cards-component/Cards';
import Action from './action-component/Action';
import Footer from './footer-component/Footer';
import styles from './App.scss';

const App = () => {
  const name = 'App';
  return (
    <section className={styles.app}>
      {name}
      <section className={styles.main}>
        <Cards />
        <Action />
      </section>
      <Footer />
    </section>
  );
};

export default App;

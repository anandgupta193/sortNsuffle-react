import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Cards.scss';
import Card from './card-component/Card';

const Cards = () => {
  const cards = useSelector((store) => store.shuffledCards);
  const renderCards = (data) => data.map((item) => <Card key={item.value} color={item.color}>{item.value}</Card>);

  return (
    <section className={styles.cardsWrapper}>
      {
        renderCards(cards)
      }
    </section>
  );
};

Cards.propTypes = {};

export default Cards;

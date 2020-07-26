import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../pure-components/Button/Button';
import shuffle from '../../actions/ShuffleAction';
import sort from '../../actions/SortAction';
import styles from './Action.scss';
import { SHUFFLE, SORT } from '../../constants/ActionConstants';

const Action = () => {
  const disptach = useDispatch();

  const onShuffle = () => {
    disptach(shuffle());
  };

  const onSort = () => {
    disptach(sort());
  };

  return (
    <section className={styles.actionWrapper}>
      <Button onClick={onShuffle}>{ SHUFFLE }</Button>
      <Button onClick={onSort}>{ SORT }</Button>
    </section>
  );
};

export default Action;

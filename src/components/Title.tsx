import { FC } from 'react';
import styles from './App.module.scss';

const Title: FC<{ text: string }> = ({ text }) => (
  <h3 className={styles.test}>{text}</h3>
);

export default Title;

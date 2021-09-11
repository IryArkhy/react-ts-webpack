import { FC } from 'react';
import Header from './Header';
import styles from '../App.module.scss';

const Card: FC = () => (
  <div className={styles.card}>
    <Header />
    <div className={styles.cardBody}>
      <h4>This is a simple boilerplate</h4>
      <p>Why was it created?</p>
      <ul>
        <li>To make setting up the environment quicker!</li>
        <li>To show recruiting company your skills.</li>
        <li>To use it for personal projects.</li>
        <li>To get more freedom with your tools!</li>
        <li>
          To reduce the time when you receive techical tasks from recruiters.
        </li>
      </ul>
    </div>

    <footer className={styles.cardFooter}>
      <p>It is only valid for the webpack version 5.</p>
      <p>
        Every year the documentation is changing so you might want to update
        this boilerplate
      </p>
    </footer>
  </div>
);

export default Card;

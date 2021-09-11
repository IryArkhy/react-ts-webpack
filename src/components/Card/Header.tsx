import { FC } from 'react';
import authorImage from '../../assets/author.jpg';
import styles from '../App.module.scss';

const Header: FC = () => (
  <div className={styles.cardHeader}>
    <p>Creator: </p>
    <div className={styles.creator}>
      <p>Iryna Arkhypchenko</p>
      <img src={authorImage} alt="author" />
    </div>
  </div>
);

export default Header;

import styles from './Location.module.scss';
import { Button } from '../Button/Button';

const Location = (props) => {
  return (
    <li className={styles['location']}>
      <div className={styles['illustration__wrapper']}>
        <div className={styles['small__circle']} />
        <div className={styles[`illustration--${props.location}`]} />
      </div>
      <div>
        <h2>{props.location}</h2>
        <Button className="button">See Location</Button>
      </div>
    </li>
  );
};

export { Location };

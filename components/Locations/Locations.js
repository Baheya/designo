import styles from './Locations.module.scss';
import { Button } from '../Button/Button';

const Locations = (props) => {
  return (
    <ul className={styles['locations__wrapper']}>
      <li className={styles['location']}>
        <div className={styles['illustration__wrapper']}>
          <div className={styles['small__circle']} />
          <div className={styles[`illustration--${props.location}`]} />
          <div>
            <h2>{props.location}</h2>
            <Button className="button--onDark">See Location</Button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export { Locations };

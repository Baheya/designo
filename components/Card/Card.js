import styles from './Card.module.scss';

const Card = (props) => {
  return <div className={styles[`${props.className}`]}>{props.children}</div>;
};

const InfoCard = (props) => {
  return <li className={styles[`${props.className}`]}>{props.children}</li>;
};

export { Card, InfoCard };

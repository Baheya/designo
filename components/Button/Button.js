import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button className={styles[`${props.className}`]}>{props.children}</button>
  );
};

export { Button };

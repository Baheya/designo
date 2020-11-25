import styles from './MainWrapper.module.scss';

const MainWrapper = (props) => (
  <main className={styles['wrapper']}>{props.children}</main>
);

export { MainWrapper };

import styles from './Footer.module.scss';
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../static/assets/shared/desktop';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <ul className={styles['footer__items--nav']}>
        <li>
          <a href="/">
            <img
              className={styles['logo']}
              src="/static/assets/shared/desktop/logo-light.png"
              alt=""
            />
          </a>
        </li>
        <li>
          <a className={styles['footer__link']} href="/company">
            Our company
          </a>
        </li>
        <li>
          <a className={styles['footer__link']} href="/locations">
            Locations
          </a>
        </li>
        <li>
          <a className={styles['footer__link']} href="/contact">
            Contact
          </a>
        </li>
      </ul>
      <ul className={styles['footer__items--contact']}>
        <li>
          <h4>Designo Central Office</h4>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </li>
        <li>
          <h4>Contact Us (Central Office)</h4>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </li>
      </ul>
      <ul className={styles['footer__items--social']}>
        <li>
          <FacebookIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <PinterestIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <YoutubeIcon />
        </li>
      </ul>
    </footer>
  );
};

export { Footer };

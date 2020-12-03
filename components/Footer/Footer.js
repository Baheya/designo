import styles from './Footer.module.scss';
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../../static/assets/shared/desktop';
import { ContactCard } from '../Card/Card';
import Link from 'next/link';

const Footer = (props) => {
  return (
    <footer className={styles['footer']}>
      <ul className={styles['footer__items--nav']}>
        <li>
          <Link href="/">
            <a>
              <img
                className={styles['logo']}
                src="/static/assets/shared/desktop/logo-light.png"
                alt=""
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={styles['footer__link']}>Our company</a>
          </Link>
        </li>
        <li>
          <Link href="/locations">
            <a className={styles['footer__link']}>Locations</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={styles['footer__link']}>Contact</a>
          </Link>
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

const FooterWithCard = () => {
  return (
    <div className={styles['wrapper']}>
      <section>
        <ContactCard />
      </section>
      <Footer />
    </div>
  );
};

export { Footer, FooterWithCard };

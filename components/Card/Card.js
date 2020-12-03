import styles from './Card.module.scss';
import { Button } from '../Button/Button';
import Link from 'next/link';

const SingleCard = (props) => {
  return <div className={styles[`${props.className}`]}>{props.children}</div>;
};

const ListCard = (props) => {
  return <li className={styles[`${props.className}`]}>{props.children}</li>;
};

const HeroCard = (props) => {
  return (
    <SingleCard className="card--hero">
      <div className={styles['card__content']}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </SingleCard>
  );
};

const ProductCard = (props) => {
  return (
    <ListCard className="card--product">
      <img src={props.image} alt={props.imageText} />
      <div className={styles['card__content']}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </ListCard>
  );
};

const ContactCard = () => {
  return (
    <SingleCard className="card--contact">
      <div className={styles['card__content']}>
        <div>
          <h2>Let’s talk about your project</h2>
          <p className={styles['card__text']}>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow. Get in touch
          </p>
        </div>
        <Button className="button--onDark">Get In Touch</Button>
      </div>
      <div className={styles['card__background']} />
    </SingleCard>
  );
};

const NavCard = (props) => {
  return (
    <ListCard className="card--nav">
      <Link href={props.link}>
        <a className={styles['card__link']}>
          <div className={styles['card__content']}>
            <h3 className={styles['card__title']}>{props.title}</h3>
            <p className={styles['card__subtitle']}>
              View Projects
              <span className={styles['arrow__right']}>
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 1l4 4-4 4"
                    stroke="#E7816B"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </p>
          </div>
          <div className={styles[`card__background--${props.bg}`]} />
          <div className={styles['card__background__overlay']} />
        </a>
      </Link>
    </ListCard>
  );
};

const AboutCard = (props) => {
  return (
    <ListCard className="card--about">
      <div className={styles[`img--${props.img}`]} />
      <div className={styles[`bg--${props.theme}`]} />
      <div className={styles[`card__content--${props.theme}`]}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </ListCard>
  );
};

export {
  SingleCard,
  ListCard,
  HeroCard,
  ProductCard,
  NavCard,
  ContactCard,
  AboutCard,
};

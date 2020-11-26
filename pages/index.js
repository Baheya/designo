import Head from 'next/head';
import {
  Button,
  SingleCard,
  ListCard,
  ContactCard,
  NavCard,
  Footer,
} from '../components';
import {
  ResourcefulIllustration,
  FriendlyIllustration,
  PassionateIllustration,
} from '../static/assets/home/desktop';
import { SmallCircleBg, ThreeCirclesBg } from '../static/assets/shared/desktop';
import styles from './index.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['grid']}>
        <section>
          <SingleCard className="card__main">
            <div className={styles['card__content']}>
              <h1 className={styles['card__title']}>
                Award-winning custom designs and digital branding solutions
              </h1>
              <p className={styles['card__text']}>
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
              <Button className="button--onDark">Learn More</Button>
            </div>
            <img
              className={styles['card__img']}
              src="/static/assets/shared/desktop/image-hero-phone.png"
              alt="A decorative image of a phone."
            />
          </SingleCard>
        </section>
        <section>
          <ul className={styles['cards__wrapper']}>
            <NavCard title="Web Design" bg="webDesign" />
            <NavCard title="App Design" bg="appDesign" />
            <NavCard title="Graphic Design" bg="graphicDesign" />
          </ul>
        </section>
        <section>
          <ul className={styles['cards__wrapper']}>
            <ListCard className="card__info">
              <div className={styles['illustration__wrapper']}>
                <PassionateIllustration />
                <SmallCircleBg className={styles['circle__background']} />
              </div>
              <div className={styles['card__content']}>
                <h3 className={styles['card__title']}>Passionate</h3>
                <p>
                  Each project starts with an in-depth brand research to ensure
                  we only create products that serve a purpose. We merge art,
                  design, and technology into exciting new solutions.
                </p>
              </div>
            </ListCard>
            <ListCard className="card__info">
              <div className={styles['illustration__wrapper']}>
                <ResourcefulIllustration />
                <SmallCircleBg className={styles['circle__background']} />
              </div>
              <div className={styles['card__content']}>
                <h3 className={styles['card__title']}>Resourceful</h3>
                <p>
                  Everything that we do has a strategic purpose. We use an agile
                  approach in all of our projects and value customer
                  collaboration. It guarantees superior results that fulfill our
                  clients’ needs.
                </p>
              </div>
            </ListCard>
            <ListCard className="card__info">
              <div className={styles['illustration__wrapper']}>
                <FriendlyIllustration />
                <SmallCircleBg className={styles['circle__background']} />
              </div>
              <div className={styles['card__content']}>
                <h3 className={styles['card__title']}>Friendly</h3>
                <p>
                  We are a group of enthusiastic folks who know how to put
                  people first. Our success depends on our customers, and we
                  strive to give them the best experience a company can provide.
                </p>
              </div>
            </ListCard>
          </ul>
        </section>
        <section>
          <ContactCard />
        </section>
        <Footer className="footer--with_card" />
      </div>
    </>
  );
}

import Head from 'next/head';
import { Button, Card, InfoCard, Footer } from '../components';
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
      <div className={styles['main__grid']}>
        <section>
          <Card className="card__main">
            <div className={styles['content__wrapper']}>
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
          </Card>
        </section>
        <section>
          <ul className={styles['cards__wrapper']}>
            <li className={styles['card__wrapper--grow']}>
              <Card className="card">
                <h3 className={styles['card__heading']}>Web Design</h3>
                <a className={styles['card__link']} href="#">
                  View Projects
                  <span className={styles['arrow__right']}>
                    <svg
                      width="7"
                      height="10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1l4 4-4 4"
                        stroke="#E7816B"
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
                <div className={styles['card__background--webDesign']} />
                <div className={styles['card__background__overlay']} />
              </Card>
            </li>
            <li className={styles['card__wrapper']}>
              <Card className="card">
                <h3 className={styles['card__heading']}>App Design</h3>
                <a className={styles['card__link']} href="#">
                  View Projects
                  <span className={styles['arrow__right']}>
                    <svg
                      width="7"
                      height="10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1l4 4-4 4"
                        stroke="#E7816B"
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
                <div className={styles['card__background--appDesign']} />
                <div className={styles['card__background__overlay']} />
              </Card>
            </li>
            <li className={styles['card__wrapper']}>
              <Card className="card">
                <h3 className={styles['card__heading']}>Graphic Design</h3>
                <a className={styles['card__link']} href="#">
                  View Projects
                  <span className={styles['arrow__right']}>
                    <svg
                      width="7"
                      height="10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1l4 4-4 4"
                        stroke="#E7816B"
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
                <div className={styles['card__background--graphicDesign']} />
                <div className={styles['card__background__overlay']} />
              </Card>
            </li>
          </ul>
        </section>
        <section>
          <ul className={styles['info__cards__wrapper']}>
            <InfoCard className="card__info">
              <div className={styles['illustration__wrapper']}>
                <PassionateIllustration />
                <SmallCircleBg className={styles['circle__background']} />
              </div>
              <div className={styles['content']}>
                <h3 className={styles['title']}>Passionate</h3>
                <p>
                  Each project starts with an in-depth brand research to ensure
                  we only create products that serve a purpose. We merge art,
                  design, and technology into exciting new solutions.
                </p>
              </div>
            </InfoCard>
            <InfoCard className="card__info">
              <div className={styles['illustration__wrapper']}>
                <ResourcefulIllustration />
                <SmallCircleBg className={styles['circle__background']} />
              </div>
              <div className={styles['content']}>
                <h3 className={styles['title']}>Resourceful</h3>
                <p>
                  Everything that we do has a strategic purpose. We use an agile
                  approach in all of our projects and value customer
                  collaboration. It guarantees superior results that fulfill our
                  clients’ needs.
                </p>
              </div>
            </InfoCard>
            <InfoCard className="card__info">
              <div className={styles['illustration__wrapper']}>
                <FriendlyIllustration />
                <SmallCircleBg className={styles['circle__background']} />
              </div>
              <div className={styles['content']}>
                <h3 className={styles['title']}>Friendly</h3>
                <p>
                  We are a group of enthusiastic folks who know how to put
                  people first. Our success depends on our customers, and we
                  strive to give them the best experience a company can provide.
                </p>
              </div>
            </InfoCard>
          </ul>
        </section>
        <section>
          <Card className="card--contact">
            <div className={styles['contact__card__content']}>
              <div>
                <h2>Let’s talk about your project</h2>
                <p className={styles['contact__card__text']}>
                  Ready to take it to the next level? Contact us today and find
                  out how our expertise can help your business grow. Get in
                  touch
                </p>
              </div>
              <Button className="button--onDark">Get In Touch</Button>
            </div>
            <div className={styles['card__background--peach']} />
          </Card>
        </section>
        <Footer className="footer--with_card" />
      </div>
    </>
  );
}

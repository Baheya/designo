import Head from 'next/head';
import styles from './locations.module.scss';
import { Footer, ContactCard, FooterWithCard } from '../components';

const Locations = () => {
  return (
    <>
      <Head>
        <title>Designo Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <ul className={styles['grid__nested']}>
          <li>
            <picture>
              <source
                srcSet="../static/assets/locations/desktop/image-map-canada.png"
                media="(min-width: 1200px)"
              />
              <img
                src="../static/assets/locations/tablet/image-map-canada.png"
                alt="A map of Canada."
                className={styles['img__canada']}
              />
            </picture>
            <div className={styles['content__wrapper--canada']}>
              <div className={styles['content__bg']} />
              <div className={styles['content']}>
                <h1>Canada</h1>
                <div className={styles['content__addresses']}>
                  <div>
                    <h2>Designo Central Office</h2>

                    <p>3886 Wellington Street Toronto</p>
                    <p>Ontario M9C 3J5</p>
                  </div>
                  <div>
                    <h2>Contact</h2>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <picture>
              <source
                srcSet="../static/assets/locations/desktop/image-map-australia.png"
                media="(min-width: 1200px)"
              />
              <img
                src="../static/assets/locations/tablet/image-map-australia.png"
                alt="A map of Australia"
                className={styles['img__australia']}
              />
            </picture>
            <div className={styles['content__wrapper--australia']}>
              <div className={styles['content__bg']} />
              <div className={styles['content']}>
                <h1>Australia</h1>
                <div className={styles['content__addresses']}>
                  <div>
                    <h2>Designo AU Office</h2>
                    <p>19 Balonne Street</p>
                    <p>New South Wales 2443</p>
                  </div>
                  <div>
                    <h2>Contact</h2>
                    <p>P : (02) 6720 9092</p>
                    <p>M : contact@designo.au</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <picture>
              <source
                srcSet="../static/assets/locations/desktop/image-map-united-kingdom.png"
                media="(min-width: 1200px)"
              />
              <img
                src="../static/assets/locations/tablet/image-map-uk.png"
                alt="A map of the United Kingdom"
                className={styles['img__uk']}
              />
            </picture>
            <div className={styles['content__wrapper--uk']}>
              <div className={styles['content__bg']} />
              <div className={styles['content']}>
                <h1>United Kingdom</h1>
                <div className={styles['content__addresses']}>
                  <div>
                    <h2>Designo UK Office</h2>
                    <p>13 Colorado Way</p>
                    <p>Rhyd-y-fro SA8 9GA</p>
                  </div>
                  <div>
                    <h2>Contact</h2>
                    <p>P : 078 3115 1400</p>
                    <p>M : contact@designo.uk</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <FooterWithCard />
    </>
  );
};

export default Locations;

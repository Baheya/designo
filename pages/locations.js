import Head from 'next/head';
import styles from './locations.module.scss';
import { Footer, ContactCard } from '../components';

const Locations = () => {
  return (
    <>
      <Head>
        <title>Designo Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['grid']}>
        <section className={styles['grid__nested']}>
          <img src="" alt="" />
          <div className={styles['content__bg']}></div>
          <div className={styles['content']}>
            <h1>Canada</h1>
            <h2>Designo Central Office</h2>
            <p>3886 Wellington Street Toronto, Ontario M9C 3J5</p>
            <h2>Contact</h2>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <img src="" alt="" />
          <div className={styles['content']}>
            <h1>Australia</h1>
            <h2>Designo AU Office</h2>
            <p>19 Balonne Street</p>
            <p>New South Wales 2443</p>
            <h2>Contact</h2>
            <p>P : (02) 6720 9092</p>
            <p>M : contact@designo.au</p>
          </div>
          <img src="" alt="" />
          <div className={styles['content']}>
            <h1>United Kingdom</h1>
            <h2>Designo UK Office</h2>
            <p>13 Colorado Way</p>
            <p>Rhyd-y-fro SA8 9GA</p>
            <h2>Contact</h2>
            <p>P : 078 3115 1400</p>
            <p>M : contact@designo.uk</p>
          </div>
        </section>
        <section>
          <ContactCard />
        </section>
        <Footer className="footer--with_card" />
      </div>
    </>
  );
};

export default Locations;

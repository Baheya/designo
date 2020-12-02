import Head from 'next/head';
import { Footer, Location } from '../components';
import Form from '../components/Form/Form';
import styles from './contact.module.scss';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['grid']}>
        <section>
          <Form />
        </section>
        <section>
          <ul className={styles['locations__wrapper']}>
            <Location location="australia" />
            <Location location="canada" />
            <Location location="uk" />
          </ul>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;

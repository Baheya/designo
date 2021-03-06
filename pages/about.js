import styles from './about.module.scss';
import Head from 'next/head';
import { FooterWithCard, AboutCard, Location } from '../components';

const AppDesign = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['grid']}>
        <section>
          <ul className={styles['nested__grid']}>
            <AboutCard
              title="About us"
              text="Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
                that make real impact. We’re always looking forward to creating brands, products, and 
                digital experiences that connect with our clients' audiences."
              img="hero"
              theme="primary"
            />
            <AboutCard
              title="World-class talent"
              text="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
            crafted from concept to launch, ensuring success in its given market. We are constantly updating 
            our skills in a myriad of platforms."
              img="talent"
              theme="secondary"
            />
            <li>
              <ul className={styles['locations__wrapper']}>
                <Location location="australia" />
                <Location location="canada" />
                <Location location="uk" />
              </ul>
            </li>
            <AboutCard
              title="The real deal"
              text="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
                opportunity. We make design and technology more accessible and give you tools to measure success."
              img="realDeal"
              theme="secondary"
            />
          </ul>
        </section>
      </div>
      <FooterWithCard />
    </>
  );
};

export default AppDesign;

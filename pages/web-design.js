import Head from 'next/head';
import { HeroCard, ProductCard, NavCard, FooterWithCard } from '../components';
import styles from './web-design.module.scss';

const WebDesign = () => {
  return (
    <>
      <Head>
        <title>Web Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['grid']}>
        <section>
          <HeroCard
            title="Web Design"
            text="We build websites that serve as powerful marketing tools and
                bring memorable brand experiences."
          ></HeroCard>
        </section>
        <section>
          <ul>
            <ProductCard
              title="Express"
              text="A multi-carrier shipping website for ecommerce businesses"
              image="/static/assets/web-design/desktop/image-express.jpg"
            />
            <ProductCard
              title="Transfer"
              text="Site for low-cost money transfers and sending money within seconds"
              image="/static/assets/web-design/desktop/image-transfer.jpg"
            />
            <ProductCard
              title="Photon"
              text="A state-of-the-art music player with high-resolution audio and DSP effects"
              image="/static/assets/web-design/desktop/image-photon.jpg"
            />
            <ProductCard
              title="Builder"
              text="Connects users with local contractors based on their location"
              image="/static/assets/web-design/desktop/image-builder.jpg"
            />
            <ProductCard
              title="Blogr"
              text="Blogr is a platform for creating an online blog or publication"
              image="/static/assets/web-design/desktop/image-blogr.jpg"
            />
            <ProductCard
              title="Camp"
              text="Get expert training in coding, data, design, and digital marketing"
              image="/static/assets/web-design/desktop/image-camp.jpg"
            />
          </ul>
        </section>
        <section>
          <ul>
            <NavCard title="App Design" bg="appDesign" link="app-design" />
            <NavCard
              title="Graphic Design"
              bg="graphicDesign"
              link="graphic-design"
            />
          </ul>
        </section>
      </div>
      <FooterWithCard />
    </>
  );
};

export default WebDesign;

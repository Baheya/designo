import styles from './about.module.scss';
import Head from 'next/head';
import {
  HeroCard,
  ProductCard,
  ContactCard,
  Footer,
  NavCard,
} from '../components';

const AppDesign = () => {
  return (
    <>
      <Head>
        <title>Graphic Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['grid']}>
        <section>
          <HeroCard
            title="Graphic Design"
            text="We deliver eye-catching branding materials that are tailored to meet your business objectives."
          />
        </section>
        <section>
          <ul>
            <ProductCard
              title="Tim Brown"
              text="A book cover designed for Tim Brown’s new release, ‘Change’"
              image="/static/assets/graphic-design/desktop/image-change.jpg"
            />
            <ProductCard
              title="Boxed water"
              text="A simple packaging concept made for Boxed Water"
              image="/static/assets/graphic-design/desktop/image-boxed-water.jpg"
            />
            <ProductCard
              title="Science!"
              text="A poster made in collaboration with the Federal Art Project"
              image="/static/assets/graphic-design/desktop/image-science.jpg"
            />
          </ul>
        </section>
        <section>
          <ul>
            <NavCard title="App Design" bg="appDesign" />
            <NavCard title="Web Design" bg="webDesign" />
          </ul>
        </section>
        <section>
          <ContactCard />
        </section>
        <Footer className="footer--with_card" />
      </div>
    </>
  );
};

export default AppDesign;

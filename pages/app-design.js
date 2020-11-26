import styles from './app-design.module.scss';
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
        <title>App Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['grid']}>
        <section>
          <HeroCard
            title="App Design"
            text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
          />
        </section>
        <section>
          <ul>
            <ProductCard
              title="Airfilter"
              text="Solving the problem of poor indoor air quality by filtering the air"
              image="/static/assets/app-design/desktop/image-airfilter.jpg"
            />
            <ProductCard
              title="Eyecam"
              text="Product that lets you edit your favorite photos and videos at any time"
              image="/static/assets/app-design/desktop/image-eyecam.jpg"
            />
            <ProductCard
              title="Faceit"
              text="Get to meet your favorite internet superstar with the faceit app"
              image="/static/assets/app-design/desktop/image-faceit.jpg"
            />
            <ProductCard
              title="Todo"
              text="A todo app that features cloud sync with light and dark mode"
              image="/static/assets/app-design/desktop/image-todo.jpg"
            />
            <ProductCard
              title="Loopstudios"
              text="A VR experience app made for Loopstudios"
              image="/static/assets/app-design/desktop/image-loopstudios.jpg"
            />
          </ul>
        </section>
        <section>
          <ul>
            <NavCard title="Web Design" bg="webDesign" />
            <NavCard title="Graphic Design" bg="graphicDesign" />
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

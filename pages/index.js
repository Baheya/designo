import Head from 'next/head';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          <li>Our Company</li>
          <li>Locations</li>
          <li>Contact</li>
        </ul>
        <section>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button modifiers={['onDark']}>LEARN MORE</Button>
        </section>
        <section>
          <ul>
            <li>Web Design View Projects</li>
            <li>App Design View Projects</li>
            <li>Graphic Design View Projects</li>
          </ul>
        </section>
        <section>
          <ul>
            <li>
              Passionate Each project starts with an in-depth brand research to
              ensure we only create products that serve a purpose. We merge art,
              design, and technology into exciting new solutions.
            </li>
            <li>
              Resourceful Everything that we do has a strategic purpose. We use
              an agile approach in all of our projects and value customer
              collaboration. It guarantees superior results that fulfill our
              clients’ needs.
            </li>
            <li>
              Friendly We are a group of enthusiastic folks who know how to put
              people first. Our success depends on our customers, and we strive
              to give them the best experience a company can provide.
            </li>
          </ul>
        </section>
        <section>
          <h2>Let’s talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow. Get in touch
          </p>
        </section>
      </main>
      <footer>
        <ul>
          <li>Our company</li>
          <li>Locations</li>
          <li>Contact</li>
        </ul>
        <div>
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
      </footer>
    </>
  );
}

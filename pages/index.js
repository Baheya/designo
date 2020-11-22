import Head from 'next/head';
import { Button, Card, InfoCard } from '../components';
import styled from 'styled-components';
import { white, peach } from '../utils';
import {
  ResourcefulIllustration,
  FriendlyIllustration,
  PassionateIllustration,
} from '../static/assets/home/desktop';
import { CircleBg } from '../static/assets/shared/desktop';

const H1 = styled.h1`
  color: ${white.primary};
  text-align: center;
  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const Para = styled.p`
  color: ${white.primary};
  text-align: center;
  margin: 30px 20px;
  @media (min-width: 750px) {
    margin: 20px 60px;
  }
  @media (min-width: 1200px) {
    text-align: left;
    margin: 28px 0 40px;
  }
`;

const HeroCardWrapper = styled.div`
  height: 843px;
  @media (min-width: 1200px) {
    height: 640px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 24px 0;
  @media (min-width: 750px) {
    margin: 60px 58px 0;
  }
  @media (min-width: 1200px) {
    max-width: 540px;
    align-items: flex-start;
    margin: 145px 95px;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  left: 50%;
  top: 135px;
  transform: translate3d(-50%, 170px, 0);
  @media (min-width: 1200px) {
    left: 80%;
    top: -30%;
  }
`;

const MainWrapper = styled.main`
  @media (min-width: 750px) {
    padding: 0 40px;
  }
  @media (min-width: 1200px) {
    padding: 0 165px;
  }
`;

const WebDesignImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: brightness(40%);
  background-image: url('/static/assets/home/mobile/image-web-design.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 750px) {
    background-image: url('/static/assets/home/tablet/image-web-design.jpg');
  }
  @media (min-width: 1200px) {
    background-image: url('/static/assets/home/desktop/image-web-design-large.jpg');
  }
`;

const AppDesignImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: brightness(40%);
  background-image: url('/static/assets/home/mobile/image-app-design.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 750px) {
    background-image: url('/static/assets/home/tablet/image-app-design.jpg');
  }
  @media (min-width: 1200px) {
    background-image: url('/static/assets/home/desktop/image-app-design.jpg');
  }
`;

const GraphicDesignImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: brightness(40%);
  background-image: url('/static/assets/home/mobile/image-graphic-design.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 750px) {
    background-image: url('/static/assets/home/tablet/image-graphic-design.jpg');
  }
  @media (min-width: 1200px) {
    background-image: url('/static/assets/home/desktop/image-graphic-design.jpg');
  }
`;

const CardHeader = styled.h3`
  color: ${white.primary};
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 1.4px;
  z-index: 2;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const CardLink = styled.a`
  font-size: 15px;
  letter-spacing: 5px;
  color: ${white.primary};
  text-decoration: none;
  z-index: 2;
  text-transform: uppercase;
  text-align: center;
`;

const SectionWrapper = styled.section`
  padding: 120px 25px;
  @media (min-width: 750px) {
    padding: 120px 0;
  }
`;

const CardsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 800px;
  justify-content: space-evenly;
  @media (min-width: 750px) {
    height: 690px;
  }
  @media (min-width: 1200px) {
    height: 640px;
  }
`;

const CardWrapper = styled.li`
  flex-grow: 1;
  margin: 12px 0;
  @media (min-width: 1200px) {
    height: ${(props) => props.height};
    margin-right: ${(props) => props.margin};
  }
`;

const ArrowRight = styled.span`
  padding-left: 15px;
`;

const ActiveImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:hover {
    background: rgba(255, 173, 155, 1);
    opacity: 0.5;
    cursor: pointer;
    z-index: 0;
  }
`;

const InfoCardsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const IllustrationWrapper = styled.div`
  position: relative;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainWrapper>
        <section>
          <HeroCardWrapper>
            <Card modifiers={['heroCard']}>
              <ContentWrapper>
                <H1>
                  Award-winning custom designs and digital branding solutions
                </H1>
                <Para>
                  With over 10 years in the industry, we are experienced in
                  creating fully responsive websites, app design, and engaging
                  brand experiences. Find out more about our services.
                </Para>
                <Button modifiers={['onDark']}>Learn More</Button>
              </ContentWrapper>
              <HeroImage
                src="/static/assets/shared/desktop/image-hero-phone.png"
                alt="A decorative image of a phone."
              />
            </Card>
          </HeroCardWrapper>
        </section>
        <SectionWrapper>
          <CardsWrapper>
            <CardWrapper height="100%" margin="30px">
              <Card>
                <CardHeader>Web Design</CardHeader>
                <CardLink href="#">
                  View Projects
                  <ArrowRight>
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
                  </ArrowRight>
                </CardLink>
                <WebDesignImage />
                <ActiveImageOverlay />
              </Card>
            </CardWrapper>
            <CardWrapper>
              <Card>
                <CardHeader>App Design</CardHeader>
                <CardLink href="#">
                  View Projects
                  <ArrowRight>
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
                  </ArrowRight>
                </CardLink>
                <AppDesignImage />
                <ActiveImageOverlay />
              </Card>
            </CardWrapper>
            <CardWrapper>
              <Card>
                <CardHeader>Graphic Design</CardHeader>
                <CardLink href="#">
                  View Projects
                  <ArrowRight>
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
                  </ArrowRight>
                </CardLink>
                <GraphicDesignImage />
                <ActiveImageOverlay />
              </Card>
            </CardWrapper>
          </CardsWrapper>
        </SectionWrapper>
        <SectionWrapper>
          <InfoCardsWrapper>
            <InfoCard>
              <IllustrationWrapper>
                <PassionateIllustration />
                <CircleBg />
              </IllustrationWrapper>
              Passionate Each project starts with an in-depth brand research to
              ensure we only create products that serve a purpose. We merge art,
              design, and technology into exciting new solutions.
            </InfoCard>
            <InfoCard>
              <IllustrationWrapper>
                <ResourcefulIllustration />
              </IllustrationWrapper>
              Resourceful Everything that we do has a strategic purpose. We use
              an agile approach in all of our projects and value customer
              collaboration. It guarantees superior results that fulfill our
              clients’ needs.
            </InfoCard>
            <InfoCard>
              <IllustrationWrapper>
                <FriendlyIllustration />
              </IllustrationWrapper>
              Friendly We are a group of enthusiastic folks who know how to put
              people first. Our success depends on our customers, and we strive
              to give them the best experience a company can provide.
            </InfoCard>
          </InfoCardsWrapper>
        </SectionWrapper>
        <section>
          <h2>Let’s talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow. Get in touch
          </p>
        </section>
      </MainWrapper>
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

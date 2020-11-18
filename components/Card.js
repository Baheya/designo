import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { peach } from '../utils';

const CARD_MODIFIRES = {
  heroCard: () => `
    height: 843px;
    align-items: start;
    justify-content: flex-start;
    background-image: url('../static/assets/home/desktop/bg-pattern-hero-home.svg');
  background-repeat: no-repeat;
  background-position: right;
  background-color: ${peach.primary};
    `,
};

const Card = styled.div`
  width: auto;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
  @media (min-width: 750px) {
    margin: 0 40px;
    border-radius: 15px;
  }
  ${applyStyleModifiers(CARD_MODIFIRES)}
`;

export default Card;

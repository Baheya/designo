import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const CARD_MODIFIRES = {
  heroCard: () => `
    height: 843px;
    align-items: start;
    `,
};

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
  ${applyStyleModifiers(CARD_MODIFIRES)}
`;

export default Card;

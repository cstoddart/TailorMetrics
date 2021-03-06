import styled from 'styled-components';

import { Row, Column } from '../../../ui';

export const WelcomeRow = Row.extend`
  height: 650px;
  
  @media (max-width:980px) {
    height: auto;
    margin-top: 100px;
  }
`;

export const WelcomeColumn1 = Column.extend`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

export const WelcomeColumn2 = Column.extend`
  position: relative;

  @media (max-width:980px) {
    height: 300px;
  }
`;

export const WelcomeContent = styled.div`
  max-width: 350px;
  margin-bottom: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WelcomeTitle = styled.h1`
  font-size: 35px;

  @media (max-width: 980px) {
    font-size: 24px;
    max-width: 250px;
  }
`;

export const WelcomeDetails = styled.p`
  letter-spacing: 2px;
  margin-bottom: 35px;
`;

export const WelcomeBackgroundSquare = styled.div`
  position: absolute;
  bottom: 300px;
  left: -400px;
  z-index: -2;

  @media (max-width: 980px) {
    bottom: 50px;
    left: -200px;
  }
`;

export const WelcomeSquare1 = styled.div`
  position: absolute;
  bottom: 100px;
  right: -100px;
  transition: 1s ease;

  @media (max-width: 980px) {
    right: 0;
    bottom: 150px;
  }
`;

export const WelcomeSquare2 = styled.div`
  position: absolute;
  bottom: 50px;
  right: 300px;
  transition: 1s ease;

  @media (max-width: 980px) {
    right: 175px;
    bottom: 150px;
  }
`;
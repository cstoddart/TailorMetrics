import styled from 'styled-components';

import { BLUE } from '../../../../constants';
import { Row, Column } from '../../../ui';

export const MissionRow = Row.extend`
  height: 650px;

  @media (max-width:980px) {
    height: auto;
  }
`;

export const MissionRowTitle = styled.h2`
  justify-content: flex-start;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${BLUE};
  margin-bottom: 25px;
`;

export const MissionColumn1 = Column.extend`
  position: relative;

  @media (max-width:980px) {
    height: 450px;
  }
`;

export const MissionColumn2 = Column.extend`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

export const MissionSquare1 = styled.div`
  position: absolute;
  bottom: 75px;
  left: -100px;
  z-index: 1;
  transition: 1s ease;

  @media (max-width:980px) {
    bottom: 50px;
    left: 0;
  }
`;

export const MissionSquare2 = styled.div`
  position: absolute;
  bottom: 60px;
  left: 250px;
  z-index: 2;
  transition: 1s ease;

  @media (max-width:980px) {
    bottom: 50px;
    left: 175px;
  }
`;

export const MissionContent = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MissionTitle = styled.h2`
  font-size: 35px;

  @media (max-width: 980px) {
    font-size: 24px;
    max-width: 250px;
  }
`;

export const MissionDetails = styled.p`
  letter-spacing: 2px;
  margin-bottom: 35px;
`;

export const MissionBackgroundSquare = styled.div`
  position: absolute;
  bottom: -400px;
  right: -450px;
  z-index: -2;

  @media (max-width: 980px) {
    bottom: -250px;
    right: -125px;
  }
`;

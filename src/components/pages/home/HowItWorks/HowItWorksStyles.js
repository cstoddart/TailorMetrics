import styled from 'styled-components';

import { BLUE } from '../../../../constants';
import { Row, Column, Button } from '../../../ui';

export const HowItWorksRowContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width:980px) {
    height: auto;
    align-items: flex-start;
  }
`;

export const HowItWorksRow = Row.extend`
  align-items: stretch;
  justify-content: space-between;
`;

export const HowItWorksRowTitle = Row.extend`
  justify-content: flex-start;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${BLUE};
  margin-bottom: 25px;
`;

export const HowItWorksColumn = Column.extend`
  align-items: center;
  justify-content: flex-start;
  max-width: 250px;

  &:not(:last-of-type) {
    margin-right: 100px;
  }

  @media (max-width:980px) {
    max-width: none;
    align-items: flex-start;

    &:not(:last-of-type) {
      margin-right: 0;
    }
  }
`;

export const HighlightContent = styled.div`
  position: relative;
`;

export const HighlightTitle = styled.h2`
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 980px) {
    font-weight: normal;
  }
`;

export const HowItWorksButton = styled(Button)`
  margin-top: 35px;
  align-self: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 980px) {
    align-self: flex-start;
    margin-left: 0;
    margin-right: 0;
  }
`;

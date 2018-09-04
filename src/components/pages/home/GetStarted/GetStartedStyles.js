import styled from 'styled-components';

import { Row, Column, Button } from '../../../ui';

export const GetStartedRow = Row.extend`
  height: 650px;

  @media (max-width:980px) {
    height: auto;
    margin-top: 300px;
    margin-bottom: 200px;
  }
`;

export const GetStartedColumn = Column.extend`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const GetStartedContent = styled.div`
  max-width: 650px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 980px) {
    text-align: left;
    align-items: flex-start;
  }
`;

export const GetStartedTitle = styled.h2`
  font-size: 35px;

  @media (max-width: 980px) {
    font-size: 24px;
    max-width: 250px;
  }
`;

export const GetStartedDetails = styled.p`
  letter-spacing: 2px;
  margin-bottom: 35px;
`;

export const GetStartedButton = styled(Button)`
`;

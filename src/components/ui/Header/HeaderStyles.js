import styled from 'styled-components';

import { Row } from '../Row/Row';

export const StyledHeader = Row.extend`
  margin-top: 25px;
  margin-bottom: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  margin: 0;
  font-weight: bold;
`;

export const HeaderLinks = styled.ul`
  padding: 0;
  display: flex;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const HeaderLink = styled.div`
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 25px;
  }
`;
